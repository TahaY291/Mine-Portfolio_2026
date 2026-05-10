"use client";
import { useState, useEffect } from "react";

const roles = [
  "MERN Stack Developer",
  "Next.js Developer",
  "Full-Stack Developer",
  "TypeScript Enthusiast",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/TahaY291",
    color: "rgba(255,255,255,0.75)",
    borderColor: "rgba(255,255,255,0.12)",
    bg: "rgba(255,255,255,0.06)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mtahayasin/",
    color: "rgba(110,181,255,0.90)",
    borderColor: "rgba(110,181,255,0.28)",
    bg: "rgba(110,181,255,0.10)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function useTypewriter(
  words: string[],
  typingSpeed = 68,
  deletingSpeed = 38,
  pauseMs = 1600
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const word = words[wordIdx];
    if (phase === "typing") {
      if (charIdx < word.length) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, typingSpeed + Math.random() * 22);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseMs);
        return () => clearTimeout(t);
      }
    }
    if (phase === "deleting") {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [phase, charIdx, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function IntroCard() {
  const roleText = useTypewriter(roles);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .intro-card {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 22px 22px 22px;
          border-radius: 22px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background: rgba(14, 14, 16, 0.88);
          backdrop-filter: blur(32px) saturate(1.8) brightness(0.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8) brightness(0.8);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            0 16px 56px rgba(0,0,0,0.80),
            0 4px 18px rgba(0,0,0,0.6),
            inset 0 1.5px 0 rgba(255,255,255,0.18),
            inset 0 -1px 0 rgba(255,255,255,0.03);
        }

        .intro-card::before {
          content: "";
          position: absolute;
          top: -55px; left: -40px;
          width: 260px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(ellipse at 40% 40%,
            rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 35%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .intro-card > * { position: relative; z-index: 1; }

        .intro-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }

        .intro-available { display: flex; align-items: center; gap: 6px; }

        .intro-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #4ade80;
          animation: introPulse 2s ease-in-out infinite;
        }

        @keyframes introPulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.4; transform:scale(0.8); }
        }

        .intro-available-label { font-family: 'DM Mono', monospace; font-size: 11px; color: #4ade80; }

        .intro-category {
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
        }

        .intro-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          padding: 32px 0 28px;
        }

        .intro-name {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: rgba(255,255,255,0.93);
          margin: 0;
        }

        .intro-role-bar {
          display: flex;
          align-items: center;
          border-left: 2px solid rgba(110,181,255,0.5);
          padding-left: 10px;
          height: 22px;
          overflow: hidden;
        }

        .intro-role-text {
          font-family: 'DM Mono', monospace;
          font-size: 12.5px;
          color: rgba(110,181,255,0.85);
          white-space: nowrap;
        }

        .intro-cursor {
          display: inline-block;
          width: 2px; height: 13px;
          background: rgba(110,181,255,0.75);
          margin-left: 2px;
          border-radius: 1px;
          animation: cursorBlink 0.75s step-end infinite;
          flex-shrink: 0;
        }

        @keyframes cursorBlink { 0%,100%{ opacity:1; } 50%{ opacity:0; } }

        .intro-bio {
          font-size: 13.5px;
          line-height: 1.78;
          color: rgba(255,255,255,0.54);
          margin: 4px 0 0;
        }

        .intro-socials {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .intro-social-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 999px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }

        .intro-social-btn:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="intro-card">

        <div className="intro-top-row">
          <span className="intro-category">Portfolio</span>
          <div className="intro-available">
            <span className="intro-dot" />
            <span className="intro-available-label">Available</span>
          </div>
        </div>

        <div className="intro-body">

          <h1 className="intro-name">Taha Yasin</h1>

          <div className="intro-role-bar">
            <span className="intro-role-text">{roleText}</span>
            <span className="intro-cursor" />
          </div>

          <p className="intro-bio">
            I build complete, production-ready web apps — real-time video platforms,
            marketplaces, and content systems. Clean code and features that actually work.
          </p>

          <div className="intro-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="intro-social-btn"
                style={{
                  color: s.color,
                  background: s.bg,
                  border: `1px solid ${s.borderColor}`,
                }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}