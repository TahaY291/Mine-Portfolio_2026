"use client";
import { useState, useEffect } from "react";

const roles = ["Full-Stack Developer", "UI/UX Craftsman", "Creative Coder", "Open Source Builder"];

export default function IntroCard() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setVisible(true); }, 280);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .intro-card {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 26px 24px;
          border-radius: 22px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          background: rgba(14, 14, 16, 0.85);
          backdrop-filter: blur(32px) saturate(1.8) brightness(0.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8) brightness(0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            0 16px 56px rgba(0, 0, 0, 0.80),
            0 4px 18px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 0 rgba(255, 255, 255, 0.20),
            inset 0 -1px 0 rgba(255, 255, 255, 0.03);
        }

        .intro-card::before {
          content: "";
          position: absolute;
          top: -55px; left: -40px;
          width: 260px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(ellipse at 40% 40%,
            rgba(255,255,255,0.16) 0%,
            rgba(255,255,255,0.06) 35%,
            transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .intro-card > * { position: relative; z-index: 1; }

        .intro-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .intro-available {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .intro-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .intro-available-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: #4ade80;
        }

        .intro-category {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.32);
          text-transform: uppercase;
        }

        .intro-name {
          font-size: 34px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: rgba(255,255,255,0.93);
          margin: 8px 0 6px;
        }

        .intro-role-bar {
          height: 22px;
          overflow: hidden;
          border-left: 2px solid rgba(110,181,255,0.6);
          padding-left: 10px;
          margin-bottom: 12px;
        }

        .intro-role-text {
          font-size: 13px;
          color: rgba(110,181,255,0.85);
          font-family: 'DM Mono', monospace;
          display: block;
          transition: opacity 0.25s, transform 0.25s;
        }

        .intro-bio {
          font-size: 12.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.38);
        }

        .intro-stats {
          display: flex;
          gap: 20px;
          padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin: 14px 0;
        }

        .intro-stat-value {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .intro-stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          margin-top: 1px;
        }

        .intro-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .intro-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6eb5ff, #e879f9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .intro-socials {
          display: flex;
          gap: 6px;
        }

        .intro-social-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 11px;
          border-radius: 999px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.42);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }

        .intro-social-pill:hover {
          background: rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.7);
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

        <div>
          <h1 className="intro-name">Alex Mercer</h1>
          <div className="intro-role-bar">
            <span
              className="intro-role-text"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-4px)",
              }}
            >
              {roles[roleIdx]}
            </span>
          </div>
          <p className="intro-bio">
            Building products at the intersection of elegant design and performant engineering.
          </p>
        </div>

        {/* Inline stats — replaces StatsCard */}
        <div className="intro-stats">
          {[
            { value: "32+", label: "Projects", color: "var(--accent-blue)" },
            { value: "6yr", label: "Experience", color: "var(--accent-green)" },
            { value: "18k", label: "GitHub Stars", color: "var(--accent-amber)" },
          ].map((s) => (
            <div key={s.label}>
              <div className="intro-stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="intro-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="intro-footer">
          <div className="intro-avatar">A</div>
          <div className="intro-socials">
            {["GH", "LI", "TW"].map((s) => (
              <span key={s} className="intro-social-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}