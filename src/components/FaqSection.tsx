import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';

interface FaqItemData {
  qFr: string;
  qEn: string;
  aFr: string;
  aEn: string;
}

export const FAQ_ITEMS: FaqItemData[] = [
  {
    qFr: "Qu'est-ce que Lingora AI ?",
    qEn: 'What is Lingora AI?',
    aFr: "Lingora AI est une solution de traduction vocale bidirectionnelle assistée par l'IA, conçue pour traduire une conversation directement via l'application sur téléphone ou d'un casque à micro connecté vers le casque de l'autre interlocuteur.",
    aEn: 'Lingora AI is an AI-assisted bidirectional voice translation solution designed to translate conversations directly via the phone app or from a connected mic-headset into the other person’s headset.',
  },
  {
    qFr: 'Comment fonctionnent le téléphone et le casque à petit micro ?',
    qEn: 'How do the phone app and the small-mic headset work together?',
    aFr: "Vous pouvez utiliser l'application mobile seule sur votre téléphone pour traduire d'une langue à l'autre, ou parler dans le petit micro connecté à votre casque : l'application traduit alors votre voix et la restitue directement dans le casque de votre interlocuteur.",
    aEn: 'You can use the mobile app standalone on your phone to translate between languages, or speak into the small mic attached to your headset: the app translates your voice and plays it directly into your partner’s headset.',
  },
  {
    qFr: 'Les langues locales des villages sont-elles prises en compte ?',
    qEn: 'Are local village languages included in the project?',
    aFr: "Oui. En plus du français et de l'anglais au lancement du MVP, la feuille de route de Lingora AI intègre l'ajout des langues locales et maternelles des villages afin de permettre à chacun d'échanger avec les anciens, la famille et les communautés locales.",
    aEn: 'Yes. Alongside French and English at MVP launch, Lingora AI’s roadmap includes local village mother tongues so everyone can communicate with elders, family, and local communities.',
  },
  {
    qFr: 'Lingora AI est-il déjà disponible ?',
    qEn: 'Is Lingora AI already available?',
    aFr: "Le projet est actuellement en développement. Inscrivez-vous sur la liste d'attente pour suivre l'avancement de l'application mobile et de l'écosystème casque.",
    aEn: 'The project is currently in development. Join the waiting list to follow progress on the mobile app and headset ecosystem.',
  },
  {
    qFr: 'Mes conversations seront-elles privées ?',
    qEn: 'Will my conversations be private?',
    aFr: "Le contrôle explicite du microphone (sur téléphone comme sur casque) et la limitation aux données strictement nécessaires sont au cœur du projet.",
    aEn: 'Explicit microphone control (on both phone and headset) and strict data minimization are at the core of the project.',
  },
];

export const FaqSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="section faq">
      <Reveal className="faq-head">
        <p className="kicker">
          {t('Questions fréquentes', 'FAQ')}
        </p>
        <h2>
          {t('Vos questions sur ', 'Questions about ')}
          <span className="grad-text">Lingora AI.</span>
        </h2>
      </Reveal>

      <Reveal delay={120} className="faq-list">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.qFr} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
              >
                <span>{lang === 'fr' ? item.qFr : item.qEn}</span>
                <Plus size={18} aria-hidden="true" />
              </button>
              <div className="faq-body">
                <p>{lang === 'fr' ? item.aFr : item.aEn}</p>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
};
