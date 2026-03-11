import { memo, useState, useRef, useEffect, useCallback } from "react";
import { roomStyle } from "../lib/constants";

interface SpeechOverlayProps {
  target: string;
  agentName?: string;
  agentSession?: string;
  send: (msg: object) => void;
  onClose: () => void;
}

export const SpeechOverlay = memo(function SpeechOverlay({
  target, agentName, agentSession, send, onClose,
}: SpeechOverlayProps) {
  const rs = agentSession ? roomStyle(agentSession) : { accent: "#fbbf24" };
  const displayName = agentName?.replace(/-oracle$/, "").replace(/-/g, " ") || target;
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on open
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleSend = useCallback(() => {
    if (!text.trim()) return;
    send({ type: "send", target, text: text.trim() });
    setTimeout(() => send({ type: "send", target, text: "\r" }), 50);
    setText("");
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); }, 800);
  }, [text, target, send, onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center" style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="w-full max-w-lg rounded-t-2xl overflow-hidden"
        style={{
          background: "#12121c",
          border: `1px solid ${rs.accent}30`,
          borderBottom: "none",
          boxShadow: `0 -8px 40px rgba(0,0,0,0.6), 0 0 30px ${rs.accent}10`,
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-4 pb-3">
          <div className="w-3 h-3 rounded-full" style={{ background: rs.accent, boxShadow: `0 0 8px ${rs.accent}` }} />
          <span className="text-[15px] font-semibold" style={{ color: rs.accent }}>{displayName}</span>
          <span className="text-[11px] font-mono text-white/20 ml-1">{agentSession}</span>
          <button
            className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer active:scale-90"
            style={{ background: "rgba(255,255,255,0.06)" }}
            onClick={onClose}
          >
            <svg width={14} height={14} viewBox="0 0 16 16" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>

        {/* Input area */}
        <div className="flex items-center gap-2 px-4 pb-4">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") handleSend(); if (e.key === "Escape") onClose(); }}
            placeholder="Speak or type..."
            className="flex-1 px-4 py-3 rounded-xl text-[15px] text-white outline-none placeholder:text-white/20 [&::-webkit-search-cancel-button]:hidden [&::-webkit-clear-button]:hidden [&::-ms-clear]:hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${rs.accent}20`,
              WebkitAppearance: "none" as const,
            }}
            enterKeyHint="send"
            autoComplete="off"
            autoCorrect="off"
          />
          <button
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer transition-all active:scale-90"
            style={{
              background: text.trim() ? rs.accent : `${rs.accent}20`,
              boxShadow: text.trim() ? `0 0 12px ${rs.accent}60` : "none",
            }}
            onClick={handleSend}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={text.trim() ? "#000" : rs.accent + "60"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Sent toast */}
        {sent && (
          <div className="flex justify-center pb-3">
            <span className="text-[12px] font-mono px-3 py-1 rounded-lg" style={{ background: "#22C55E20", color: "#22C55E" }}>
              Sent ✓
            </span>
          </div>
        )}
      </div>
    </div>
  );
});
