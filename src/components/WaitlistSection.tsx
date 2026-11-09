import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../hooks/useReveal';
import { WaitlistForm } from './WaitlistForm';

export const WaitlistSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="waitlist" className="final">
      <div className="aurora soft" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <Reveal className="final-inner">
        <p className="kicker">
          {t('Liste d’attente prioritaire', 'Priority Waiting List')}
        </p>
        <h2>
          {t('Réservez votre place sur ', 'Reserve your spot with ')}
          <span className="grad-text">Lingora AI.</span>
        </h2>
        <p className="sub final-sub">
          {t(
            'Inscription rapide et directe vers notre WhatsApp (+237 674 26 40 26).',
            'Fast and direct registration to our WhatsApp (+237 674 26 40 26).'
          )}
        </p>

        <div className="final-form-card">
          <div className="final-form-header">
            <span className="final-form-icon wa-header-icon">
              <MessageCircle size={20} />
            </span>
            <div>
              <h3>
                {t(
                  'Inscription directe via WhatsApp · 674 264 026',
                  'Direct WhatsApp Registration · 674 264 026'
                )}
              </h3>
              <p>
                {t(
                  'Remplissez vos informations : le message structuré s’ouvre prêt à envoyer.',
                  'Fill in your details: a well-organized message opens ready to send.'
                )}
              </p>
            </div>
          </div>

          <WaitlistForm />
        </div>
      </Reveal>
    </section>
  );
};
