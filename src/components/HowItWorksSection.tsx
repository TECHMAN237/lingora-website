import React from 'react';
import {
  CheckCircle2,
  Cpu,
  Mic,
  RefreshCw,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, useReveal } from '../hooks/useReveal';

export const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();
  const [flowRef, flowVisible] = useReveal<HTMLDivElement>(0.22);

  const steps = [
    {
      num: '01',
      title: t('Parlez naturellement', 'Speak naturally'),
      desc: t(
        'Sélectionnez votre langue et parlez dans le microphone du téléphone.',
        'Select your language and speak into the phone’s microphone.'
      ),
      icon: Mic,
    },
    {
      num: '02',
      title: t('Lingora AI traduit', 'Lingora AI translates'),
      desc: t(
        'L’IA transcrit la voix et traduit le sens selon le contexte.',
        'AI transcribes speech and translates meaning in context.'
      ),
      icon: Cpu,
    },
    {
      num: '03',
      title: t('Écoutez la restitution', 'Listen to playback'),
      desc: t(
        'Une voix synthétisée claire restitue le message dans la langue cible.',
        'Clear synthesized speech plays the message in the target language.'
      ),
      icon: Volume2,
    },
    {
      num: '04',
      title: t('Répondez en retour', 'Reply right back'),
      desc: t(
        'Votre interlocuteur répond dans sa langue et le cycle s’inverse.',
        'Your counterpart replies in their language and the cycle reverses.'
      ),
      icon: RefreshCw,
    },
  ];

  return (
    <section id="how" className="section how-section">
      <div className="how">
        <Reveal className="section-intro">
          <p className="kicker">
            {t('Comment ça marche', 'How it works')}
          </p>
          <h2>
            {t('De la parole à la ', 'From speech to ')}
            <span className="grad-text">
              {t('compréhension.', 'understanding.')}
            </span>
          </h2>
          <p className="sub">
            {t(
              'Conçu autour de la voix pour éviter de taper et lire sur un écran au milieu d’une conversation.',
              'Built around voice so you never have to type and read on a screen mid-conversation.'
            )}
          </p>

          <div className="how-scope-box">
            <div className="scope-row">
              <CheckCircle2 size={16} className="scope-icon-ok" />
              <span>
                <b>{t('Priorité MVP :', 'MVP Priority:')}</b>{' '}
                {t(
                  'Sélection des langues (Français ↔ English), capture et restitution vocale.',
                  'Language selection (French ↔ English), voice capture and playback.'
                )}
              </span>
            </div>
            <div className="scope-row muted-scope">
              <Sparkles size={16} className="scope-icon-future" />
              <span>
                <b>{t('Évolution :', 'Future track:')}</b>{' '}
                {t(
                  'Détection automatique des langues et gestion avancée des interruptions.',
                  'Automatic language detection and advanced interruption handling.'
                )}
              </span>
            </div>
          </div>
        </Reveal>

        <div
          ref={flowRef}
          className={`flow flow-four ${flowVisible ? 'is-visible' : ''}`}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flow-step"
                style={{ '--step': idx } as React.CSSProperties}
              >
                <div className="flow-icon">
                  <Icon size={22} />
                  <span className="ping" aria-hidden="true" />
                </div>
                <span className="flow-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
