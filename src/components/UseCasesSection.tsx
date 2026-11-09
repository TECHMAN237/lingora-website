import React from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Compass,
  Globe2,
  GraduationCap,
  Users2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleSpotlightMove, Reveal } from '../hooks/useReveal';

export const UseCasesSection: React.FC = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      title: t('Villages & Langues locales', 'Villages & Local Languages'),
      contextTag: t('Communautés', 'Communities'),
      image: '/images/village-local-languages.jpg',
      description: t(
        'Échanger avec les anciens et les familles dans les langues locales des villages via l’app ou le casque.',
        'Communicate with elders and families in local village languages via the app or mic headset.'
      ),
      icon: Globe2,
      colorClass: 'c3',
    },
    {
      title: t('Voyageurs & Tourisme', 'Travelers & Tourism'),
      contextTag: t('Mobilité', 'Mobility'),
      image: '/images/usecase-travel.jpg',
      description: t(
        'Dialoguer simplement avec les habitants, hôtels et services locaux lors de vos déplacements.',
        'Speak easily with locals, hotels, and services while traveling.'
      ),
      icon: Compass,
      colorClass: 'c0',
    },
    {
      title: t('Étudiants & Campus', 'Students & Campus'),
      contextTag: t('Académique', 'Campus'),
      image: '/images/usecase-campus.jpg',
      description: t(
        'Faciliter l’entraide et les projets dans un environnement universitaire multilingue.',
        'Facilitate teamwork and projects in a multilingual academic setting.'
      ),
      icon: GraduationCap,
      colorClass: 'c1',
    },
    {
      title: t('Commerçants & Entrepreneurs', 'Merchants & Entrepreneurs'),
      contextTag: t('Commerce', 'Commerce'),
      image: '/images/usecase-commerce.jpg',
      description: t(
        'Négocier directement avec des clients ou fournisseurs parlant une autre langue.',
        'Negotiate directly with customers or suppliers speaking another language.'
      ),
      icon: Briefcase,
      colorClass: 'c2',
    },
    {
      title: t('Équipes & Entreprises', 'Teams & Enterprises'),
      contextTag: t('Collaboration', 'Collaboration'),
      image: '/images/usecase-enterprise.jpg',
      description: t(
        'Fluidifier les réunions entre collaborateurs grâce au téléphone et aux casques connectés.',
        'Streamline meetings across teams using the phone app and connected headsets.'
      ),
      icon: Building2,
      colorClass: 'c0',
    },
    {
      title: t('Événements internationaux', 'International Events'),
      contextTag: t('Rencontres', 'Events'),
      image: '/images/usecase-events.jpg',
      description: t(
        'Permettre aux participants de se comprendre directement de casque à casque.',
        'Allow attendees to understand each other directly from headset to headset.'
      ),
      icon: Users2,
      colorClass: 'c1',
    },
  ];

  return (
    <section id="use-cases" className="section features">
      <Reveal className="feature-heading">
        <p className="kicker">
          {t("Cas d'utilisation", 'Use Cases')}
        </p>
        <h2>
          {t('Du village aux rencontres ', 'From local villages to ')}
          <span className="grad-text">
            {t('internationales.', 'international meetings.')}
          </span>
        </h2>
        <p className="sub feature-sub-center">
          {t(
            'Sur téléphone ou avec le casque à micro connecté, Lingora AI s’adapte à chaque situation.',
            'On your phone or with the connected mic headset, Lingora AI adapts to every situation.'
          )}
        </p>
      </Reveal>

      <div className="feature-grid use-cases-grid">
        {useCases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={idx * 80} className="feature-wrap">
              <article
                className="feature has-photo"
                onMouseMove={handleSpotlightMove}
              >
                <div className="feature-photo-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="feature-top-bar">
                  <div className={`feature-icon ${item.colorClass}`}>
                    <Icon size={22} />
                  </div>
                  <span className="feature-tag-pill">{item.contextTag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="feature-index">0{idx + 1}</span>
                <ArrowUpRight className="feature-arrow" size={18} aria-hidden="true" />
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
