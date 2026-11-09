import { isWaitlistBackendConfigured, siteConfig } from '../config/siteConfig';
import { trackEvent } from './analyticsService';

export interface WaitlistFormData {
  fullName: string;
  email: string;
  primaryLanguage: string;
  targetLanguage: string;
  userType: string;
  notes?: string;
}

export type WaitlistSubmissionResult =
  | {
      status: 'recorded';
      submittedAt: string;
    }
  | {
      status: 'unconfigured_preview';
      submittedAt: string;
      payload: WaitlistFormData;
    }
  | {
      status: 'error';
      messageFr: string;
      messageEn: string;
    };

/**
 * Soumission de la liste d'attente.
 * RÈGLE STRICTE (Section 7 & Section 11.H) :
 * Ne jamais simuler une inscription réussie si aucun backend ne l'a réellement enregistrée.
 */
export async function submitWaitlistEntry(
  data: WaitlistFormData
): Promise<WaitlistSubmissionResult> {
  const sanitized: WaitlistFormData = {
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    primaryLanguage: data.primaryLanguage.trim(),
    targetLanguage: data.targetLanguage.trim(),
    userType: data.userType.trim(),
    notes: data.notes?.trim() || undefined,
  };

  if (!isWaitlistBackendConfigured()) {
    trackEvent('waitlist_preview_validated', {
      primaryLanguage: sanitized.primaryLanguage,
      targetLanguage: sanitized.targetLanguage,
      userType: sanitized.userType || 'unspecified',
    });

    return {
      status: 'unconfigured_preview',
      submittedAt: new Date().toISOString(),
      payload: sanitized,
    };
  }

  try {
    const response = await fetch(siteConfig.waitlistEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...sanitized,
        source: 'lingora-official-web',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return {
        status: 'error',
        messageFr: `Le service d'inscription a répondu avec le code ${response.status}. Veuillez réessayer ultérieurement.`,
        messageEn: `The registration service responded with status ${response.status}. Please try again later.`,
      };
    }

    trackEvent('waitlist_submission_confirmed', {
      primaryLanguage: sanitized.primaryLanguage,
      targetLanguage: sanitized.targetLanguage,
    });

    return {
      status: 'recorded',
      submittedAt: new Date().toISOString(),
    };
  } catch {
    return {
      status: 'error',
      messageFr:
        "Impossible de joindre le serveur d'inscription pour le moment. Vos données n'ont pas été enregistrées.",
      messageEn:
        'Unable to reach the registration server at the moment. Your data has not been recorded.',
    };
  }
}

