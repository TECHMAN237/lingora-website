import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analyticsService';
import { BrandLogo } from './BrandMark';

interface NavbarProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ dark, setDark, onOpenWaitlist }) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      setScrolled(window.scrollY > 24);
      const maxScroll = Math.max(1, doc.scrollHeight - doc.clientHeight);
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / maxScroll)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: Array<[string, string]> = [
    ['#demo', t('Concept', 'Concept')],
    ['#how', t('Comment ça marche', 'How it works')],
    ['#use-cases', t("Cas d'usage", 'Use cases')],
    ['#roadmap', t('Vision & Roadmap', 'Vision & Roadmap')],
    ['#faq', 'FAQ'],
  ];

  const handleSectionClick = (href: string) => {
    trackEvent('key_section_click', { section: href });
    setMobileOpen(false);
  };

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div
        className="progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <nav className="nav" aria-label={t('Navigation principale', 'Main navigation')}>
        <BrandLogo onClick={() => setMobileOpen(false)} />

        <div className="nav-links">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} onClick={() => handleSectionClick(href)}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div
            className="lang-pill-switch"
            role="group"
            aria-label={t('Sélecteur de langue', 'Language selector')}
          >
            <Globe size={13} className="lang-globe-icon" aria-hidden="true" />
            <button
              type="button"
              className={lang === 'fr' ? 'active' : ''}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={
              dark
                ? t('Activer le thème clair', 'Switch to light theme')
                : t('Activer le thème sombre', 'Switch to dark theme')
            }
            title={
              dark
                ? t('Mode clair', 'Light mode')
                : t('Mode nuit', 'Dark mode')
            }
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="nav-download"
            onClick={() => {
              trackEvent('cta_primary_click', { location: 'navbar' });
              onOpenWaitlist();
            }}
          >
            <Sparkles size={14} />
            <span>{t("Liste d'attente", 'Join waitlist')}</span>
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen
                ? t('Fermer le menu', 'Close menu')
                : t('Ouvrir le menu', 'Open menu')
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} onClick={() => handleSectionClick(href)}>
              {label}
            </a>
          ))}
          <div className="mobile-menu-footer">
            <div className="mobile-lang-row">
              <button
                type="button"
                className={`mobile-lang-btn ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => setLang('fr')}
              >
                Français (FR)
              </button>
              <button
                type="button"
                className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                English (EN)
              </button>
            </div>
            <button
              type="button"
              className="mobile-cta-btn"
              onClick={() => {
                setMobileOpen(false);
                trackEvent('cta_primary_click', { location: 'mobile_menu' });
                onOpenWaitlist();
              }}
            >
              <Sparkles size={15} />
              <span>{t("Rejoindre la liste d'attente", 'Join the waiting list')}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

