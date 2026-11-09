import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  RotateCcw,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analyticsService';

const WHATSAPP_NUMBER = '237674264026';

interface WaitlistFormProps {
  compact?: boolean;
  onCloseModal?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  compact = false,
  onCloseModal,
}) => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [primaryLanguage, setPrimaryLanguage] = useState('Français');
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [userType, setUserType] = useState('villages');
  const [notes, setNotes] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleFirstInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('waitlist_form_start');
    }
  };

  const getUserProfileLabel = (code: string) => {
    const map: Record<string, string> = {
      villages: t(
        'Villages & Langues locales (Famille / Communauté)',
        'Villages & Local languages (Family / Community)'
      ),
      traveler: t('Voyageur & Mobilité', 'Traveler & Mobility'),
      student: t('Étudiant & Campus', 'Student & Campus'),
      merchant: t('Commerçant / Entrepreneur', 'Merchant / Entrepreneur'),
      tourism: t('Tourisme & Accueil', 'Tourism & Hospitality'),
      enterprise: t('Équipe / Entreprise', 'Team / Enterprise'),
      events: t('Événements internationaux', 'International events'),
      partner: t('Partenaire / Investisseur', 'Partner / Investor'),
    };
    return map[code] || code;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setSubmitting(true);

    const profileLabel = getUserProfileLabel(userType);

    const lines = [
      `👋 ${t("Bonjour l'équipe Lingora AI !", 'Hello Lingora AI team!')}`,
      `🚀 ${t(
        "Je souhaite rejoindre la liste d'attente prioritaire de Lingora AI (App Mobile & Casque à micro connecté).",
        'I want to join the priority waiting list for Lingora AI (Mobile App & Connected Mic Headset).'
      )}`,
      '',
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *${t('Nom complet', 'Full Name')}* : ${fullName.trim()}`,
      `📱 *${t('Numéro WhatsApp', 'WhatsApp Number')}* : ${phone.trim()}`,
      email.trim() ? `📧 *${t('E-mail', 'Email')}* : ${email.trim()}` : '',
      `🗣️ *${t('Langue parlée', 'Spoken Language')}* : ${primaryLanguage}`,
      `🎧 *${t('Langue à traduire', 'Target Language')}* : ${targetLanguage}`,
      `🎯 *${t('Usage principal', 'Main Use Case')}* : ${profileLabel}`,
      notes.trim() ? `💬 *${t('Message / Besoin', 'Message / Need')}* : ${notes.trim()}` : '',
      `━━━━━━━━━━━━━━━━━━━━`,
      '',
      t(
        '✨ Merci de me réserver un accès anticipé au lancement !',
        '✨ Thank you for reserving my early access at launch!'
      ),
    ].filter(Boolean);

    const formattedText = lines.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedText)}`;
    setWhatsappUrl(url);

    trackEvent('waitlist_submission_confirmed', {
      primaryLanguage,
      targetLanguage,
      userType,
    });

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback button is shown on the confirmation screen
    }

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="wl-state-card wl-recorded" role="status" aria-live="polite">
        <div className="wl-state-badge whatsapp-ok">
          <CheckCircle2 size={32} />
        </div>
        <h3>
          {t('Votre message WhatsApp est prêt !', 'Your WhatsApp message is ready!')}
        </h3>
        <p>
          {t(
            'Cliquez ci-dessous si WhatsApp ne s’est pas ouvert automatiquement pour envoyer votre inscription au +237 674 26 40 26.',
            'Click below if WhatsApp did not open automatically to send your registration to +237 674 26 40 26.'
          )}
        </p>

        <div className="wl-state-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wl-submit wl-wa-btn"
          >
            <MessageCircle size={19} />
            <span>
              {t(
                'Ouvrir WhatsApp maintenant (674 264 026)',
                'Open WhatsApp now (674 264 026)'
              )}
            </span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="wl-state-actions">
          <button
            type="button"
            className="wl-secondary-btn"
            onClick={() => setSubmitted(false)}
          >
            <RotateCcw size={15} />
            <span>{t('Modifier mes informations', 'Edit my details')}</span>
          </button>
          {onCloseModal && (
            <button
              type="button"
              className="wl-secondary-btn"
              onClick={onCloseModal}
            >
              {t('Fermer', 'Close')}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form
      className={`wl-form ${compact ? 'wl-form-compact' : ''}`}
      onSubmit={handleSubmit}
      onFocus={handleFirstInteraction}
    >
      <div className="wl-grid-fields">
        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-name' : 'sec-wl-name'}>
            {t('Nom complet *', 'Full name *')}
          </label>
          <div className="wl-input-wrap">
            <User size={16} className="wl-input-icon" />
            <input
              id={compact ? 'modal-wl-name' : 'sec-wl-name'}
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={t('Ex : Kevin Ngono ou Aïcha Diallo', 'Ex: Kevin Ngono or Aicha Diallo')}
            />
          </div>
        </div>

        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-phone' : 'sec-wl-phone'}>
            {t('Numéro WhatsApp *', 'WhatsApp number *')}
          </label>
          <div className="wl-input-wrap">
            <Phone size={16} className="wl-input-icon" />
            <input
              id={compact ? 'modal-wl-phone' : 'sec-wl-phone'}
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('Ex : 674 264 026 ou +237...', 'Ex: 674 264 026 or +237...')}
            />
          </div>
        </div>
      </div>

      <div className="wl-grid-fields">
        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-lang1' : 'sec-wl-lang1'}>
            <Globe size={13} className="inline-label-icon" />{' '}
            {t('Langue parlée', 'Spoken language')}
          </label>
          <select
            id={compact ? 'modal-wl-lang1' : 'sec-wl-lang1'}
            className="wl-select"
            value={primaryLanguage}
            onChange={(e) => setPrimaryLanguage(e.target.value)}
          >
            <option value="Français">Français</option>
            <option value="English">English</option>
            <option value="Langue locale du village">
              {t('Langue locale du village', 'Local village language')}
            </option>
            <option value="Autre">{t('Autre langue', 'Other language')}</option>
          </select>
        </div>

        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-lang2' : 'sec-wl-lang2'}>
            <Globe size={13} className="inline-label-icon" />{' '}
            {t('Langue cible à traduire', 'Target language')}
          </label>
          <select
            id={compact ? 'modal-wl-lang2' : 'sec-wl-lang2'}
            className="wl-select"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="Langue locale du village">
              {t('Langue locale du village', 'Local village language')}
            </option>
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="Autre">{t('Autre langue', 'Other language')}</option>
          </select>
        </div>
      </div>

      <div className="wl-grid-fields">
        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-type' : 'sec-wl-type'}>
            <Users size={13} className="inline-label-icon" />{' '}
            {t('Ce qui vous intéresse le plus', 'What interests you most')}
          </label>
          <select
            id={compact ? 'modal-wl-type' : 'sec-wl-type'}
            className="wl-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="villages">
              {t('🏡 Villages & Langues locales', '🏡 Villages & Local languages')}
            </option>
            <option value="traveler">
              {t('✈️ Voyage & Mobilité', '✈️ Travel & Mobility')}
            </option>
            <option value="student">
              {t('🎓 Études & Campus', '🎓 Studies & Campus')}
            </option>
            <option value="merchant">
              {t('💼 Commerce & Entrepreneuriat', '💼 Commerce & Business')}
            </option>
            <option value="enterprise">
              {t('🏢 Équipes & Entreprises', '🏢 Teams & Enterprises')}
            </option>
            <option value="events">
              {t('🌍 Événements internationaux', '🌍 International events')}
            </option>
            <option value="partner">
              {t('🤝 Partenaire / Investisseur', '🤝 Partner / Investor')}
            </option>
          </select>
        </div>

        <div className="wl-field">
          <label htmlFor={compact ? 'modal-wl-email' : 'sec-wl-email'}>
            {t('E-mail (optionnel)', 'Email (optional)')}
          </label>
          <div className="wl-input-wrap">
            <Mail size={16} className="wl-input-icon" />
            <input
              id={compact ? 'modal-wl-email' : 'sec-wl-email'}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('vous@exemple.com', 'you@example.com')}
            />
          </div>
        </div>
      </div>

      <div className="wl-field">
        <label htmlFor={compact ? 'modal-wl-notes' : 'sec-wl-notes'}>
          {t('Précisez votre langue du village ou besoin (optionnel)', 'Specify your village language or need (optional)')}
        </label>
        <div className="wl-input-wrap no-icon">
          <input
            id={compact ? 'modal-wl-notes' : 'sec-wl-notes'}
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t(
              'Ex : Casque + micro pour parler avec mes grands-parents au village...',
              'E.g.: Headset + mic to speak with my grandparents in the village...'
            )}
          />
        </div>
      </div>

      <button type="submit" className="wl-submit wl-wa-btn" disabled={submitting}>
        {submitting ? (
          <span className="wl-spinner" aria-hidden="true" />
        ) : (
          <>
            <MessageCircle size={20} className="wl-btn-icon" />
            <span>
              {t(
                'Envoyer via WhatsApp (674 264 026)',
                'Submit via WhatsApp (674 264 026)'
              )}
            </span>
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="wl-privacy">
        <ShieldCheck size={14} />
        <span>
          {t(
            'Aucun spam. Envoi direct et structuré vers notre WhatsApp +237 674 26 40 26.',
            'No spam. Direct structured submission to our WhatsApp +237 674 26 40 26.'
          )}
        </span>
      </p>
    </form>
  );
};
