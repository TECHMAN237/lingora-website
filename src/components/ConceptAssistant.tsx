import React, { useEffect, useRef, useState } from 'react';
import { AudioWaveform, MessageCircle, Send, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QaEntry {
  keys: string[];
  answerFr: string;
  answerEn: string;
}

const KNOWLEDGE_BASE: QaEntry[] = [
  {
    keys: ['bonjour', 'salut', 'hello', 'hi', 'hey'],
    answerFr:
      "Bonjour ! Posez-moi vos questions sur l'application téléphone, le casque avec petit micro connecté ou les langues locales des villages.",
    answerEn:
      'Hello! Ask me about the phone app, the headset with a small connected mic, or local village languages.',
  },
  {
    keys: ['casque', 'micro', 'ecouteur', 'earbud', 'headset', 'hardware', 'materiel'],
    answerFr:
      "Le casque Lingora AI dispose d'un petit micro connecté : vous parlez dans votre micro et la traduction est transmise directement dans le casque de votre interlocuteur, en lien avec l'application sur téléphone.",
    answerEn:
      'The Lingora AI headset features a small connected mic: you speak into your mic and the translation is sent directly into your partner’s headset, paired with the phone app.',
  },
  {
    keys: ['village', 'local', 'dialecte', 'maternel', 'langue', 'language', 'francais', 'anglais', 'cameroun'],
    answerFr:
      "En plus du français et de l'anglais, Lingora AI intègre les langues locales des villages pour permettre de communiquer naturellement avec les anciens, les familles et les communautés locales.",
    answerEn:
      'Alongside French and English, Lingora AI includes local village languages so everyone can communicate naturally with elders, families, and local communities.',
  },
  {
    keys: ['telephone', 'app', 'application', 'mobile', 'phone', 'smartphone'],
    answerFr:
      "L'application mobile sur téléphone permet de traduire directement d'une langue à l'autre, seule ou connectée aux casques à micro.",
    answerEn:
      'The mobile phone app translates directly from one language to another, either standalone or paired with the mic headsets.',
  },
  {
    keys: ['lingora', 'quoi', 'what', 'concept', 'projet', 'project', 'vision'],
    answerFr:
      "Lingora AI combine une application mobile de traduction vocale et un casque muni d'un petit micro connecté, prenant en compte le français, l'anglais et les langues locales des villages.",
    answerEn:
      'Lingora AI combines a voice translation mobile app and a connected mic headset, supporting French, English, and local village languages.',
  },
  {
    keys: ['disponible', 'available', 'telecharger', 'download', 'lancement', 'launch', 'attente', 'waitlist'],
    answerFr:
      "Le projet est en cours de développement. Rejoignez la liste d'attente pour suivre l'ouverture des premiers tests.",
    answerEn:
      'The project is under development. Join the waiting list to follow early user testing.',
  },
];

const FALLBACK_FR =
  "Posez-moi une question sur le casque à petit micro connecté, l'application téléphone ou les langues locales des villages.";
const FALLBACK_EN =
  'Ask me about the connected mic headset, the phone app, or local village languages.';

const SUGGESTIONS: Array<[string, string]> = [
  ['Comment marche le casque à micro ?', 'How does the mic headset work?'],
  ['Et les langues des villages ?', 'What about village languages?'],
  ['Comment traduit le téléphone ?', 'How does the phone translate?'],
];

const normalizeText = (str: string) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

function matchAnswer(query: string): [string, string] {
  const norm = normalizeText(query);
  let best: { score: number; entry: QaEntry } | null = null;

  for (const entry of KNOWLEDGE_BASE) {
    const score = entry.keys.reduce(
      (acc, k) => acc + (norm.includes(k) ? k.length : 0),
      0
    );
    if (score > 0 && (!best || score > best.score)) {
      best = { score, entry };
    }
  }

  return best
    ? [best.entry.answerFr, best.entry.answerEn]
    : [FALLBACK_FR, FALLBACK_EN];
}

export const ConceptAssistant: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    Array<{ from: 'bot' | 'user'; textFr: string; textEn: string }>
  >([
    {
      from: 'bot',
      textFr:
        'Bonjour ! Découvrez comment Lingora AI traduit sur téléphone, de casque à casque, et dans les langues des villages.',
      textEn:
        'Hello! Discover how Lingora AI translates on your phone, from headset to headset, and in local village languages.',
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, typing, open]);

  const sendQuestion = (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [
      ...prev,
      { from: 'user', textFr: trimmed, textEn: trimmed },
    ]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      const [ansFr, ansEn] = matchAnswer(trimmed);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', textFr: ansFr, textEn: ansEn },
      ]);
      setTyping(false);
    }, 480);
  };

  return (
    <div className="fab-stack">
      <div
        className="lang-fab"
        role="group"
        aria-label={t('Langue du site', 'Site language')}
      >
        <span
          className="lang-thumb"
          style={{
            transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0)',
          }}
          aria-hidden="true"
        />
        <button
          type="button"
          className={lang === 'fr' ? 'on' : ''}
          onClick={() => setLang('fr')}
        >
          FR
        </button>
        <button
          type="button"
          className={lang === 'en' ? 'on' : ''}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </div>

      <div
        className={`chat-panel ${open ? 'open' : ''}`}
        role="dialog"
        aria-label={t('Guide Lingora AI', 'Lingora AI Guide')}
        aria-hidden={!open}
      >
        <div className="chat-head">
          <span className="chat-avatar" aria-hidden="true">
            <AudioWaveform size={19} />
          </span>
          <div>
            <b>{t('Guide Lingora AI', 'Lingora AI Guide')}</b>
            <small>
              <i className="live" />
              {t('App · Casque + Micro · Villages', 'App · Mic Headset · Villages')}
            </small>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t('Fermer', 'Close')}
          >
            <X size={17} />
          </button>
        </div>

        <div className="chat-body">
          {messages.map((m, idx) => (
            <div key={idx} className={`bubble ${m.from}`}>
              {lang === 'fr' ? m.textFr : m.textEn}
            </div>
          ))}

          {typing && (
            <div className="bubble bot typing" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          )}

          {messages.length === 1 && (
            <div className="chat-suggest">
              {SUGGESTIONS.map(([frQ, enQ]) => {
                const q = lang === 'fr' ? frQ : enQ;
                return (
                  <button key={frQ} type="button" onClick={() => sendQuestion(q)}>
                    {q}
                  </button>
                );
              })}
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendQuestion(input);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('Posez votre question…', 'Ask a question…')}
            aria-label={t('Votre question', 'Your question')}
            tabIndex={open ? 0 : -1}
          />
          <button
            type="submit"
            aria-label={t('Envoyer', 'Send')}
            disabled={!input.trim() || typing}
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      <button
        type="button"
        className={`chat-fab ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={
          open
            ? t('Fermer le guide', 'Close guide')
            : t('Ouvrir le guide Lingora AI', 'Open Lingora AI guide')
        }
      >
        <span className="fab-ring" aria-hidden="true" />
        <MessageCircle className="fab-icon i-chat" size={25} />
        <X className="fab-icon i-close" size={25} />
      </button>
    </div>
  );
};
