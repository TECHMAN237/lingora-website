import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BrandMarkProps {
  small?: boolean;
}

/**
 * Symbole exploratoire de Lingora AI (Section 9 du brief) :
 * onde sonore associée à deux bulles de conversation et un pont de connexion.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ small = false }) => {
  return (
    <span className={`lingora-mark ${small ? 'mark-small' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lg-bubble-a" x1="2" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D6BFF" />
            <stop offset="100%" stopColor="#0095FF" />
          </linearGradient>
          <linearGradient id="lg-bubble-b" x1="16" y1="8" x2="42" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00C2FF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
        {/* Bulle locuteur A */}
        <path
          d="M5 16C5 9.92487 9.92487 5 16 5H23C25.2091 5 27 6.79086 27 9V18C27 24.0751 22.0751 29 16 29H9L5 33V16Z"
          fill="url(#lg-bubble-a)"
          fillOpacity="0.92"
        />
        {/* Bulle locuteur B */}
        <path
          d="M39 24C39 30.0751 34.0751 35 28 35H21C18.7909 35 17 33.2091 17 31V22C17 15.9249 21.9249 11 28 11H35L39 7V24Z"
          fill="url(#lg-bubble-b)"
          fillOpacity="0.88"
        />
        {/* Onde sonore centrale de liaison */}
        <path
          d="M16.5 20V17.5M22 24.5V15.5M27.5 22.5V20"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

interface BrandLogoProps {
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ onClick }) => {
  const { t } = useLanguage();
  return (
    <a
      className="brand"
      href="#top"
      onClick={onClick}
      aria-label={t('Lingora AI — Retour en haut de page', 'Lingora AI — Back to top')}
    >
      <BrandMark small />
      <span className="brand-word">LINGORA</span>
      <em>AI</em>
    </a>
  );
};

