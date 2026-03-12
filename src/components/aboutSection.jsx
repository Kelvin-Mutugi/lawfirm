import { useState, useEffect, useRef } from "react";
import heroVid2 from "../images/heroVid2.mp4";

const STATS = [
  { num: "20+", label: "YEARS OF PRACTICE" },
  { num: "1,400+", label: "CASES RESOLVED" },
  { num: "98%", label: "CLIENT SATISFACTION" },
  { num: "4", label: "LEGAL SPECIALIZATIONS" },
];

const PILLARS = [
  { icon: "I", title: "INTEGRITY", desc: "We uphold the highest ethical standards in every case we handle." },
  { icon: "E", title: "EXPERTISE", desc: "Deep knowledge of Kenyan law across multiple legal disciplines." },
  { icon: "D", title: "DEDICATION", desc: "Committed to achieving the best possible outcomes for our clients." },
];

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={s.root} data-about-root>
      <style>{css}</style>
       
      {/* LEFT PANEL — image/visual side */}
      <div style={s.left} data-about-left>

        {/* Teal triangle top-left */}
        <div style={{
          ...s.triTopLeft,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.7s ease 0.2s",
        }} />

        {/* Main photo block with diagonal right edge */}
        <div style={{
          ...s.photoWrap,
          clipPath: loaded
            ? "polygon(0% 0%, 88% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          opacity: loaded ? 1 : 0,
          transition: "clip-path 1s ease 0.2s, opacity 0.8s ease 0.2s",
        }}>
          <div style={s.photoBg}>
            <video style={s.video} src={heroVid2} autoPlay loop muted />
            <div style={s.photoOverlay} />
          </div>

          {/* Floating experience badge */}
          <div style={{
            ...s.badge,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.7)",
            transition: "opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s",
          }}>
            <div style={s.badgeNum}>20+</div>
            <div style={s.badgeLabel}>YEARS OF<br />EXPERIENCE</div>
          </div>
        </div>

        {/* Geometric shapes bottom */}
        <div style={s.shapesRow} data-about-shapes>
          {[
            { ...s.triYellow, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 1s, transform 0.6s ease 1s" },
            { ...s.triTeal, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 1.1s, transform 0.6s ease 1.1s" },
          ].map((style, i) => (
            <div key={i} style={style} />
          ))}
          <div style={{
            ...s.triStripe,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 1.2s, transform 0.6s ease 1.2s",
          }}>
            {[...Array(6)].map((_, i) => <div key={i} style={{ ...s.stripe, top: `${i * 16}%` }} />)}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — content */}
      <div style={s.right} data-about-right>

        {/* Teal triangle top-right */}
        <div style={{
          ...s.triTopRight,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.7s ease 0.4s",
        }} />

        <div style={s.contentInner}>

          {/* Label */}
          <div style={{
            ...s.label,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}>
            WHO WE ARE
          </div>

          {/* Title */}
          <h2 style={{
            ...s.title,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}>
            ABOUT OUR<br />LAW FIRM
          </h2>

          {/* HR */}
          <div style={s.hrWrap}>
            <div style={{
              ...s.hr,
              width: loaded ? "240px" : "0px",
              transition: "width 1s ease 0.6s",
            }} />
          </div>

          {/* Description */}
          <p style={{
            ...s.desc,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
          }}>
            Mwangi & Associates Advocates is a full-service law firm dedicated
            to delivering exceptional legal services with integrity and
            professionalism. Our team of experienced advocates works closely
            with clients to provide reliable legal guidance and strong
            representation.
          </p>

          <p style={{
            ...s.desc,
            marginTop: 14,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.85s, transform 0.8s ease 0.85s",
          }}>
            With years of experience in Kenyan law, we understand the
            complexities of legal challenges and work tirelessly to achieve
            the best possible outcomes for our clients.
          </p>

          {/* HR */}
          <div style={{ ...s.hrWrap, marginTop: 24 }}>
            <div style={{
              ...s.hr,
              width: loaded ? "240px" : "0px",
              transition: "width 1s ease 0.95s",
            }} />
          </div>

          {/* Pillars */}
          <div style={s.pillars}>
            {PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  ...s.pillarItem,
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s ease ${1 + i * 0.15}s, transform 0.7s ease ${1 + i * 0.15}s`,
                }}
                className="pillar-item"
              >
                <div style={s.pillarIcon}>{p.icon}</div>
                <div>
                  <div style={s.pillarTitle}>{p.title}</div>
                  <div style={s.pillarDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            ...s.ctaRow,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 1.4s, transform 0.7s ease 1.4s",
          }}>
            <button style={s.btnBlack} className="btn-black" onClick={() => window.open('/practice', '_blank')}>LEARN MORE</button>
            <button style={s.btnOutline} className="btn-outline" onClick={() => window.open('/team', '_blank')}>OUR TEAM</button>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} style={s.statsBar} data-stats-bar>
          {STATS.map((st, i) => (
            <div
              key={i}
              data-stat-item
              style={{
                ...s.statItem,
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                borderRight: i < STATS.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
              }}
            >
              <span style={s.statNum}>{st.num}</span>
              <span style={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const s = {
  root: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#ffffff",
    display: "flex",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    overflow: "hidden",
    paddingTop: "50px",
  },
  devider: {
    background: "#1b9e9e",
    height: "50px",
    width: "100vw",
  },
  left: {
    flex: "0 0 46%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  triTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTop: "140px solid #9ee8e4",
    borderRight: "140px solid transparent",
    zIndex: 3,
  },
  photoWrap: {
    position: "absolute",
    top: "6%",
    left: 0,
    right: 0,
    bottom: "18%",
    overflow: "hidden",
    zIndex: 1,
  },
  photoBg: {
    width: "100%",
    height: "100%",
    background: "#c8bfaf",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
  photoOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(180,160,120,0.25)",
  },
  scene: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "14%",
    gap: 16,
  },
  sceneDesk: {
    position: "absolute",
    bottom: "18%",
    left: "5%",
    right: "5%",
    height: "2px",
    background: "rgba(80,60,30,0.3)",
  },
  sceneScales: {
    fontSize: 72,
    opacity: 0.45,
    position: "absolute",
    bottom: "20%",
    left: "12%",
  },
  sceneBooks: {
    display: "flex",
    alignItems: "flex-end",
    gap: 3,
    position: "absolute",
    bottom: "20%",
    right: "14%",
  },
  book: {
    width: 14,
    borderRadius: "1px 1px 0 0",
    opacity: 0.7,
  },
  sceneDocs: {
    position: "absolute",
    bottom: "22%",
    left: "42%",
    width: 70,
    height: 90,
  },
  doc1: { position: "absolute", width: 66, height: 84, background: "rgba(255,255,255,0.65)", top: 0, left: 6, transform: "rotate(4deg)" },
  doc2: { position: "absolute", width: 66, height: 84, background: "rgba(255,255,255,0.8)", top: 4, left: 3, transform: "rotate(-2deg)" },
  doc3: { position: "absolute", width: 66, height: 84, background: "rgba(255,255,255,0.95)", top: 8, left: 0 },
  badge: {
    position: "absolute",
    bottom: 24,
    right: 20,
    background: "#1b9e9e",
    color: "#fff",
    padding: "16px 20px",
    textAlign: "center",
    zIndex: 4,
  },
  badgeNum: {
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 1,
    fontFamily: "'Georgia', serif",
  },
  badgeLabel: {
    fontSize: 9,
    letterSpacing: "0.15em",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginTop: 4,
    lineHeight: 1.4,
    opacity: 0.9,
  },
  shapesRow: {
    position: "absolute",
    bottom: 0,
    left: 32,
    display: "flex",
    alignItems: "flex-end",
    gap: 4,
    zIndex: 2,
  },
  triYellow: {
    width: 0, height: 0,
    borderLeft: "40px solid transparent",
    borderRight: "40px solid transparent",
    borderBottom: "64px solid #e8b83a",
  },
  triTeal: {
    width: 0, height: 0,
    borderLeft: "48px solid transparent",
    borderRight: "48px solid transparent",
    borderBottom: "86px solid #1b7f7f",
  },
  triStripe: {
    width: 64,
    height: 80,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    background: "#1b9e9e",
    position: "relative",
    overflow: "hidden",
    opacity: 0.65,
  },
  stripe: {
    position: "absolute",
    left: 0, right: 0,
    height: "10%",
    background: "rgba(255,255,255,0.35)",
  },
  right: {
    flex: "0 0 54%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  triTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0, height: 0,
    borderTop: "130px solid #9ee8e4",
    borderLeft: "130px solid transparent",
    zIndex: 3,
  },
  contentInner: {
    padding: "64px 56px 32px 52px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    fontSize: "10px",
    letterSpacing: "0.3em",
    color: "#1b9e9e",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: "700",
    marginBottom: 10,
  },
  title: {
    fontSize: "clamp(36px, 4.5vw, 64px)",
    fontWeight: "900",
    lineHeight: 1.05,
    color: "#111111",
    letterSpacing: "-0.01em",
    marginBottom: 0,
    fontFamily: "'Georgia', serif",
  },
  hrWrap: { marginBottom: 20 },
  hr: {
    height: "2px",
    background: "#111111",
  },
  desc: {
    fontSize: "13px",
    color: "#444444",
    lineHeight: 1.8,
    fontFamily: "'Trebuchet MS', sans-serif",
    margin: 0,
    maxWidth: 480,
  },
  pillars: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginTop: 20,
    marginBottom: 28,
  },
  pillarItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: "10px 14px",
    borderLeft: "3px solid #1b9e9e",
    background: "#f9f9f9",
    transition: "background 0.25s ease, transform 0.25s ease",
  },
  pillarIcon: {
    fontSize: 22,
    lineHeight: 1,
    marginTop: 2,
  },
  pillarTitle: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#111",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: 3,
  },
  pillarDesc: {
    fontSize: "12px",
    color: "#555",
    fontFamily: "'Trebuchet MS', sans-serif",
    lineHeight: 1.6,
  },
  ctaRow: {
    display: "flex",
    gap: 14,
  },
  btnBlack: {
    background: "#111111",
    color: "#ffffff",
    border: "none",
    padding: "13px 26px",
    fontSize: "11px",
    letterSpacing: "0.15em",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  btnOutline: {
    background: "transparent",
    color: "#111111",
    border: "2px solid #111111",
    padding: "11px 24px",
    fontSize: "11px",
    letterSpacing: "0.15em",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  statsBar: {
    display: "flex",
    background: "#111111",
    color: "#fff",
  },
  statItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 8px",
    gap: 4,
  },
  statNum: {
    fontSize: "clamp(20px, 2.5vw, 30px)",
    fontWeight: "900",
    color: "#1b9e9e",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.02em",
  },
  statLabel: {
    fontSize: "8px",
    letterSpacing: "0.18em",
    color: "#aaaaaa",
    fontFamily: "'Trebuchet MS', sans-serif",
    textAlign: "center",
  },
};

const css = `
  @media (max-width: 1024px) {
    [data-about-root] {
      flex-direction: column;
    }
    [data-about-left] {
      flex: 0 0 100% !important;
    }
    [data-about-right] {
      flex: 0 0 100% !important;
      min-height: 300px;
    }
  }

  @media (max-width: 768px) {
    [data-about-root] {
      flex-direction: column;
    }
    [data-about-left] {
      flex: 0 0 100% !important;
      padding: 30px 16px !important;
    }
    [data-about-right] {
      flex: 0 0 100% !important;
      min-height: 280px;
    }
    [data-about-shapes] {
      display: none !important;
    }
    [data-stats-bar] {
      flex-direction: column !important;
    }
    [data-stat-item] {
      border-right: none !important;
      border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    }
  }

  @media (max-width: 480px) {
    [data-about-left] {
      padding: 20px 12px !important;
    }
  }

  .btn-black:hover { background: #1b9e9e !important; transform: translateY(-2px); }
  .btn-outline:hover { background: #111 !important; color: #fff !important; transform: translateY(-2px); }
  .pillar-item:hover { background: #f0fafa !important; transform: translateX(4px); border-left-color: #e8b83a !important; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;