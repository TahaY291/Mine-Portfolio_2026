"use client";

const skills = [
  { name: "React.js",    level: 82, color: "#6eb5ff" },
  { name: "Node.js",     level: 80, color: "#7ef5b0" },
  { name: "MongoDB",     level: 78, color: "#7ef5b0" },
  { name: "Express.js",  level: 76, color: "#ffc96b" },
  { name: "Next.js",     level: 72, color: "#ffffff" },
  { name: "TypeScript",  level: 65, color: "#6eb5ff" },
];

export default function SkillsCard({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .skills-card {
          position: relative;
          width: 100%; height: 100%;
          padding: 18px 20px 16px;
          border-radius: 22px; cursor: pointer;
          font-family: 'Syne', sans-serif;
          overflow: hidden; min-height: 0; box-sizing: border-box;
          display: flex; flex-direction: column;
          background: rgba(14,14,17,0.92);
          backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          -webkit-backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 2px 0 rgba(255,255,255,0.045) inset, 0 20px 60px rgba(0,0,0,0.65);
          transition: border-color .25s, transform .22s cubic-bezier(.34,1.4,.64,1);
        }
        .skills-card:hover { border-color: rgba(255,255,255,0.13); transform: translateY(-2px); }
        .skills-card > * { position: relative; z-index: 1; }

        /* ── White reflection ── */
        .skills-card::after {
          content: ''; position: absolute; inset: -1px; border-radius: 23px;
          background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent 45%, rgba(255,255,255,0.04));
          opacity: 0; transition: opacity .3s; pointer-events: none; z-index: 0;
        }
        .skills-card:hover::after { opacity: 1; }

        .skills-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: clamp(8px, 1.2vh, 14px); flex-shrink: 0;
        }
        .skills-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: .14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 2px;
        }
        .skills-title { font-size: 15px; font-weight: 700; color: rgba(244,244,245,0.92); margin: 0; letter-spacing: -.01em; }
        .skills-arrow {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.3); font-size: 12px; flex-shrink: 0;
          transition: border-color .2s, color .2s;
        }
        .skills-card:hover .skills-arrow { border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        .skills-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(6px, 1.2vh, 14px) 18px;
          flex: 1; min-height: 0; overflow: hidden; align-content: space-evenly;
        }
        .skill-row { min-height: 0; overflow: hidden; }
        .skill-meta { display: flex; justify-content: space-between; margin-bottom: clamp(2px, 0.4vh, 5px); }
        .skill-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          color: rgba(244,244,245,0.45); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .skill-pct { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(244,244,245,0.22); flex-shrink: 0; margin-left: 4px; }
        .skill-track { height: 2px; background: rgba(255,255,255,0.06); border-radius: 2px; }
        .skill-fill { height: 100%; border-radius: 2px; }
      `}</style>

      <div className="skills-card" onClick={onClick}>
        <div className="skills-header">
          <div>
            <div className="skills-label">Expertise</div>
            <h3 className="skills-title">Skills</h3>
          </div>
          <div className="skills-arrow">↗</div>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-row">
              <div className="skill-meta">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill skill-fill-bar"
                  data-w={s.level}
                  style={{
                    width: `${s.level}%`,
                    background: s.color,
                    boxShadow: `0 0 6px ${s.color}55`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}