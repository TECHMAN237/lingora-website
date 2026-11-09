import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  AudioWaveform,
  Clock,
  Globe2,
  Headphones,
  Mic,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analyticsService';
import { PhoneMockup } from './PhoneMockup';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist }) => {
  const { t } = useLanguage();
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [contextIndex, setContextIndex] = useState(0);

  const rotatingContexts = [
    t('au village', 'in local villages'),
    t('en voyage', 'while traveling'),
    t('dans le commerce', 'in business'),
    t('dans vos études', 'in your studies'),
  ];

  useEffect(() => {
    const id = window.setInterval(() => {
      setContextIndex((prev) => (prev + 1) % 4);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const el = visualRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="top" className="hero">
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow enter" style={{ '--e': 0 } as React.CSSProperties}>
            <span className="live" aria-hidden="true" />
            <span>
              {t(
                'App Mobile & Casque à micro connecté · Traduction vocale IA',
                'Mobile App & Connected Mic Headset · AI Voice Translation'
              )}
            </span>
          </div>

          <h1 className="enter" style={{ '--e': 1 } as React.CSSProperties}>
            {t('La langue ne devrait ', 'Language should ')}
            <span className="grad-text">
              {t('jamais être une barrière.', 'never be a barrier.')}
            </span>
          </h1>

          <p className="lead enter" style={{ '--e': 2 } as React.CSSProperties}>
            {t(
              'Se comprendre naturellement via l’application mobile ou d’un casque à l’autre — ',
              'Understand each other naturally via the mobile app or from one headset to another — '
            )}
            <span className="rotator">
              <span
                key={`${contextIndex}-${rotatingContexts[contextIndex]}`}
                className="grad-text word"
              >
                {rotatingContexts[contextIndex]}
              </span>
            </span>
            .
          </p>

          <div className="hero-badges-stack enter" style={{ '--e': 2.5 } as React.CSSProperties}>
            <div className="hero-sub-pill">
              <Globe2 size={15} />
              <span>
                {t(
                  'Français, Anglais & Langues locales des villages',
                  'French, English & Local village languages'
                )}
              </span>
            </div>
            <div className="hero-sub-pill">
              <Headphones size={15} />
              <span>
                {t(
                  'Traduction sur téléphone ou de casque à micro vers casque',
                  'Translation on phone or mic-headset to headset'
                )}
              </span>
            </div>
          </div>

          <div
            className="hero-cta-group enter"
            style={{ '--e': 3 } as React.CSSProperties}
          >
            <div className="hero-primary-actions">
              <button
                type="button"
                id="hero-waitlist-btn"
                className="wl-cta-btn"
                onClick={() => {
                  trackEvent('cta_primary_click', { location: 'hero' });
                  onOpenWaitlist();
                }}
              >
                <span className="wl-cta-ring" aria-hidden="true" />
                <Sparkles size={18} className="wl-cta-icon" />
                <span>{t("Rejoindre la liste d'attente", 'Join the waiting list')}</span>
                <ArrowRight size={16} className="wl-cta-arrow" />
              </button>

              <a
                href="#how"
                className="secondary-cta-btn"
                onClick={() => trackEvent('key_section_click', { section: '#how_from_hero' })}
              >
                <span className="discover-ring" aria-hidden="true">
                  <ArrowDown size={15} />
                </span>
                <span>{t('Découvrir comment ça marche', 'Discover how it works')}</span>
              </a>
            </div>

            <div className="store-soon-row">
              <div
                className="store-badge soon"
                aria-label={t('App Mobile iOS & Android', 'iOS & Android Mobile App')}
              >
                <svg className="badge-logo apple-logo" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  />
                </svg>
                <span className="badge-text">
                  <small>{t('Application', 'Application')}</small>
                  <strong>iOS & Android</strong>
                </span>
                <span className="soon-chip">
                  <Clock size={10} />
                  {t('App', 'App')}
                </span>
              </div>

              <div
                className="store-badge soon"
                aria-label={t('Casque avec micro connecté', 'Connected mic headset')}
              >
                <Headphones className="badge-logo apple-logo" size={22} />
                <span className="badge-text">
                  <small>{t('Écosystème', 'Ecosystem')}</small>
                  <strong>{t('Casque + Micro', 'Headset + Mic')}</strong>
                </span>
                <span className="soon-chip">
                  <Mic size={10} />
                  {t('Direct', 'Live')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true">
            <span />
          </div>
          <div className="orbit orbit-two" aria-hidden="true">
            <span />
          </div>
          <div className="star star-one" aria-hidden="true">
            ✦
          </div>
          <div className="star star-two" aria-hidden="true">
            ✦
          </div>

          <div className="note note-top">
            <Mic size={17} />
            <span>
              {t('Micro du casque / Téléphone', 'Headset Mic / Phone')}
              <br />
              <b>« Bonjour, pouvez-vous m&apos;aider ? »</b>
            </span>
          </div>

          <div className="tilt">
            <PhoneMockup mode="conversation" className="hero-phone" animate />
          </div>

          <div className="note note-bottom">
            <AudioWaveform size={17} />
            <span>
              {t('Traduit dans le casque de l’autre', 'Translated to partner’s headset')}
              <br />
              <b>“Hello, can you help me?”</b>
            </span>
            <Volume2 size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};
