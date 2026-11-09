import { siteConfig } from '../config/siteConfig';

/**
 * Événements prévus pour une future intégration analytique (Section 13 du brief) :
 * - clic sur le CTA principal
 * - début de formulaire
 * - inscription confirmée
 * - changement de langue
 * - clic sur les sections clés
 *
 * Aucun tracking intrusif ni outil tiers n'est chargé sans configuration et consentement.
 */
export type AnalyticsEventName =
  | 'cta_primary_click'
  | 'waitlist_form_start'
  | 'waitlist_submission_confirmed'
  | 'waitlist_preview_validated'
  | 'language_switch'
  | 'key_section_click';

export interface AnalyticsEventPayload {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: AnalyticsEventName, payload: AnalyticsEventPayload = {}): void {
  if (!siteConfig.analyticsEnabled) {
    // En l'absence d'outil analytique configuré et consenti, aucune collecte externe n'a lieu.
    return;
  }

  try {
    window.dispatchEvent(
      new CustomEvent('lingora:analytics', {
        detail: {
          event,
          payload,
          timestamp: new Date().toISOString(),
        },
      })
    );
  } catch {
    // Ignorer silencieusement si CustomEvent n'est pas disponible
  }
}

