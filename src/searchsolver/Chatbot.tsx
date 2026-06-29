import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Bot, ExternalLink, Loader2, MessageCircle, Send, Sparkles, X } from 'lucide-react';

interface RouteSuggestion {
  label: string;
  path: string;
  reason: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  routeSuggestion?: RouteSuggestion | null;
}

interface ChatResponse {
  reply: string;
  routeSuggestion?: RouteSuggestion | null;
  shouldAutoNavigate?: boolean;
}

const starterMessage: ChatMessage = {
  id: 'starter',
  role: 'assistant',
  content: 'Hi, I can answer FAQs and take you to the right Markadeo page or section. Ask about pricing, services, portfolio, websites, Shopify, branding, or contact.',
};

function messageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [isOpen, messages, isLoading]);

  const openRoute = (path: string) => {
    const [pathname, hash] = path.split('#');
    const targetPath = pathname || '/';

    if (location.pathname !== targetPath || location.hash !== (hash ? `#${hash}` : '')) {
      navigate(path);
    }

    if (!hash) {
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
      return;
    }

    let attempts = 0;
    const timer = window.setInterval(() => {
      const target = document.getElementById(hash);
      attempts += 1;

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearInterval(timer);
      }

      if (attempts >= 14) {
        window.clearInterval(timer);
      }
    }, 120);
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || isLoading) return;

    const userMessage: ChatMessage = {
      id: messageId(),
      role: 'user',
      content: message,
    };
    const previousMessages = messages;

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: previousMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed.');
      }

      const data = await response.json() as ChatResponse;
      const assistantMessage: ChatMessage = {
        id: messageId(),
        role: 'assistant',
        content: data.reply,
        routeSuggestion: data.routeSuggestion ?? null,
      };

      setMessages((current) => [...current, assistantMessage]);

      if (data.shouldAutoNavigate && data.routeSuggestion) {
        window.setTimeout(() => openRoute(data.routeSuggestion!.path), 350);
      }
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: messageId(),
          role: 'assistant',
          content: 'I could not reach the assistant right now. You can still ask on WhatsApp or use the contact form.',
          routeSuggestion: {
            label: 'Open Contact Form',
            path: '/contact#contact-form',
            reason: 'Use the contact form if the assistant is temporarily unavailable.',
          },
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 left-4 sm:left-6 z-[56]">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[390px] max-h-[min(640px,calc(100vh-8rem))] overflow-hidden rounded-[1.5rem] bg-white border border-line shadow-soft-lg"
          >
            <div className="bg-ink text-white p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-10 h-10 rounded-xl bg-brand-gold text-ink flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-black text-sm uppercase tracking-wider">Markadeo Assistant</p>
                  <p className="text-xs text-zinc-300 truncate">FAQs, services, pricing and page routing</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-[390px] max-h-[45vh] overflow-y-auto bg-canvas p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft ${
                      message.role === 'user'
                        ? 'bg-ink text-white rounded-br-md'
                        : 'bg-white text-zinc-700 border border-line rounded-bl-md'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <span className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold-hover">
                        <Sparkles className="w-3 h-3" />
                        Assistant
                      </span>
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.routeSuggestion && (
                      <button
                        type="button"
                        onClick={() => openRoute(message.routeSuggestion!.path)}
                        className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full bg-brand-gold px-3 py-2 text-xs font-bold text-ink hover:bg-brand-gold-hover transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{message.routeSuggestion.label}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-white border border-line px-4 py-3 text-sm text-zinc-600 shadow-soft inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-gold-hover" />
                    Thinking
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 bg-white border-t border-line flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about pricing, services, portfolio..."
                className="min-w-0 flex-1 rounded-full bg-canvas border border-line px-4 py-3 text-sm outline-none focus:border-brand-gold"
                disabled={isLoading}
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                aria-label="Send chat message"
                className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Open Markadeo chatbot"
        onClick={() => setIsOpen((current) => !current)}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.15, duration: 0.35 }}
        whileHover={{ y: -3, scale: 1.04 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_25px_rgba(0,0,0,0.32)]"
      >
        <span className="absolute inset-0 rounded-full bg-brand-gold/25 animate-ping pointer-events-none" />
        <MessageCircle className="relative w-7 h-7" />
      </motion.button>
    </div>
  );
}
