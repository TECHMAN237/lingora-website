import React, { useEffect, useState } from 'react';
import {
  ArrowLeftRight,
  AudioWaveform,
  Briefcase,
  Globe2,
  GraduationCap,
  Headphones,
  Info,
  LucideIcon,
  Mic,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';

interface DialogueScenario {
  id: string;
  labelFr: string;
  labelEn: string;
  subFr: string;
  subEn: string;
  image: string;
  imageCaptionFr: string;
  imageCaptionEn: string;
  icon: LucideIcon;
  personAName: string;
  personARoleFr: string;
  personARoleEn: string;
  personALangTag: string;
  personBName: string;
  personBRoleFr: string;
  personBRoleEn: string;
  personBLangTag: string;
  quoteA: string;
  translatedToEn: string;
  quoteB: string;
  translatedToFr: string;
}

const SCENARIOS: DialogueScenario[] = [
  {
    id: 'headset-app',
    labelFr: 'Casque + Micro & App',
    labelEn: 'Headset + Mic & App',
    subFr: 'Du micro vers le casque de l’autre',
    subEn: 'From mic to partner’s headset',
    image: '/images/headset-mic-translation.jpg',
    imageCaptionFr:
      'Le petit micro du casque capte la voix, l’app sur téléphone traduit et transmet dans le casque de l’autre',
    imageCaptionEn:
      'The small headset mic captures speech, the phone app translates and plays into the other’s headset',
    icon: Headphones,
    personAName: 'Personne A',
    personARoleFr: 'Casque + Micro · FR',
    personARoleEn: 'Headset + Mic · FR',
    personALangTag: 'Français',
    personBName: 'Personne B',
    personBRoleFr: 'Casque + Micro · EN',
    personBRoleEn: 'Headset + Mic · EN',
    personBLangTag: 'English',
    quoteA: '« Bonjour, pouvez-vous m’aider ? »',
    translatedToEn: '“Hello, can you help me?”',
    quoteB: '“Of course. What do you need?”',
    translatedToFr: '« Bien sûr. De quoi avez-vous besoin ? »',
  },
  {
    id: 'villages',
    labelFr: 'Langues des Villages',
    labelEn: 'Village Languages',
    subFr: 'Langue locale ↔ Français / EN',
    subEn: 'Local language ↔ French / EN',
    image: '/images/village-local-languages.jpg',
    imageCaptionFr:
      'Dialogue direct entre une langue maternelle du village et le français ou l’anglais via le téléphone et le casque',
    imageCaptionEn:
      'Direct dialogue between a local village language and French or English via phone and headset',
    icon: Globe2,
    personAName: 'Personne A',
    personARoleFr: 'Habitant · Langue du village',
    personARoleEn: 'Elder · Village language',
    personALangTag: 'Langue locale',
    personBName: 'Personne B',
    personBRoleFr: 'Interlocuteur · FR / EN',
    personBRoleEn: 'Counterpart · FR / EN',
    personBLangTag: 'Français / EN',
    quoteA: '« Bienvenue chez nous au village, installez-vous. » (Langue locale)',
    translatedToEn: '« Bienvenue chez nous au village, installez-vous. » (Audio FR/EN)',
    quoteB: '« Merci infiniment pour votre accueil chaleureux. »',
    translatedToFr: 'Restitution vocale directe dans la langue locale du village',
  },
  {
    id: 'commerce',
    labelFr: 'Commerce & Pro',
    labelEn: 'Commerce & Pro',
    subFr: 'Client & entrepreneur',
    subEn: 'Client & merchant',
    image: '/images/usecase-commerce.jpg',
    imageCaptionFr: 'Accord commercial facilité par le téléphone et les écouteurs à micro',
    imageCaptionEn: 'Business agreement facilitated by the phone app and mic headset',
    icon: Briefcase,
    personAName: 'Personne A',
    personARoleFr: 'Commerçant · FR',
    personARoleEn: 'Merchant · FR',
    personALangTag: 'Français',
    personBName: 'Personne B',
    personBRoleFr: 'Partenaire · EN',
    personBRoleEn: 'Partner · EN',
    personBLangTag: 'English',
    quoteA: '« Votre commande sera prête cet après-midi. »',
    translatedToEn: '“Your order will be ready this afternoon.”',
    quoteB: '“Great, let’s confirm the delivery details.”',
    translatedToFr: '« Parfait, confirmons les détails de livraison. »',
  },
  {
    id: 'campus',
    labelFr: 'Études & Voyage',
    labelEn: 'Studies & Travel',
    subFr: 'Campus & mobilité',
    subEn: 'Campus & mobility',
    image: '/images/usecase-campus.jpg',
    imageCaptionFr: 'Collaboration étudiante et échanges internationaux sans barrière',
    imageCaptionEn: 'Student collaboration and barrier-free international exchanges',
    icon: GraduationCap,
    personAName: 'Personne A',
    personARoleFr: 'Étudiant · FR',
    personARoleEn: 'Student · FR',
    personALangTag: 'Français',
    personBName: 'Personne B',
    personBRoleFr: 'Étudiant · EN',
    personBRoleEn: 'Student · EN',
    personBLangTag: 'English',
    quoteA: '« On prépare la présentation ensemble ? »',
    translatedToEn: '“Shall we prepare the presentation together?”',
    quoteB: '“Yes, let’s start right away.”',
    translatedToFr: '« Oui, commençons tout de suite. »',
  },
];

export const ConceptDemoSection: React.FC = () => {
  const { t } = useLanguage();
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const scenario = SCENARIOS[scenarioIdx];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 4);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [autoPlay, scenarioIdx]);

  const handleSelectScenario = (index: number) => {
    setScenarioIdx(index);
    setActivePhase(0);
  };

  return (
    <section id="demo" className="section demo-section">
      <Reveal className="section-intro demo-intro">
        <p className="kicker">
          {t('Démonstration du concept', 'Concept Demonstration')}
        </p>
        <h2>
          {t('Sur téléphone ou ', 'On phone or ')}
          <span className="grad-text">
            {t('de casque à casque.', 'from headset to headset.')}
          </span>
        </h2>
        <p className="sub demo-sub">
          {t(
            'Le petit micro du casque ou le téléphone capte votre langue (français, anglais ou langue du village) et la traduit à votre interlocuteur.',
            'The small headset mic or the phone captures your language (French, English, or local village language) and translates it to your counterpart.'
          )}
        </p>
      </Reveal>

      <Reveal delay={80} className="videos-tabs">
        {SCENARIOS.map((item, idx) => {
          const Icon = item.icon;
          const isActive = scenarioIdx === idx;
          return (
            <button
              key={item.id}
              type="button"
              className={`video-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectScenario(idx)}
            >
              <span className="vtab-icon" aria-hidden="true">
                <Icon size={16} />
              </span>
              <span>
                <b>{t(item.labelFr, item.labelEn)}</b>
                <small>{t(item.subFr, item.subEn)}</small>
              </span>
            </button>
          );
        })}
      </Reveal>

      <Reveal delay={150} className="concept-stage">
        <div className="video-glow" aria-hidden="true" />

        <div className="concept-board">
          <div className="scenario-photo-banner">
            <img
              key={scenario.image}
              src={scenario.image}
              alt={t(scenario.imageCaptionFr, scenario.imageCaptionEn)}
              loading="lazy"
            />
            <div className="scenario-photo-overlay">
              <div className="concept-disclaimer-pill">
                <Info size={14} />
                <span>
                  {t(
                    'Illustration conceptuelle · App Mobile + Casque à micro connecté',
                    'Conceptual illustration · Mobile App + Connected Mic Headset'
                  )}
                </span>
              </div>
              <p className="scenario-photo-caption">
                {t(scenario.imageCaptionFr, scenario.imageCaptionEn)}
              </p>
            </div>

            <div className="concept-controls overlay-controls">
              <button
                type="button"
                className="concept-ctrl-btn"
                onClick={() => setAutoPlay(!autoPlay)}
              >
                {autoPlay ? <Pause size={14} /> : <Play size={14} />}
                <span>{autoPlay ? t('Pause', 'Pause') : t('Lecture', 'Play')}</span>
              </button>
              <button
                type="button"
                className="concept-ctrl-btn"
                onClick={() => setActivePhase(0)}
                aria-label={t('Recommencer', 'Restart')}
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          <div className="concept-dialogue-grid">
            {/* Personne A */}
            <div
              className={`speaker-column speaker-fr ${
                activePhase === 0 || activePhase === 3 ? 'is-focused' : ''
              }`}
            >
              <div className="speaker-header">
                <div className="speaker-avatar fr-avatar">A</div>
                <div>
                  <h3>{scenario.personAName}</h3>
                  <small>{t(scenario.personARoleFr, scenario.personARoleEn)}</small>
                </div>
                <span className="speaker-lang-badge">{scenario.personALangTag}</span>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setAutoPlay(false);
                  setActivePhase(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setAutoPlay(false);
                    setActivePhase(0);
                  }
                }}
                className={`dialogue-card original-speech ${
                  activePhase === 0 ? 'active-card' : ''
                }`}
              >
                <div className="dialogue-card-top">
                  <span className="step-pill">
                    01 · {t('Parole dans le micro', 'Speech into mic')}
                  </span>
                  <Mic size={14} className="card-icon" />
                </div>
                <p className="dialogue-quote">{scenario.quoteA}</p>
                <div className="acoustic-bars" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <i key={i} style={{ '--k': i } as React.CSSProperties} />
                  ))}
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setAutoPlay(false);
                  setActivePhase(3);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setAutoPlay(false);
                    setActivePhase(3);
                  }
                }}
                className={`dialogue-card translated-speech ${
                  activePhase === 3 ? 'active-card cyan-focus' : ''
                }`}
              >
                <div className="dialogue-card-top">
                  <span className="step-pill cyan-pill">
                    04 · {t('Reçu dans le casque / tél.', 'Received in headset / phone')}
                  </span>
                  <Volume2 size={14} className="card-icon cyan-text" />
                </div>
                <p className="dialogue-quote">{scenario.translatedToFr}</p>
              </div>
            </div>

            {/* Moteur Central */}
            <div className="ai-hub-column">
              <div
                className={`ai-hub-core ${
                  activePhase === 1 || activePhase === 3 ? 'is-processing' : ''
                }`}
              >
                <div className="hub-emblem">
                  <Sparkles size={22} />
                </div>
                <strong>Lingora AI</strong>
                <span className="hub-subtitle">
                  {t('App Mobile & Pont Casque', 'Mobile App & Headset Bridge')}
                </span>

                <div className="hub-direction-indicator">
                  <span className={activePhase <= 1 ? 'dir-active' : ''}>A → B</span>
                  <ArrowLeftRight size={13} />
                  <span className={activePhase >= 2 ? 'dir-active cyan' : ''}>B → A</span>
                </div>

                <div className="hub-pipeline-tags">
                  <span>{t('Micro Casque / Tél.', 'Headset / Phone Mic')}</span>
                  <span>{t('Traduction IA', 'AI Translation')}</span>
                  <span>{t('Écouteur Cible', 'Target Earpiece')}</span>
                </div>
              </div>
            </div>

            {/* Personne B */}
            <div
              className={`speaker-column speaker-en ${
                activePhase === 1 || activePhase === 2 ? 'is-focused' : ''
              }`}
            >
              <div className="speaker-header">
                <div className="speaker-avatar en-avatar">B</div>
                <div>
                  <h3>{scenario.personBName}</h3>
                  <small>{t(scenario.personBRoleFr, scenario.personBRoleEn)}</small>
                </div>
                <span className="speaker-lang-badge cyan-badge">{scenario.personBLangTag}</span>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setAutoPlay(false);
                  setActivePhase(1);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setAutoPlay(false);
                    setActivePhase(1);
                  }
                }}
                className={`dialogue-card translated-speech ${
                  activePhase === 1 ? 'active-card' : ''
                }`}
              >
                <div className="dialogue-card-top">
                  <span className="step-pill">
                    02 · {t('Traduit dans son casque', 'Translated in their headset')}
                  </span>
                  <Volume2 size={14} className="card-icon" />
                </div>
                <p className="dialogue-quote">{scenario.translatedToEn}</p>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setAutoPlay(false);
                  setActivePhase(2);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setAutoPlay(false);
                    setActivePhase(2);
                  }
                }}
                className={`dialogue-card original-speech ${
                  activePhase === 2 ? 'active-card cyan-focus' : ''
                }`}
              >
                <div className="dialogue-card-top">
                  <span className="step-pill cyan-pill">
                    03 · {t('Réponse dans son micro', 'Reply into their mic')}
                  </span>
                  <Mic size={14} className="card-icon cyan-text" />
                </div>
                <p className="dialogue-quote">{scenario.quoteB}</p>
                <div className="acoustic-bars cyan-bars" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <i key={i} style={{ '--k': i } as React.CSSProperties} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="concept-step-selector" role="tablist">
            {[
              t('1. Micro A', '1. Mic A'),
              t('2. Casque B', '2. Headset B'),
              t('3. Micro B', '3. Mic B'),
              t('4. Casque A', '4. Headset A'),
            ].map((label, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activePhase === idx}
                className={`step-tab-btn ${activePhase === idx ? 'active' : ''}`}
                onClick={() => {
                  setAutoPlay(false);
                  setActivePhase(idx);
                }}
              >
                <AudioWaveform size={13} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
