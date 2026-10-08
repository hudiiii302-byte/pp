"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CloseIcon, RobotIcon, WhatsAppIcon } from "@/components/icons";
import { replyTo, welcomeReply, type ChatLink, type ChatTurn } from "@/lib/chat-assistant";
import { usWhatsappLink, whatsappLink } from "@/lib/site";

const STORAGE_KEY = "wordbitx-ai-v7";

type Stored = { messages?: ChatTurn[]; intentId?: string; open?: boolean };

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function persist(payload: Stored) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function AiChatWidget() {
  const welcome = welcomeReply();
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [intentId, setIntentId] = useState<string | undefined>();
  const [messages, setMessages] = useState<ChatTurn[]>([
    { role: "assistant", text: welcome.text, links: welcome.links, followUps: welcome.followUps },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const intentRef = useRef(intentId);
  intentRef.current = intentId;

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Stored;
        if (saved.messages?.length) {
          setMessages(saved.messages);
          setIntentId(saved.intentId);
        }
        const desktop = window.matchMedia("(min-width: 768px)").matches;
        if (saved.open && desktop) setOpen(true);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    persist({ messages, intentId, open });
  }, [messages, intentId, open, ready]);

  useEffect(() => {
    const node = scroller.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function send(textToSend?: string) {
    const query = (textToSend ?? input).trim();
    if (!query || typing) return;
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    if (!textToSend) setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const reply = replyTo(query, intentRef.current);
      setIntentId(reply.intentId);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: reply.text, links: reply.links, followUps: reply.followUps },
      ]);
      setTyping(false);
    }, 280);
  }

  function resetChat() {
    const fresh = welcomeReply();
    setIntentId(undefined);
    setMessages([{ role: "assistant", text: fresh.text, links: fresh.links, followUps: fresh.followUps }]);
  }

  const lastAssistantIndex = messages.reduce((index, message, current) => (message.role === "assistant" ? current : index), -1);

  return (
    <>
      {ready && !open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="animate-assist-glow group fixed right-4 bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] z-[70] flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-brand-300 ring-2 ring-brand-400 ring-offset-2 ring-offset-navy-950 transition-transform duration-300 hover:scale-105 hover:text-brand-200 hover:ring-brand-300"
          aria-label="Open WordbitX Ai"
        >
          <span className="assist-orb" aria-hidden />
          <RobotIcon className="relative h-7 w-7" />
        </button>
      ) : null}

      {ready && open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-navy-950/35 backdrop-blur-[3px] md:bg-transparent md:backdrop-blur-none"
            aria-label="Dismiss WordbitX Ai"
            onClick={() => setOpen(false)}
          />
          <section
            className="animate-assist-in fixed inset-x-3 bottom-[max(0.65rem,env(safe-area-inset-bottom))] z-[70] flex h-[min(38rem,calc(100dvh-5.25rem))] w-auto flex-col overflow-hidden rounded-[1.6rem] border border-white/40 bg-[#eef3f8] shadow-[0_40px_110px_-28px_rgba(3,8,20,0.72)] md:inset-x-auto md:right-5 md:h-[min(42rem,calc(100dvh-2rem))] md:w-[min(26rem,calc(100vw-2.5rem))]"
            aria-label="WordbitX Ai"
          >
            <div className="assist-header-line shrink-0" aria-hidden />
            <header className="flex shrink-0 items-center gap-3 bg-navy-950 px-4 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/35">
                <RobotIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold tracking-tight text-white">WordbitX Ai</h2>
                <p className="text-[0.68rem] text-brand-300">Private briefing · answers stay here</p>
              </div>
              <button
                type="button"
                onClick={resetChat}
                className="rounded-lg px-2.5 py-1.5 text-[0.68rem] font-medium text-slate-400 hover:bg-white/10 hover:text-white"
              >
                New
              </button>
            </header>

            <div ref={scroller} className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain bg-[#eef3f8] px-4 py-4">
              {messages.map((message, index) => {
                const isLastAssistant = index === lastAssistantIndex && message.role === "assistant" && !typing;
                return (
                  <div
                    key={`${message.role}-${index}`}
                    className={`animate-assist-msg flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[94%] rounded-2xl px-3.5 py-2.5 text-[0.84rem] leading-relaxed ${
                        message.role === "user"
                          ? "rounded-br-md bg-brand-600 text-white shadow-[0_10px_24px_-16px_rgba(20,131,35,0.9)]"
                          : "rounded-bl-md border border-slate-200/90 bg-white text-ink-900 shadow-[0_12px_30px_-22px_rgba(5,13,33,0.45)]"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      {message.links?.length ? (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {message.links.map((link) => (
                            <LinkChip key={`${link.href}-${link.label}`} link={link} />
                          ))}
                        </div>
                      ) : null}
                      {isLastAssistant && message.followUps?.length ? (
                        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-2.5">
                          {message.followUps.slice(0, 6).map((prompt) => (
                            <button
                              key={prompt}
                              type="button"
                              onClick={() => send(prompt)}
                              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.68rem] font-medium text-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              {typing ? (
                <div className="flex w-fit gap-1 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:240ms]" />
                </div>
              ) : null}
            </div>

            <footer className="shrink-0 border-t border-slate-200 bg-white p-3">
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  send();
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about a website, app, store or POS"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={typing || !input.trim()}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-3.5 text-white transition-transform hover:scale-105 hover:bg-brand-600 disabled:opacity-40 disabled:hover:scale-100"
                  aria-label="Send"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-x-3 text-[0.68rem] text-slate-500">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#1f9a4a]">
                    <WhatsAppIcon className="h-3.5 w-3.5" /> Pakistan
                  </a>
                  <a href={usWhatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#1f9a4a]">
                    <WhatsAppIcon className="h-3.5 w-3.5" /> USA
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 text-[0.7rem] font-semibold text-ink-700 hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Close WordbitX Ai"
                >
                  <CloseIcon className="h-3 w-3" />
                  Close
                </button>
              </div>
            </footer>
          </section>
        </>
      ) : null}
    </>
  );
}

function LinkChip({ link }: { link: ChatLink }) {
  const className =
    "inline-flex items-center rounded-full border border-brand-500/25 bg-brand-50 px-2.5 py-1 text-[0.7rem] font-semibold text-brand-700 transition-all hover:border-brand-500/50 hover:bg-brand-100";
  if (link.external || isExternal(link.href)) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}
