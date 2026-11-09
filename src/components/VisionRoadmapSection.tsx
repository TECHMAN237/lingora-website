import React from 'react';
import {
  CheckCircle2,
  Cpu,
  Globe2,
  Headphones,
  Layers,
  ShieldCheck,
  Sliders,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleSpotlightMove, Reveal } from '../hooks/useReveal';

export const VisionRoadmapSection: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      phase: 'Phase 01',
      status: t('Priorité actuelle', 'Current Priority'),
      statusClass: 'status-active',
      title: t('Application Mobile (Téléphone)', 'Mobile Application (Phone)'),
      subtitle: t(
        'Traduire une langue à l’autre directement via l’application sur smartphone.',
        'Translate from one language to another directly via the smartphone app.'
      ),
      icon: Smartphone,
      points: [
        t('Échanges vocaux Français ↔ English dès le lancement.', 'French ↔ English voice exchanges from launch.'),
        t('Capture et restitution vocale bidirectionnelle sur téléphone.', 'Bidirectional voice capture and playback on the phone.'),
        t('Interface claire avec contrôle du micro et confidentialité.', 'Clear UI with microphone control and privacy.'),
      ],
    },
    {
      phase: 'Phase 02',
      status: t('Consolidation', 'Consolidation'),
      statusClass: 'status-next',
      title: t("Fluidité & Milieux réels", 'Fluency & Real Environments'),
      subtitle: t(
        'Des conversations toujours plus naturelles au quotidien.',
        'Progressively smoother everyday conversations.'
      ),
      icon: Sliders,
      points: [
        t('Réduction de la latence et de la consommation data.', 'Lower latency and mobile data usage.'),
        t('Voix naturelle et précision contextuelle accrue.', 'Natural voice synthesis and higher contextual accuracy.'),
        t('Robustesse dans le bruit ambiant et lors d’interruptions.', 'Resilience in ambient noise and during interruptions.'),
      ],
    },
    {
      phase: 'Phase 03',
      status: t('Inclusion linguistique', 'Linguistic Inclusion'),
      statusClass: 'status-future',
      title: t('Langues locales des villages & Pro', 'Local Village Languages & Pro'),
      subtitle: t(
        'Valoriser les langues maternelles de nos villages et les usages métiers.',
        'Embracing local village mother tongues and professional use cases.'
      ),
      icon: Globe2,
      points: [
        t('Intégration progressive des langues locales des villages.', 'Progressive integration of local village languages.'),
        t('Traduction entre langues maternelles, français et anglais.', 'Translation between mother tongues, French, and English.'),
        t('Usages dédiés au commerce local, au tourisme et à l’éducation.', 'Dedicated workflows for local trade, tourism, and education.'),
      ],
    },
    {
      phase: 'Phase 04',
      status: t('Écosystème matériel', 'Hardware Ecosystem'),
      statusClass: 'status-vision',
      title: t('Casque avec petit micro connecté', 'Connected Mic Headset'),
      subtitle: t(
        'Parler dans le micro du casque et traduire directement dans le casque de l’autre.',
        'Speak into the headset mic and translate directly into the other’s headset.'
      ),
      icon: Headphones,
      points: [
        t('Casque muni d’un petit micro captant clairement la parole.', 'Headset with a small attached mic capturing speech clearly.'),
        t('Transmission de la voix traduite sur le casque de l’interlocuteur.', 'Translated voice transmitted straight to the partner’s headset.'),
        t('Fonctionnement en duo avec l’application mobile sur téléphone.', 'Seamless pairing with the mobile app on the smartphone.'),
      ],
    },
  ];

  const principles = [
    {
      icon: Cpu,
      title: t('Téléphone + Casque à micro', 'Phone + Mic Headset'),
      text: t(
        'Une expérience pensée à la fois pour l’écran du téléphone et l’écoute directe au casque.',
        'An experience designed for both the phone screen and direct headset listening.'
      ),
    },
    {
      icon: Globe2,
      title: t('Langues internationales & Villages', 'Global & Village Languages'),
      text: t(
        'Relier le français, l’anglais et les langues locales des villages sans exclure personne.',
        'Connecting French, English, and local village languages without leaving anyone behind.'
      ),
    },
    {
      icon: ShieldCheck,
      title: t('Confidentialité & Sobriété', 'Privacy & Control'),
      text: t(
        'Contrôle explicite du microphone et collecte limitée au strict nécessaire.',
        'Explicit microphone control and strictly necessary data processing.'
      ),
    },
  ];

  return (
    <section id="roadmap" className="section roadmap-section">
      <Reveal className="feature-heading">
        <p className="kicker">
          {t('Vision & Feuille de route', 'Vision & Roadmap')}
        </p>
        <h2>
          {t('De l’application mobile au ', 'From the mobile app to the ')}
          <span className="grad-text">
            {t('casque traducteur.', 'translation headset.')}
          </span>
        </h2>
        <p className="sub feature-sub-center">
          {t(
            'Une progression claire : l’application sur téléphone, les langues locales des villages et le casque muni de son petit micro connecté.',
            'A clear progression: the smartphone app, local village languages, and the headset with its small connected mic.'
          )}
        </p>
      </Reveal>

      <div className="roadmap-grid">
        {phases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.phase} delay={idx * 100} className="roadmap-card-wrap">
              <article className="roadmap-card" onMouseMove={handleSpotlightMove}>
                <div className="roadmap-card-head">
                  <span className="roadmap-phase-num">{item.phase}</span>
                  <span className={`roadmap-status-badge ${item.statusClass}`}>
                    {item.status}
                  </span>
                </div>

                <div className="roadmap-title-row">
                  <div className="roadmap-icon-box">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="roadmap-subtitle">{item.subtitle}</p>
                  </div>
                </div>

                <ul className="roadmap-list">
                  {item.points.map((pt) => (
                    <li key={pt}>
                      <CheckCircle2 size={15} className="roadmap-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200} className="principles-strip">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="principle-item">
              <div className="principle-icon">
                <Icon size={19} />
              </div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
};
