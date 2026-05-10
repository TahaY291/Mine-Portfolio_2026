"use client";
import { useState } from "react";
import { useEffect } from "react";

const projects = [
  {
    id: "prohealth",
    title: "ProHealth",
    subtitle: "Smart Telemedicine & Appointment Management System",
    year: "2024",
    role: "Full-Stack Developer",
    color: "#6eb5ff",
    colorDim: "rgba(110,181,255,0.08)",
    colorBorder: "rgba(110,181,255,0.18)",
    emoji: "🏥",
    desc: "A complete telemedicine platform built over 2 months featuring real-time video consultations via WebRTC, role-based access for doctors, patients and admins, live SSE notifications, prescription generation with PDF download, medical records, and Stripe payment integration.",
    highlights: [
      "WebRTC video consultations between doctor & patient",
      "SSE-powered real-time notifications system",
      "Role-based access: Admin, Doctor, Patient",
      "Prescription PDF generation & download",
      "Stripe payment gateway integration",
      "Medical records & consultation history with aggregations",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "SSE", "Stripe", "JWT"],
    liveLink: "https://telemedicine-frontend-three.vercel.app/",
    githubLink: "https://github.com/TahaY291/telemedicine-frontend",
    credentials: [
      { role: "Patient", email: "patientmail12@gmail.com", password: "1234patient" },
      { role: "Doctor",  email: "doctormail12@gmail.com",  password: "1234doctor"  },
      { role: "Admin",   email: "adminmail@gmail.com",     password: "1234admin"   },
    ],
  },
  {
    id: "pinterest-clone",
    title: "Pinterest Clone",
    subtitle: "Full-featured visual content platform",
    year: "2024",
    role: "Full-Stack Developer",
    color: "#7ef5b0",
    colorDim: "rgba(126,245,176,0.07)",
    colorBorder: "rgba(126,245,176,0.16)",
    emoji: "📌",
    desc: "A Pinterest-inspired MERN app with a responsive masonry layout, full social features including follow/unfollow, comments, likes, and post creation. Users can download any post and interact with content through a clean, media-rich UI.",
    highlights: [
      "Masonry grid layout with responsive columns",
      "Follow / unfollow system with aggregations",
      "Comment, like, and save posts",
      "Post creation with image upload",
      "Download any post image",
      "MongoDB aggregations for feed & explore",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Multer"],
    liveLink: "https://pin-front-silk.vercel.app/",
    githubLink: "https://github.com/TahaY291/PinFront",
    credentials: [
      { role: "User", email: "usermail12@gmail.com", password: "1234user" },
    ],
  },
  {
    id: "blog-app",
    title: "Blog App",
    subtitle: "Next.js blog platform with advanced social features",
    year: "2024",
    role: "Full-Stack Developer",
    color: "#ffc96b",
    colorDim: "rgba(255,201,107,0.07)",
    colorBorder: "rgba(255,201,107,0.16)",
    emoji: "✍️",
    desc: "A modern blog platform built with Next.js featuring an advanced follow system, nested comments, and complex MongoDB aggregations for personalised feeds. Clean reading experience with full author profiles and content discovery.",
    highlights: [
      "Advanced follow system with personalised feed",
      "Nested comments with aggregations",
      "MongoDB aggregation pipelines for feed logic",
      "Author profiles & blog discovery",
      "Next.js App Router with server components",
      "TypeScript throughout for type safety",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "Tailwind"],
    liveLink: "https://blog-app-nextjs-eta-six.vercel.app/",
    githubLink: "https://github.com/TahaY291/BlogAppNextjs",
    credentials: [
      { role: "User", email: "usermail12@gmail.com", password: "1234user" },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button className="pp-copy-btn" onClick={copy}>
      {copied ? "✓" : "copy"}
    </button>
  );
}

export default function ProjectsPage({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <style>{`
        .pp-wrap {
          min-height: 100vh;
          padding: 0 0 80px 0;
          font-family: 'Inter', sans-serif;
        }

        .pp-nav {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          background: rgba(10,10,11,0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pp-nav-label {
          font-family: 'DM Mono', monospace; font-size: 10px;
          letter-spacing: 0.16em; color: rgba(255,255,255,0.28); text-transform: uppercase;
        }
        .pp-back {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 16px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(255,255,255,0.55); cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .pp-back:hover {
          background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.2);
        }

        .pp-header { padding: 56px 48px 40px; }
        .pp-eyebrow {
          font-family: 'DM Mono', monospace; font-size: 10px;
          letter-spacing: 0.18em; color: rgba(255,255,255,0.35);
          text-transform: uppercase; margin-bottom: 10px;
        }
        .pp-title {
          font-size: clamp(36px, 5vw, 56px); font-weight: 800;
          color: rgba(255,255,255,0.92); letter-spacing: -0.035em;
          line-height: 1; margin-bottom: 14px;
        }
        .pp-subtitle {
          font-size: 15px; color: rgba(255,255,255,0.35);
          line-height: 1.6; max-width: 480px;
        }
        .pp-divider { height: 1px; background: rgba(255,255,255,0.05); margin: 0 48px; }

        .pp-projects { padding: 48px 48px 0; display: flex; flex-direction: column; gap: 28px; }

        .pp-project-card {
          border: 1px solid rgba(255,255,255,0.07); border-radius: 20px;
          overflow: hidden; background: rgba(14,14,17,0.8);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .pp-project-card:hover { border-color: rgba(255,255,255,0.12); transform: translateY(-2px); }

        .pp-project-top {
          padding: 28px 28px 0;
          display: flex; align-items: flex-start; gap: 18px;
        }
        .pp-project-icon {
          width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0; border: 1px solid;
        }
        .pp-project-meta { flex: 1; min-width: 0; }
        .pp-project-tags { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
        .pp-project-year { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.25); }
        .pp-project-role { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.25); }
        .pp-project-dot { width: 2px; height: 2px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .pp-project-title {
          font-size: 20px; font-weight: 700; color: rgba(255,255,255,0.9);
          letter-spacing: -0.025em; margin-bottom: 2px;
        }
        .pp-project-subtitle { font-size: 12px; color: rgba(255,255,255,0.32); }

        .pp-btn-group { display: flex; gap: 7px; flex-shrink: 0; }
        .pp-link-btn {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 6px 13px; border-radius: 999px;
          font-family: 'DM Mono', monospace; font-size: 10px;
          border: 1px solid; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s; text-decoration: none;
        }
        .pp-link-btn:hover { opacity: 0.8; transform: translateY(-1px); }
        .pp-gh-btn {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 6px 13px; border-radius: 999px;
          font-family: 'DM Mono', monospace; font-size: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.45);
          cursor: pointer; text-decoration: none;
          transition: opacity 0.2s, background 0.2s;
        }
        .pp-gh-btn:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.75); }

        .pp-project-body {
          padding: 18px 28px 24px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
        }
        .pp-project-desc {
          font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.4);
        }
        .pp-highlights-label {
          font-family: 'DM Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 10px;
        }
        .pp-highlights { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .pp-highlight-row {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12px; color: rgba(255,255,255,0.42); line-height: 1.5;
        }
        .pp-highlight-dot {
          width: 4px; height: 4px; border-radius: 50%;
          margin-top: 6px; flex-shrink: 0;
        }
        .pp-tech-label {
          font-family: 'DM Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 8px;
        }
        .pp-tech-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .pp-tech-pill {
          font-family: 'DM Mono', monospace; font-size: 10px;
          padding: 3px 10px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.03);
        }

        /* ── Test credentials block — new styles only ── */
        .pp-creds-wrap {
          margin: 0 28px 20px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .pp-creds-label {
          font-family: 'DM Mono', monospace; font-size: 9px;
          letter-spacing: 0.14em; color: rgba(255,255,255,0.22);
          text-transform: uppercase; margin-bottom: 10px;
        }
        .pp-creds-rows { display: flex; flex-direction: column; gap: 7px; }
        .pp-cred-row {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .pp-cred-role {
          font-family: 'DM Mono', monospace; font-size: 9px;
          padding: 2px 8px; border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35);
          min-width: 52px; text-align: center; flex-shrink: 0;
        }
        .pp-cred-field {
          display: flex; align-items: center; gap: 6px;
        }
        .pp-cred-key {
          font-family: 'DM Mono', monospace; font-size: 9px;
          color: rgba(255,255,255,0.2);
        }
        .pp-cred-val {
          font-family: 'DM Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.55);
        }
        .pp-cred-sep {
          color: rgba(255,255,255,0.1); font-size: 10px;
        }
        .pp-copy-btn {
          font-family: 'DM Mono', monospace; font-size: 9px;
          padding: 1px 7px; border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent; color: rgba(255,255,255,0.25);
          cursor: pointer; transition: color 0.15s, border-color 0.15s;
        }
        .pp-copy-btn:hover { color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.2); }
      `}</style>

      <div className="pp-wrap">
        <nav className="pp-nav">
          <span className="pp-nav-label">Work / Projects</span>
          <button className="pp-back" onClick={onClose}>← Back</button>
        </nav>

        <header className="pp-header">
          <div className="pp-eyebrow">Selected Work</div>
          <h1 className="pp-title">Projects</h1>
          <p className="pp-subtitle">
            Three full-stack apps built from scratch — real features, real deployments, real code.
          </p>
        </header>

        <div className="pp-divider" />

        <div className="pp-projects">
          {projects.map((p) => (
            <div key={p.id} className="pp-project-card">
              <div className="pp-project-top">
                <div className="pp-project-icon" style={{ background: p.colorDim, borderColor: p.colorBorder }}>
                  {p.emoji}
                </div>
                <div className="pp-project-meta">
                  <div className="pp-project-tags">
                    <span className="pp-project-year">{p.year}</span>
                    <span className="pp-project-dot" />
                    <span className="pp-project-role">{p.role}</span>
                  </div>
                  <div className="pp-project-title">{p.title}</div>
                  <div className="pp-project-subtitle">{p.subtitle}</div>
                </div>
                <div className="pp-btn-group">
                  <a href={p.liveLink} target="_blank" rel="noreferrer" className="pp-link-btn"
                    style={{ color: p.color, borderColor: p.colorBorder, background: p.colorDim }}>
                    Live ↗
                  </a>
                  <a href={p.githubLink} target="_blank" rel="noreferrer" className="pp-gh-btn">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="pp-project-body">
                <p className="pp-project-desc">{p.desc}</p>
                <div>
                  <div className="pp-highlights-label">Highlights</div>
                  <div className="pp-highlights">
                    {p.highlights.map((h) => (
                      <div key={h} className="pp-highlight-row">
                        <span className="pp-highlight-dot" style={{ background: p.color }} />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="pp-tech-label">Stack</div>
                  <div className="pp-tech-pills">
                    {p.tech.map((t) => (
                      <span key={t} className="pp-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Test credentials ── */}
              <div className="pp-creds-wrap">
                <div className="pp-creds-label">🔑 Test Credentials</div>
                <div className="pp-creds-rows">
                  {p.credentials.map((c) => (
                    <div key={c.role} className="pp-cred-row">
                      <span className="pp-cred-role">{c.role}</span>
                      <div className="pp-cred-field">
                        <span className="pp-cred-key">email</span>
                        <span className="pp-cred-val">{c.email}</span>
                        <CopyButton text={c.email} />
                      </div>
                      <span className="pp-cred-sep">·</span>
                      <div className="pp-cred-field">
                        <span className="pp-cred-key">pass</span>
                        <span className="pp-cred-val">{c.password}</span>
                        <CopyButton text={c.password} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}