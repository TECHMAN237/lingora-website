import React, { useState } from 'react';
import { AudioWaveform, Check, Globe2, Headphones, Mic, Smartphone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';

export const HumanConnectionSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeMode, setActiveMode] = useState<number>(0);

  const showcaseModes = [
    {
      id: 'headset',
      badgeFr: 'Casque + Petit Micro Connecté',
      badgeEn: 'Headset + Small Connected Mic',
      titleFr: 'Parlez dans le micro de votre casque, l’autre écoute dans le sien.',
      titleEn: 'Speak into your headset mic, the other person hears it in theirs.',
      descFr:
        'Un casque équipé d’un petit micro capte votre voix et transmet directement la traduction dans le casque de votre interlocuteur.',
      descEn:
        'A headset with a small attached mic captures your speech and sends the translation straight into your partner’s headset.',
      image: '/images/headset-mic-translation.jpg',
      noteTitleFr: 'Micro Casque → Casque',
      noteTitleEn: 'Headset Mic → Headset',
      noteSubFr: 'Traduction directe dans l’oreille de l’autre.',
      noteSubEn: 'Direct translation into the other’s ear.',
      icon: Headphones,
    },
    {
      id: 'phone',
      badgeFr: 'Application Mobile en Parallèle',
      badgeEn: 'Parallel Mobile Application',
      titleFr: 'Un téléphone qui traduit d’une langue à l’autre via l’application.',
      titleEn: 'A phone translating from one language to another via the app.',
      descFr:
        'Utilisez l’application seule sur le téléphone ou en duo avec le casque pour suivre et traduire la conversation en direct.',
      descEn:
        'Use the app standalone on your phone or paired with the headset to follow and translate the conversation live.',
      image: '/images/phone-and-headset-app.jpg',
      noteTitleFr: 'App Mobile + Casque',
      noteTitleEn: 'Mobile App + Headset',
      noteSubFr: 'L’application orchestre la traduction vocale.',
      noteSubEn: 'The app orchestrates live voice translation.',
      icon: Smartphone,
    },
    {
      id: 'villages',
      badgeFr: 'Langues Locales des Villages',
      badgeEn: 'Local Village Languages',
      titleFr: 'Relier les générations grâce aux langues locales des villages.',
      titleEn: 'Connecting generations through local village languages.',
      descFr:
        'Au-delà du français et de l’anglais, Lingora AI intègre la vision des langues maternelles et locales des villages pour que chacun puisse échanger avec les siens.',
      descEn:
        'Beyond French and English, Lingora AI embraces local village mother tongues so everyone can communicate with their community and elders.',
      image: '/images/village-local-languages.jpg',
      noteTitleFr: 'Langues des villages ↔ FR / EN',
      noteTitleEn: 'Village languages ↔ FR / EN',
      noteSubFr: 'Comprendre chaque voix, même au village.',
      noteSubEn: 'Understand every voice, even in the village.',
      icon: Globe2,
    },
  ];

  const current = showcaseModes[activeMode];

  return (
    <section id="human-connection" className="section guide-showcase-section">
      <div className="guide">
        <Reveal className="guide-copy">
          <p className="kicker">
            {t('Casque à micro, App Mobile & Villages', 'Mic Headset, Mobile App & Villages')}
          </p>
          <h2>
            {t('Du micro au casque, ', 'From mic to headset, ')}
            <br />
            {t('jusqu’aux ', 'all the way to ')}
            <span className="grad-text">
              {t('langues de nos villages.', 'local village languages.')}
            </span>
          </h2>
          <p className="sub">
            {t(
              current.descFr,
              current.descEn
            )}
          </p>

          <div className="ecosystem-mode-buttons" role="tablist">
            {showcaseModes.map((m, idx) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="tab"
                  aria-selected={activeMode === idx}
                  className={`eco-mode-btn ${activeMode === idx ? 'active' : ''}`}
                  onClick={() => setActiveMode(idx)}
                >
                  <span className="eco-mode-icon">
                    <Icon size={17} />
                  </span>
                  <div>
                    <strong>{t(m.badgeFr, m.badgeEn)}</strong>
                    <small>{t(m.titleFr, m.titleEn)}</small>
                  </div>
                </button>
              );
            })}
          </div>

          <ul className="guide-points">
            <li>
              <Check size={16} />
              <span>
                {t(
                  'Casque avec petit micro connecté traduisant sur le casque de l’autre',
                  'Headset with small attached mic translating into the other’s headset'
                )}
              </span>
            </li>
            <li>
              <Check size={16} />
              <span>
                {t(
                  'Téléphone traduisant en parallèle d’une langue à l’autre via l’app',
                  'Phone translating in parallel from one language to another via the app'
                )}
              </span>
            </li>
            <li>
              <Check size={16} />
              <span>
                {t(
                  'Prise en compte des langues locales des villages, du français et de l’anglais',
                  'Support vision for local village languages alongside French and English'
                )}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140} className="guide-visual">
          <div className="guide-frame">
            <img
              key={current.image}
              src={current.image}
              alt={t(current.titleFr, current.titleEn)}
              loading="lazy"
            />
          </div>

          <div className="note guide-note">
            <Mic size={17} />
            <span>
              {t(current.noteTitleFr, current.noteTitleEn)}
              <br />
              <b>{t(current.noteSubFr, current.noteSubEn)}</b>
            </span>
            <Sparkles size={15} />
          </div>
        </Reveal>
      </div>

      {/* Galerie rapide des 3 visuels en dessous pour tout voir d'un coup d'œil */}
      <Reveal delay={200} className="hardware-trio-grid">
        {showcaseModes.map((m, idx) => (
          <div
            key={m.id}
            role="button"
            tabIndex={0}
            className={`hardware-trio-card ${activeMode === idx ? 'is-selected' : ''}`}
            onClick={() => setActiveMode(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveMode(idx);
            }}
          >
            <div className="trio-img-wrap">
              <img src={m.image} alt={t(m.badgeFr, m.badgeEn)} loading="lazy" />
              <span className="trio-badge">
                <AudioWaveform size={12} />
                {t(m.badgeFr, m.badgeEn)}
              </span>
            </div>
            <p>{t(m.titleFr, m.titleEn)}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
};
