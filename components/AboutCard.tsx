"use client";

export default function AboutCard({ onClick }: { onClick: () => void }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap');

        .about-card {
          position: relative;
          padding: 20px 20px 16px;
          height: 100%;
          display: flex; flex-direction: column;
          border-radius: 22px; cursor: pointer;
          font-family: 'Syne', sans-serif;
          overflow: hidden; min-height: 0; box-sizing: border-box;
          background: rgba(14,14,17,0.92);
          backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          -webkit-backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 2px 0 rgba(255,255,255,0.045) inset, 0 20px 60px rgba(0,0,0,0.65);
          transition: border-color .25s, transform .22s cubic-bezier(.34,1.4,.64,1);
        }
        .about-card:hover { border-color: rgba(255,255,255,0.13); transform: translateY(-2px); }
        .about-card > * { position: relative; z-index: 1; }

        /* ── White reflection ── */
        .about-card::after {
          content: ''; position: absolute; inset: -1px; border-radius: 23px;
          background: linear-gradient(135deg, rgba(255,255,255,0.07), transparent 50%, rgba(255,255,255,0.03));
          opacity: 0; transition: opacity .3s; pointer-events: none; z-index: 0;
        }
        .about-card:hover::after { opacity: 1; }

        .about-top { flex-shrink: 0; }
        .about-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-amber,#e2c488), var(--accent-pink,#e288b4));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Instrument Serif', serif;
          font-size: 13px; font-weight: 700; color: #09090b;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 12px; flex-shrink: 0; letter-spacing: -0.02em;
        }
        .about-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: .14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 3px;
        }
        .about-title {
          font-size: 15px; font-weight: 700; color: rgba(244,244,245,0.92);
          letter-spacing: -.02em; margin: 0 0 6px;
        }
        .about-desc { font-size: 11.5px; line-height: 1.65; color: rgba(244,244,245,0.36); margin: 0; }

        .about-middle {
          flex: 1; min-height: 0; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center;
        }
        .about-divider {
          width: 100%; height: 1px; background: rgba(255,255,255,0.07);
          margin: clamp(6px, 1.2vh, 13px) 0; flex-shrink: 0;
        }
        .about-meta-row {
          display: flex; flex-direction: column; gap: clamp(3px, 0.8vh, 6px);
          flex-shrink: 1; overflow: hidden;
        }
        .about-meta-item { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .about-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.18); flex-shrink: 0; }
        .about-meta-text {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          color: rgba(244,244,245,0.4); letter-spacing: .01em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .about-tags { display: flex; gap: 5px; flex-wrap: wrap; overflow: hidden; flex-shrink: 1; }
        .about-tag {
          display: inline-flex; align-items: center;
          padding: 3px 9px; border-radius: 999px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500;
          color: rgba(244,244,245,0.38); background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07); white-space: nowrap; flex-shrink: 0;
        }

        .about-bottom { flex-shrink: 0; display: flex; justify-content: flex-end; padding-top: 8px; }
        .about-bottom span {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          color: rgba(255,255,255,0.3); transition: color .15s;
        }
        .about-card:hover .about-bottom span { color: rgba(255,255,255,0.8); }
      `}</style>

      <div className="about-card" onClick={onClick}>
        <div className="about-top">
          
          <div className="about-label">Who I Am</div>
          <h3 className="about-title">About</h3>
          <p className="about-desc">
            Building production-ready apps with real features. Obsessed with clean code and things that actually work.
          </p>
        </div>

        <div className="about-middle">
          <div className="about-divider" />
          <div className="about-meta-row">
            {[
              "Based in Pakistan",
              "MERN · Next.js · TypeScript",
              "Open to remote & local",
            ].map((t) => (
              <div key={t} className="about-meta-item">
                <div className="about-meta-dot" />
                <span className="about-meta-text">{t}</span>
              </div>
            ))}
          </div>
          <div className="about-divider" />
          <div className="about-tags">
            {["🏏 Cricket", "💪 Gym", "🎮 Gaming"].map((tag) => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="about-bottom">
          <span>Read more →</span>
        </div>
      </div>
    </>
  );
}