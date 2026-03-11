import { memo, useState, useRef, useCallback, useEffect } from "react";
import { roomStyle } from "../lib/constants";
import type { AgentState } from "../lib/types";

// Web Speech API types
type SpeechRecognitionType = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: any) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: any) => void) | null;
};

function createRecognition(): SpeechRecognitionType | null {
  const W = window as any;
  const Ctor = W.SpeechRecognition || W.webkitSpeechRecognition;
  if (!Ctor) return null;
  return new Ctor() as SpeechRecognitionType;
}

interface CommandBarProps {
  agents: AgentState[];
  send: (msg: object) => void;
  connected: boolean;
}

export const CommandBar = memo(function CommandBar({ agents, send, connected }: CommandBarProps) {
  const [selectedTarget, setSelectedTarget] = useState<string>("");
  const [showPicker, setShowPicker] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [finalText, setFinalText] = useState("");
  const [sent, setSent] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);
  const hasWebSpeech = useRef<boolean>(!!createRecognition());

  // Fallback: text input mode when no Web Speech API
  const [textMode, setTextMode] = useState(false);
  const [textInput, setTextInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-select first busy agent, or first agent
  useEffect(() => {
    if (selectedTarget && agents.some(a => a.target === selectedTarget)) return;
    const busy = agents.find(a => a.status === "busy");
    const first = busy || agents[0];
    if (first) setSelectedTarget(first.target);
  }, [agents, selectedTarget]);

  const selectedAgent = agents.find(a => a.target === selectedTarget);

  const sendText = useCallback((text: string) => {
    if (!text.trim() || !selectedTarget) return;
    send({ type: "send", target: selectedTarget, text: text.trim() });
    setTimeout(() => send({ type: "send", target: selectedTarget, text: "\r" }), 50);
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  }, [selectedTarget, send]);

  const startListening = useCallback(() => {
    if (!hasWebSpeech.current) {
      // Fallback to text input
      setTextMode(true);
      setTimeout(() => inputRef.current?.focus(), 100);
      return;
    }

    const rec = createRecognition();
    if (!rec) return;

    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = "th-TH"; // Thai + English mixed

    rec.onresult = (e: any) => {
      let interim = "";
      let final = "";
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) final += r[0].transcript;
        else interim += r[0].transcript;
      }
      setTranscript(interim);
      if (final) setFinalText(final);
    };

    rec.onend = () => {
      setListening(false);
    };

    rec.onerror = (e: any) => {
      console.warn("Speech error:", e.error);
      setListening(false);
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        // Fallback to text
        setTextMode(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    recognitionRef.current = rec;
    setTranscript("");
    setFinalText("");
    setSent(false);
    setListening(true);
    rec.start();
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  // Auto-send when speech ends with final text
  useEffect(() => {
    if (!listening && finalText) {
      sendText(finalText);
      setFinalText("");
      setTranscript("");
    }
  }, [listening, finalText, sendText]);

  const rs = selectedAgent ? roomStyle(selectedAgent.session) : { accent: "#fbbf24" };
  const displayName = selectedAgent?.name.replace(/-oracle$/, "").replace(/-/g, " ") || "—";

  return (
    <>
      {/* Agent picker overlay */}
      {showPicker && (
        <>
          <div className="fixed inset-0 z-50" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowPicker(false)} />
          <div
            className="fixed bottom-24 left-4 right-4 max-h-[60vh] overflow-y-auto z-50 rounded-2xl"
            style={{ background: "#12121c", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 -8px 40px rgba(0,0,0,0.6)" }}
          >
            <div className="px-4 py-3 text-[11px] tracking-[4px] uppercase font-mono text-white/30 border-b border-white/[0.06]">
              Send to
            </div>
            {agents.map(agent => {
              const ars = roomStyle(agent.session);
              const name = agent.name.replace(/-oracle$/, "").replace(/-/g, " ");
              const isBusy = agent.status === "busy";
              return (
                <button
                  key={agent.target}
                  className="w-full flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-colors active:bg-white/[0.08]"
                  style={{
                    background: agent.target === selectedTarget ? `${ars.accent}15` : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                  onClick={() => { setSelectedTarget(agent.target); setShowPicker(false); }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{
                      background: isBusy ? "#ffa726" : agent.status === "ready" ? "#22C55E" : "#555",
                      boxShadow: isBusy ? "0 0 8px #ffa726" : agent.status === "ready" ? "0 0 4px #22C55E" : "none",
                    }}
                  />
                  <span className="text-[15px] font-semibold" style={{ color: ars.accent }}>{name}</span>
                  {isBusy && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/15 text-amber-400">busy</span>}
                  <span className="text-[11px] font-mono ml-auto" style={{ color: "#64748B" }}>{agent.session}</span>
                  {agent.target === selectedTarget && (
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke={ars.accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Text input mode (fallback) */}
      {textMode && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
          <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#0a0a12", borderTop: `1px solid ${rs.accent}30` }}>
            <button
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl flex-shrink-0 cursor-pointer active:scale-95"
              style={{ background: `${rs.accent}15`, border: `1px solid ${rs.accent}30` }}
              onClick={() => setShowPicker(true)}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: selectedAgent?.status === "busy" ? "#ffa726" : "#22C55E" }} />
              <span className="text-[13px] font-semibold max-w-[80px] truncate" style={{ color: rs.accent }}>{displayName}</span>
            </button>
            <input
              ref={inputRef}
              type="text"
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") { sendText(textInput); setTextInput(""); }
                if (e.key === "Escape") setTextMode(false);
              }}
              placeholder="Type or dictate..."
              className="flex-1 bg-transparent text-white text-[15px] outline-none px-2 py-2.5 placeholder:text-white/20 [&::-webkit-search-cancel-button]:hidden [&::-webkit-clear-button]:hidden"
              style={{ WebkitAppearance: "none" as const }}
              enterKeyHint="send"
            />
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer active:scale-90"
              style={{ background: textInput.trim() ? rs.accent : "rgba(255,255,255,0.06)" }}
              onClick={() => { if (textInput.trim()) { sendText(textInput); setTextInput(""); } }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={textInput.trim() ? "#000" : "#666"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer active:scale-90"
              style={{ background: "rgba(255,255,255,0.06)" }}
              onClick={() => setTextMode(false)}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Listening overlay */}
      {listening && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: "rgba(0,0,0,0.85)" }}>
          {/* Pulsing rings */}
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full animate-ping" style={{ background: `${rs.accent}15`, animationDuration: "1.5s" }} />
            <div className="absolute inset-4 rounded-full animate-ping" style={{ background: `${rs.accent}20`, animationDuration: "1.2s" }} />
            <div
              className="absolute inset-8 rounded-full flex items-center justify-center cursor-pointer active:scale-90"
              style={{ background: rs.accent, boxShadow: `0 0 60px ${rs.accent}80` }}
              onClick={stopListening}
            >
              {/* Mic icon */}
              <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x={9} y={1} width={6} height={11} rx={3} />
                <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
              </svg>
            </div>
          </div>

          {/* Target agent */}
          <div className="mt-8 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: rs.accent }} />
            <span className="text-[14px] font-semibold" style={{ color: rs.accent }}>{displayName}</span>
          </div>

          {/* Live transcript */}
          <div className="mt-4 px-8 text-center min-h-[3em]">
            <p className="text-white/80 text-lg">{transcript || finalText || "Listening..."}</p>
          </div>

          {/* Tap to stop hint */}
          <p className="mt-6 text-white/20 text-[12px] font-mono">Tap mic to send</p>
        </div>
      )}

      {/* Sent confirmation */}
      {sent && !listening && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-xl" style={{ background: "#22C55E20", border: "1px solid #22C55E40" }}>
          <span className="text-[13px] font-mono text-emerald-400">Sent to {displayName}</span>
        </div>
      )}

      {/* Main buttons — bottom right */}
      {!listening && !textMode && (
        <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
          {/* Agent selector (small) */}
          <button
            className="w-14 h-10 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer active:scale-90"
            style={{ background: `${rs.accent}25`, border: `1px solid ${rs.accent}30` }}
            onClick={() => setShowPicker(true)}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: selectedAgent?.status === "busy" ? "#ffa726" : "#22C55E" }} />
            <span className="text-[10px] font-bold truncate max-w-[32px]" style={{ color: rs.accent }}>
              {displayName.split(" ")[0]}
            </span>
          </button>

          {/* Mic button (big) */}
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${rs.accent}, ${rs.accent}cc)`,
              boxShadow: `0 4px 20px ${rs.accent}60, 0 0 40px ${rs.accent}20`,
            }}
            onClick={startListening}
            aria-label="Talk to agent"
          >
            {/* Mic icon */}
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <rect x={9} y={1} width={6} height={11} rx={3} />
              <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
});
