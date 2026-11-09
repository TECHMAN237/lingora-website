import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';
import { PhoneMockup } from './PhoneMockup';

export const MobilePreviewSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mvp-preview" className="section screens">
      <Reveal className="screens-header">
        <p className="kicker">
          {t('Phase 1 · MVP Mobile', 'Phase 1 · Mobile MVP')}
        </p>
        <h2>
          {t('Une interface claire, ', 'A clear interface, ')}
          <br />
          <span className="grad-text">
            {t('centrée sur la voix.', 'centered on voice.')}
          </span>
        </h2>
      </Reveal>

      <Reveal delay={120} className="phones-row">
        <PhoneMockup mode="setup" className="side-phone left" />
        <PhoneMockup mode="conversation" className="center-phone" animate />
        <PhoneMockup mode="status" className="side-phone right" />
      </Reveal>

      <div className="screen-labels">
        <span>{t('Sélection FR ↔ EN', 'FR ↔ EN Selection')}</span>
        <span>{t('Dialogue bidirectionnel', 'Bidirectional dialogue')}</span>
        <span>{t('Contrôle & confidentialité', 'Control & privacy')}</span>
      </div>
    </section>
  );
};
