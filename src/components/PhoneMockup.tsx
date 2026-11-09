import React, { useEffect, useState } from 'react';
import {
  ArrowLeftRight,
  CheckCircle2,
  Globe2,
  Headphones,
  Mic,
  Radio,
  ShieldCheck,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrandMark } from './BrandMark';

interface PhoneMockupProps {
  mode?: 'conversation' | 'setup' | 'status';
  className?: string;
  animate?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  mode = 'conversation',
  className = '',
  animate = false,
}) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(animate ? 0 : 4);

  useEffect(() => {
    if (!animate) {
      setStep(4);
      return;
    }

    const timers: number[] = [];
    const runCycle = () => {
      setStep(0);
      [750, 2200, 3800, 5400].forEach((delay, idx) => {
        timers.push(window.setTimeout(() => setStep(idx + 1), delay));
      });
      timers.push(window.setTimeout(runCycle, 9600));
    };

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, [animate]);

  return (
    <div className={`phone ${className}`.trim()}>
      <div className="phone-island" aria-hidden="true" />
      <div className="phone-screen">
        {mode === 'conversation' && (
          <>
            <div className="phone-head">
              <span className="phone-brand-mini">
                <BrandMark small />
                <span>Lingora AI</span>
              </span>
              <span className="phone-concept-pill">
                <i className="live-dot-mini" />
                {t('App + Casque', 'App + Headset')}
              </span>
            </div>

            <div className="phone-lang-bar">
              <span className="lang-tag fr">FR / Village</span>
              <span className="lang-swap-icon" aria-hidden="true">
                <ArrowLeftRight size={12} />
              </span>
              <span className="lang-tag en">EN / FR</span>
            </div>

            <div className="phone-dialogue-stream">
              {step >= 1 && (
                <div className="msg speaker-a pop">
                  <div className="msg-meta">
                    <span>{t('Micro Casque A · FR', 'Headset Mic A · FR')}</span>
                    <Mic size={11} />
                  </div>
                  <p>« Bonjour, pouvez-vous m&apos;aider ? »</p>
                </div>
              )}

              {step >= 2 && (
                <div className="msg ai-bridge to-en pop">
                  <div className="msg-meta">
                    <Headphones size={11} />
                    <span>{t('Vers Casque B · EN', 'To Headset B · EN')}</span>
                    <Volume2 size={11} />
                  </div>
                  <p>“Hello, can you help me?”</p>
                  <div className="mini-wave" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}

              {step >= 3 && (
                <div className="msg speaker-b pop">
                  <div className="msg-meta">
                    <span>{t('Micro Casque B · EN', 'Headset Mic B · EN')}</span>
                    <Mic size={11} />
                  </div>
                  <p>“Of course. What do you need?”</p>
                </div>
              )}

              {step >= 4 && (
                <div className="msg ai-bridge to-fr pop">
                  <div className="msg-meta">
                    <Sparkles size={11} />
                    <span>{t('Vers Casque A · FR', 'To Headset A · FR')}</span>
                    <Volume2 size={11} />
                  </div>
                  <p>« Bien sûr. De quoi avez-vous besoin ? »</p>
                </div>
              )}

              {step === 0 && (
                <div className="msg typing pop">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>

            <div className="phone-dual-mic">
              <div className="mic-pill fr-pill">
                <span className="mic-circle">
                  <Mic size={13} />
                </span>
                <div>
                  <small>{t('Micro / Tél.', 'Mic / Phone')}</small>
                  <strong>{t('Locuteur A', 'Speaker A')}</strong>
                </div>
              </div>
              <div className="mic-pill en-pill">
                <span className="mic-circle cyan">
                  <Headphones size={13} />
                </span>
                <div>
                  <small>{t('Casque / Tél.', 'Headset / Phone')}</small>
                  <strong>{t('Locuteur B', 'Speaker B')}</strong>
                </div>
              </div>
            </div>
          </>
        )}

        {mode === 'setup' && (
          <>
            <div className="phone-head">
              <span>{t('Langues & Village', 'Languages & Village')}</span>
              <i>01</i>
            </div>
            <p className="screen-title">
              {t('Chaque langue,', 'Every language,')}
              <br />
              <b>{t('même au village.', 'even in the village.')}</b>
            </p>

            <div className="setup-card active-lang">
              <small>{t('Locuteur 1', 'Speaker 1')}</small>
              <strong>Français / English</strong>
              <span className="setup-badge">
                <Mic size={11} /> {t('Micro téléphone ou casque', 'Phone or headset mic')}
              </span>
            </div>

            <div className="setup-swap-divider">
              <ArrowLeftRight size={14} />
              <span>{t('Traduction bidirectionnelle', 'Bidirectional translation')}</span>
            </div>

            <div className="setup-card target-lang">
              <small>{t('Locuteur 2', 'Speaker 2')}</small>
              <strong>{t('Langue du village / EN', 'Village language / EN')}</strong>
              <span className="setup-badge cyan">
                <Volume2 size={11} /> {t('Restitution vocale directe', 'Direct voice playback')}
              </span>
            </div>

            <div className="setup-footnote">
              <Globe2 size={13} />
              <span>
                {t(
                  'Français, Anglais & Langues locales des villages',
                  'French, English & Local village languages'
                )}
              </span>
            </div>
          </>
        )}

        {mode === 'status' && (
          <>
            <div className="phone-head">
              <span>{t('Casque & App', 'Headset & App')}</span>
              <i>03</i>
            </div>
            <p className="screen-title">
              {t('Du petit micro,', 'From the small mic,')}
              <br />
              <b>{t('au casque de l’autre.', 'to the other’s headset.')}</b>
            </p>

            <div className="status-item">
              <span className="status-icon blue">
                <Headphones size={14} />
              </span>
              <div>
                <b>{t('Casque + Petit micro', 'Headset + Small mic')}</b>
                <small>
                  {t(
                    'Capte votre voix et traduit dans le casque d’en face.',
                    'Captures speech and translates into the partner’s headset.'
                  )}
                </small>
              </div>
            </div>

            <div className="status-item">
              <span className="status-icon cyan">
                <Radio size={14} />
              </span>
              <div>
                <b>{t('Application Téléphone', 'Smartphone App')}</b>
                <small>
                  {t(
                    'Traduit une langue à l’autre directement sur le téléphone.',
                    'Translates between languages directly on the phone.'
                  )}
                </small>
              </div>
            </div>

            <div className="status-item">
              <span className="status-icon indigo">
                <ShieldCheck size={14} />
              </span>
              <div>
                <b>{t('Contrôle & Confidentialité', 'Control & Privacy')}</b>
                <small>
                  {t(
                    'Gestion claire du micro et respect de la vie privée.',
                    'Clear microphone control and user privacy protection.'
                  )}
                </small>
              </div>
            </div>

            <div className="ask-lingora-pill">
              <CheckCircle2 size={14} />
              <span>{t('Double mode : App & Casque', 'Dual mode: App & Headset')}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
