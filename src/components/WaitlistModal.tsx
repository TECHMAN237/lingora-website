import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WaitlistForm } from './WaitlistForm';

interface WaitlistModalProps {
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="wl-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wl-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="wl-modal">
        <button
          type="button"
          className="wl-close"
          onClick={onClose}
          aria-label={t('Fermer la fenêtre', 'Close modal')}
        >
          <X size={18} />
        </button>

        <div className="wl-head">
          <div className="wl-icon" aria-hidden="true">
            <Sparkles size={22} />
          </div>
          <div className="wl-badge wl-wa-top-badge">
            <MessageCircle size={13} />
            <span>
              {t(
                'Inscription WhatsApp directe : +237 674 26 40 26',
                'Direct WhatsApp waitlist: +237 674 26 40 26'
              )}
            </span>
          </div>
          <h3 id="wl-modal-title">
            {t("Rejoindre la liste d'attente VIP", 'Join the VIP waiting list')}
          </h3>
          <p>
            {t(
              'Réservez votre accès à l’application et au casque traducteur Lingora AI. Vos informations sont envoyées directement sur notre WhatsApp.',
              'Reserve your access to the Lingora AI app and translation headset. Your details are sent directly to our WhatsApp.'
            )}
          </p>
        </div>

        <WaitlistForm compact onCloseModal={onClose} />
      </div>
    </div>,
    document.body
  );
};
