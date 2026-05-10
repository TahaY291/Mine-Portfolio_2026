"use client";

const projects = [
  {
    title: "Telemedicine Platform",
    desc: "Video consultations, prescriptions, medical records & payments",
    techs: ["React", "Node.js", "WebRTC", "MongoDB"],
    color: "#6eb5ff",
  },
  {
    title: "Pinterest Clone",
    desc: "Masonry layout, follow system, post creation & downloads",
    techs: ["React", "Express", "MongoDB"],
    color: "#7ef5b0",
  },
  {
    title: "Blog App",
    desc: "Next.js blog with advanced follow system & aggregations",
    techs: ["Next.js", "TypeScript", "MongoDB"],
    color: "#ffc96b",
  },
];

export default function ProjectsCard({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap');

        .projects-card {
          position: relative;
          width: 100%; height: 100%;
          padding: 22px 22px 18px;
          border-radius: 22px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          overflow: hidden; min-height: 0;
          box-sizing: border-box;
          display: flex; flex-direction: column;
          background: rgba(14,14,17,0.92);
          backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          -webkit-backdrop-filter: blur(32px) saturate(1.6) brightness(0.82);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 2px 0 rgba(255,255,255,0.045) inset, 0 20px 60px rgba(0,0,0,0.65);
          transition: border-color .25s, transform .22s cubic-bezier(.34,1.4,.64,1);
        }
        .projects-card:hover { border-color: rgba(255,255,255,0.13); transform: translateY(-2px); }
        .projects-card > * { position: relative; z-index: 1; }

        /* ── White reflection ── */
        .projects-card::after {
          content: ''; position: absolute; inset: -1px; border-radius: 23px;
          background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent 45%, rgba(255,255,255,0.03));
          opacity: 0; transition: opacity .3s; pointer-events: none; z-index: 0;
        }
        .projects-card:hover::after { opacity: 1; }

        .projects-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: .14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 3px; flex-shrink: 0;
        }
        .projects-title {
          font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700;
          color: rgba(244,244,245,0.92); letter-spacing: -.02em; margin: 0 0 10px; flex-shrink: 0;
        }
        .proj-list { display: flex; flex-direction: column; flex: 1; min-height: 0; overflow: hidden; }
        .proj-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: clamp(6px, 1.5vh, 13px) 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          gap: 10px; cursor: pointer; flex: 1; min-height: 0; overflow: hidden;
        }
        .proj-item:first-child { border-top: none; padding-top: 0; }
        .proj-item:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }
        .proj-left {
          display: flex; flex-direction: column; gap: 3px;
          min-width: 0; min-height: 0; justify-content: center; overflow: hidden;
        }
        .proj-name-row { display: flex; align-items: center; gap: 7px; }
        .proj-accent { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .proj-name {
          font-size: 13px; font-weight: 600; letter-spacing: -.01em;
          color: rgba(244,244,245,0.9); white-space: nowrap; overflow: hidden;
          text-overflow: ellipsis; flex-shrink: 0;
        }
        .proj-desc {
          font-size: 11px; color: rgba(244,244,245,0.32);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex-shrink: 1;
        }
        .proj-techs { display: flex; gap: 4px; flex-wrap: nowrap; overflow: hidden; flex-shrink: 1; }
        .proj-tech {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          padding: 2px 7px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(244,244,245,0.28); white-space: nowrap; flex-shrink: 0;
        }
        .proj-arrow {
          font-size: 15px; color: rgba(244,244,245,0.2);
          flex-shrink: 0; align-self: center; transition: color .15s, transform .15s;
        }
        .proj-item:hover .proj-arrow { color: rgba(255,255,255,0.7); transform: translate(2px,-2px); }
        .projects-footer {
          flex-shrink: 0; padding-top: 10px; margin-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .projects-count { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(244,244,245,0.22); }
        .projects-cta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.35); transition: color .15s; }
        .projects-card:hover .projects-cta { color: rgba(255,255,255,0.8); }
      `}</style>

      <div className="projects-card" onClick={onClick}>
        <div className="projects-label">Work</div>
        <h3 className="projects-title">Featured Projects</h3>
        <div className="proj-list">
          {projects.map((p) => (
            <div key={p.title} className="proj-item">
              <div className="proj-left">
                <div className="proj-name-row">
                  <span className="proj-accent" style={{ background: p.color }} />
                  <span className="proj-name">{p.title}</span>
                </div>
                <span className="proj-desc">{p.desc}</span>
                <div className="proj-techs">
                  {p.techs.map((t) => (
                    <span key={t} className="proj-tech">{t}</span>
                  ))}
                </div>
              </div>
              <span className="proj-arrow">↗</span>
            </div>
          ))}
        </div>
        <div className="projects-footer">
          <span className="projects-count">3 projects</span>
          <span className="projects-cta">View all →</span>
        </div>
      </div>
    </>
  );
}