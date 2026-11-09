import React from 'react';
import { Globe, Headphones, MessageSquareShare, Smartphone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';

export const ValuePillarsSection: React.FC = () => {
  const { t } = useLanguage();

  const marqueeItems = [
    t('Traduction sur Téléphone via l’App', 'Phone translation via App'),
    t('Casque avec petit micro connecté ↔ Casque', 'Connected mic headset ↔ Headset'),
    t('Langues locales des villages & dialectes', 'Local village languages & dialects'),
    t('Français ↔ English', 'French ↔ English'),
    t('Dialogue vocal bidirectionnel', 'Bidirectional voice dialogue'),
    t('Voyages · Villages · Études · Commerce', 'Travel · Villages · Studies · Commerce'),
  ];

  const pillars = [
    {
      badge: 'App Mobile',
      title: t('Traduction directe sur téléphone', 'Direct phone translation'),
      description: t(
        'Parlez dans l’application mobile : elle traduit d’une langue à l’autre en temps réel.',
        'Speak into the mobile app: it translates from one language to another in real time.'
      ),
      icon: Smartphone,
    },
    {
      badge: 'Casque + Micro',
      title: t('Du micro vers le casque de l’autre', 'From mic to the other’s headset'),
      description: t(
        'Un casque muni d’un petit micro capte votre voix et la traduit dans le casque de votre interlocuteur.',
        'A headset with a small attached mic captures your voice and translates it into your partner’s headset.'
      ),
      icon: Headphones,
    },
    {
      badge: 'Villages',
      title: t('Langues locales des villages', 'Local village languages'),
      description: t(
        'Français, anglais et langues maternelles des villages pour relier toutes les générations.',
        'French, English, and local village mother tongues to connect every generation.'
      ),
      icon: Globe,
    },
    {
      badge: '2 Sens',
      title: t('Échange vocal naturel', 'Natural two-way exchange'),
      description: t(
        'Chacun parle sa propre langue et écoute la réponse traduite sans barrière.',
        'Everyone speaks their own language and hears the translated reply seamlessly.'
      ),
      icon: MessageSquareShare,
    },
  ];

  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx}>
              <Sparkles size={14} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="stats" aria-label={t('Piliers Lingora AI', 'Lingora AI pillars')}>
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.badge} delay={idx * 90} className="stat">
              <div className="stat-top-row">
                <strong className="stat-badge-text">{pillar.badge}</strong>
                <span className="stat-mini-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
              </div>
              <h3 className="stat-title">{pillar.title}</h3>
              <span>{pillar.description}</span>
            </Reveal>
          );
        })}
      </section>
    </>
  );
};
