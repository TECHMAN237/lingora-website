import React from 'react';
import { Globe2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandMark';

interface FooterProps {
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist }) => {
  const { lang, setLang, t } = useLanguage();

  const hasSocials = siteConfig.socialLinks.length > 0;
  const hasContact = Boolean(siteConfig.contactEmail);
  const hasLegal =
    Boolean(siteConfig.legalLinks.privacyPolicyUrl) ||
    Boolean(siteConfig.legalLinks.termsUrl) ||
    Boolean(siteConfig.legalLinks.legalNoticeUrl);

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <BrandLogo />
          <p className="footer-desc">
            {t(
              'Traduction vocale bidirectionnelle assistée par l’IA, pour se comprendre naturellement d’une langue à l’autre.',
              'AI-assisted bidirectional voice translation to understand each other naturally across languages.'
            )}
          </p>
          <span className="footer-tagline-note">
            “Speak freely. Understand everyone.”
          </span>

          {hasSocials && (
            <div className="socials">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  title={social.name}
                >
                  {social.name.slice(0, 2)}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>{t('Navigation', 'Navigation')}</h4>
            <a href="#top">{t('Accueil', 'Home')}</a>
            <a href="#demo">{t('Concept', 'Concept')}</a>
            <a href="#how">{t('Comment ça marche', 'How it works')}</a>
            <a href="#use-cases">{t("Cas d'usage", 'Use cases')}</a>
            <a href="#roadmap">{t('Vision & Roadmap', 'Vision & Roadmap')}</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-col">
            <h4>{t('Projet', 'Project')}</h4>
            <button
              type="button"
              className="footer-link-btn"
              onClick={onOpenWaitlist}
            >
              {t("Liste d'attente", 'Waiting list')}
            </button>
            <a href="#mvp-preview">{t('Aperçu MVP', 'MVP Preview')}</a>
            {hasContact && (
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            )}
            {hasLegal && (
              <>
                {siteConfig.legalLinks.privacyPolicyUrl && (
                  <a href={siteConfig.legalLinks.privacyPolicyUrl}>
                    {t('Confidentialité', 'Privacy')}
                  </a>
                )}
                {siteConfig.legalLinks.termsUrl && (
                  <a href={siteConfig.legalLinks.termsUrl}>
                    {t('Conditions', 'Terms')}
                  </a>
                )}
                {siteConfig.legalLinks.legalNoticeUrl && (
                  <a href={siteConfig.legalLinks.legalNoticeUrl}>
                    {t('Mentions légales', 'Legal')}
                  </a>
                )}
              </>
            )}
          </div>

          <div className="footer-col">
            <h4>{t('Langue', 'Language')}</h4>
            <div className="footer-lang-buttons">
              <button
                type="button"
                className={`footer-lang-chip ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => setLang('fr')}
              >
                <Globe2 size={13} /> FR
              </button>
              <button
                type="button"
                className={`footer-lang-chip ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                <Globe2 size={13} /> EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Lingora AI</small>
        <small className="footer-transparency">
          {t(
            'Illustrations conceptuelles d’un produit en cours de développement.',
            'Conceptual illustrations of a product under development.'
          )}
        </small>
      </div>
    </footer>
  );
};
