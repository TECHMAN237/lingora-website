import React from 'react';
import { AudioWaveform, Check, Globe2, Mic, Sparkles, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleSpotlightMove, useReveal } from '../hooks/useReveal';

export const StatementSection: React.FC = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.25);

  const lineOne = [
    t('Vous', 'You'),
    t('parlez.', 'speak.'),
  ];
  const lineTwo = [
    'Lingora AI',
    t('relie.', 'connects.'),
  ];

  const outcomes = [
    [t('Parole capturée & comprise', 'Speech captured & understood'), Mic],
    [t('Sens traduit selon le contexte', 'Meaning translated in context'), Globe2],
    [t('Voix restituée naturellement', 'Voice played back naturally'), Volume2],
  ] as const;

  return (
    <section
      ref={sectionRef}
      className={`statement ${isVisible ? 'is-visible' : ''}`}
      onMouseMove={handleSpotlightMove}
    >
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="statement-grid" aria-hidden="true" />
      <div className="statement-rings" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="statement-inner">
        <p className="statement-kicker">
          <Sparkles size={14} />
          <span>
            {t(
              'Ambition exploratoire · “Speak freely. Understand everyone.”',
              'Exploratory ambition · “Speak freely. Understand everyone.”'
            )}
          </span>
        </p>

        <p className="statement-title">
          {lineOne.map((word, idx) => (
            <span
              key={word}
              className="w"
              style={{ '--i': idx } as React.CSSProperties}
            >
              {word}&nbsp;
            </span>
          ))}
          <br />
          {lineTwo.map((word, idx) => (
            <span
              key={word}
              className="w grad-text"
              style={{ '--i': idx + 2 } as React.CSSProperties}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <div className="statement-flow">
          <div className="voice-pill">
            <span className="voice-mic">
              <Mic size={18} />
            </span>
            <span className="wave" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, k) => (
                <i key={k} style={{ '--k': k } as React.CSSProperties} />
              ))}
            </span>
            <em>
              {t(
                '« Bonjour, pouvez-vous m’aider ? » (FR)',
                '“Bonjour, pouvez-vous m’aider ?” (FR)'
              )}
            </em>
          </div>

          <div className="flow-core" aria-hidden="true">
            <AudioWaveform size={22} />
          </div>

          <div className="chip-stack">
            {outcomes.map(([label, Icon], cIdx) => (
              <div
                key={label}
                className="chip"
                style={{ '--c': cIdx } as React.CSSProperties}
              >
                <Icon size={15} />
                <span>{label}</span>
                <Check size={14} className="chip-check" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="statement-star" aria-hidden="true">
        ✦
      </div>
    </section>
  );
};

