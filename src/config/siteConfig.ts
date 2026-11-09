/**
 * Configuration centrale de Lingora AI.
 * Conformément au document de référence (Section 14), aucune donnée non confirmée
 * (email, téléphone, réseaux sociaux, mentions légales, endpoint backend) n'est inventée.
 * Ces éléments sont exposés ici de manière propre et configurable.
 */

export interface SocialLinkConfig {
  name: string;
  url: string;
}

export interface SiteConfig {
  brandName: string;
  provisionalTagline: string;
  initialLanguages: {
    source: string;
    target: string;
  };
  initialMarketFocus: string;
  waitlistEndpoint: string;
  contactEmail: string;
  socialLinks: SocialLinkConfig[];
  legalLinks: {
    privacyPolicyUrl: string;
    termsUrl: string;
    legalNoticeUrl: string;
  };
  analyticsEnabled: boolean;
}

const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const siteConfig: SiteConfig = {
  brandName: 'Lingora AI',
  provisionalTagline: 'Speak freely. Understand everyone.',
  initialLanguages: {
    source: 'Français',
    target: 'English',
  },
  initialMarketFocus: 'Cameroun & International',
  // Laisser vide tant qu'aucun backend ou service de formulaire réel n'est connecté
  waitlistEndpoint: (env.VITE_WAITLIST_ENDPOINT || '').trim(),
  contactEmail: (env.VITE_CONTACT_EMAIL || '').trim(),
  // Uniquement affiché si des URLs officielles sont renseignées
  socialLinks: [],
  // Uniquement affiché lorsque les documents légaux officiels existent
  legalLinks: {
    privacyPolicyUrl: (env.VITE_PRIVACY_POLICY_URL || '').trim(),
    termsUrl: (env.VITE_TERMS_URL || '').trim(),
    legalNoticeUrl: (env.VITE_LEGAL_NOTICE_URL || '').trim(),
  },
  analyticsEnabled: env.VITE_ANALYTICS_ENABLED === 'true',
};

export const isWaitlistBackendConfigured = (): boolean => {
  return Boolean(siteConfig.waitlistEndpoint);
};

