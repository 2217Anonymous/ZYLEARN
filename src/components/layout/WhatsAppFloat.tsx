import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Instagram, Phone, Mail } from 'lucide-react';
import { CONTACT } from '@/data/contact';

type Msg =
  | { id: string; role: 'bot'; text: string }
  | { id: string; role: 'user'; text: string }
  | {
      id: string;
      role: 'choice';
      label: string;
      action: 'whatsapp' | 'instagram' | 'gmail' | 'contact';
    };

const CHOICES: Array<{ label: string; action: 'whatsapp' | 'instagram' | 'gmail' | 'contact' }> = [
  { label: 'WhatsApp', action: 'whatsapp' },
  { label: 'Instagram', action: 'instagram' },
  { label: 'Gmail', action: 'gmail' },
  { label: 'Contact form', action: 'contact' },
];

const WA = CONTACT.whatsappUrl;
const IG = CONTACT.instagramUrl;
const PHONE = CONTACT.primaryPhoneTel;
const MAIL = CONTACT.emailMailto;

const FLOAT_ICONS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: WA,
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: IG,
    color: '#E1306C',
    icon: <Instagram className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    id: 'phone',
    label: 'Phone',
    href: PHONE,
    color: '#2a2a2e',
    icon: <Phone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    href: MAIL,
    color: '#EA4335',
    icon: <Mail className="h-5 w-5" strokeWidth={2.2} />,
  },
] as const;

/** Vertical float icons + chat bot */
export const WhatsAppFloat: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const pushLater = (msg: Msg, delay: number) => {
    timers.current.push(
      window.setTimeout(() => {
        setMsgs((prev) => [...prev, msg]);
      }, delay)
    );
  };

  const startConversation = () => {
    clearTimers();
    setMsgs([]);
    setDone(false);
    setTyping(true);

    timers.current.push(
      window.setTimeout(() => {
        setTyping(false);
        setMsgs([{ id: 'b1', role: 'bot', text: 'Hi! 👋 Welcome to Zylearn Desk.' }]);
      }, 500)
    );

    timers.current.push(window.setTimeout(() => setTyping(true), 1100));

    timers.current.push(
      window.setTimeout(() => {
        setTyping(false);
        setMsgs((prev) => [
          ...prev,
          { id: 'b2', role: 'bot', text: 'How would you like to reach us? Pick one below:' },
        ]);
      }, 1700)
    );

    CHOICES.forEach((c, i) => {
      pushLater(
        { id: `c-${c.action}`, role: 'choice', label: c.label, action: c.action },
        2100 + i * 380
      );
    });
  };

  useEffect(() => {
    if (open) startConversation();
    else {
      clearTimers();
      setMsgs([]);
      setTyping(false);
      setDone(false);
    }
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  const runAction = (action: (typeof CHOICES)[number]['action'], label: string) => {
    if (done) return;
    setDone(true);
    clearTimers();
    setTyping(false);

    setMsgs((prev) => [
      ...prev.filter((m) => m.role !== 'choice'),
      { id: `u-${action}`, role: 'user', text: label },
    ]);

    setTyping(true);
    timers.current.push(
      window.setTimeout(() => {
        setTyping(false);
        const followUps: Record<string, string> = {
          whatsapp: 'Opening WhatsApp… talk to admissions there.',
          instagram: 'Taking you to Instagram — follow Zylearn updates.',
          gmail: `Opening Gmail to ${CONTACT.email}.`,
          contact: 'Opening our Contact page for you.',
        };
        setMsgs((prev) => [
          ...prev,
          { id: `b-end-${action}`, role: 'bot', text: followUps[action] },
        ]);

        timers.current.push(
          window.setTimeout(() => {
            if (action === 'whatsapp') window.open(WA, '_blank', 'noopener,noreferrer');
            if (action === 'instagram') window.open(IG, '_blank', 'noopener,noreferrer');
            if (action === 'gmail') window.location.href = MAIL;
            if (action === 'contact') {
              setOpen(false);
              navigate('/contact');
            }
          }, 700)
        );
      }, 650)
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      {/* Vertical float icons — hide while chat is open so panel sits by the X */}
      <AnimatePresence>
        {!open && (
          <motion.div
            key="float-icons"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col items-center gap-2.5"
          >
            {FLOAT_ICONS.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id === 'phone' || item.id === 'gmail' ? undefined : '_blank'}
                rel={item.id === 'phone' || item.id === 'gmail' ? undefined : 'noreferrer'}
                aria-label={item.label}
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_6px_18px_rgba(42,42,46,0.22)] transition-transform hover:scale-110 active:scale-95"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel — anchored just above the toggle (X) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="mb-1 flex h-[min(62vh,400px)] w-[min(100vw-2.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-[#2a2a2e]/12 bg-[#ededed] shadow-[0_18px_50px_rgba(42,42,46,0.22)]"
          >
            <div className="flex items-center gap-3 bg-[#2a2a2e] px-4 py-3 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E53935] text-sm font-black">
                Z
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-tight">Zylearn Chat</p>
                <p className="text-[11px] text-[#F5C518]">Online · Admissions bot</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-2.5 overflow-y-auto px-3 py-3">
              {msgs.map((m) => {
                if (m.role === 'bot') {
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-[13px] leading-snug text-[#2a2a2e] shadow-sm">
                        {m.text}
                      </div>
                    </motion.div>
                  );
                }

                if (m.role === 'user') {
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#E53935] px-3.5 py-2.5 text-[13px] leading-snug text-white shadow-sm">
                        {m.text}
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <button
                      type="button"
                      disabled={done}
                      onClick={() => runAction(m.action, m.label)}
                      className="max-w-[85%] rounded-2xl rounded-tl-md border border-[#2a2a2e]/10 bg-white px-3.5 py-2.5 text-left text-[13px] font-semibold text-[#2a2a2e] shadow-sm transition-colors hover:border-[#E53935]/40 hover:text-[#E53935] disabled:opacity-40"
                    >
                      {m.label}
                    </button>
                  </motion.div>
                );
              })}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 shadow-sm">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2a2a2e]/35 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2a2a2e]/35 [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2a2a2e]/35 [animation-delay:240ms]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-[#2a2a2e]/08 bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 rounded-full border border-[#2a2a2e]/10 bg-[#ededed] px-3.5 py-2">
                <p className="flex-1 text-[12px] text-[#2a2a2e]/35">Tap a reply above to continue…</p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2a2e] text-white opacity-40">
                  <Send className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle — stays at bottom-right; panel opens directly above it */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open Zylearn chat'}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(42,42,46,0.35)] transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: open ? '#2a2a2e' : '#E53935' }}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
        )}
      </button>
    </div>
  );
};
