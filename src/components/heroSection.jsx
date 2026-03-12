import { useState, useEffect, useRef } from "react";

const WORDS = ["Individuals", "Businesses", "Families", "Futures"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeWord, setFadeWord] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeWord(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setFadeWord(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={styles.wrapper}>
      <style>{css}</style>

      {/* Simulated video background using animated CSS */}
      <div style={styles.videoBg}>
        <div style={styles.videoOverlay} />
        <div style={styles.scanlines} />
        <div
          style={{
            ...styles.parallaxLayer,
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          }}
        />
      </div>

      {/* Decorative vertical lines */}
      <div style={styles.vertLines}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ ...styles.vertLine, animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      {/* Corner ornaments */}
      <div style={{ ...styles.corner, top: 28, left: 28 }} className="corner-tl" />
      <div style={{ ...styles.corner, top: 28, right: 28, transform: "scaleX(-1)" }} className="corner-tl" />
      <div style={{ ...styles.corner, bottom: 28, left: 28, transform: "scaleY(-1)" }} className="corner-tl" />
      <div style={{ ...styles.corner, bottom: 28, right: 28, transform: "scale(-1,-1)" }} className="corner-tl" />

      {/* Firm name badge */}
      <div
        style={{
          ...styles.badge,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-20px)",
        }}
        className="badge-anim"
      >
        <span style={styles.badgeDot} />
        MWANGI & ASSOCIATES ADVOCATES
        <span style={styles.badgeDot} />
      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Headline */}
        <h1
          style={{
            ...styles.headline,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
        >
          Trusted Legal Solutions
          <br />
          <span style={styles.headlineFor}>for </span>
          <span
            style={{
              ...styles.animWord,
              opacity: fadeWord ? 1 : 0,
              transform: fadeWord ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {WORDS[wordIndex]}
          </span>
        </h1>

        {/* Ruled divider */}
        <div
          style={{
            ...styles.divider,
            width: loaded ? "340px" : "0px",
            transition: "width 1.1s ease 0.8s",
          }}
        >
          <span style={styles.dividerDiamond}>◆</span>
        </div>

        {/* Subheadline */}
        <p
          style={{
            ...styles.sub,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 0.9s, transform 0.9s ease 0.9s",
          }}
        >
          Providing professional legal representation in corporate law,
          family law, property disputes, and litigation.
        </p>

        {/* Description */}
        <p
          style={{
            ...styles.desc,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 1.1s, transform 0.9s ease 1.1s",
          }}
        >
          At Mwangi & Associates Advocates, we are committed to protecting your
          rights and delivering strategic legal solutions tailored to your needs.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            ...styles.ctaRow,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 1.3s, transform 0.9s ease 1.3s",
          }}
        >
          <button style={styles.btnPrimary} className="btn-primary">
            <span style={styles.btnInner}>Book a Consultation</span>
          </button>
          <button style={styles.btnSecondary} className="btn-secondary">
            <span style={styles.btnInner}>Contact Our Lawyers</span>
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            ...styles.statsRow,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.9s ease 1.6s",
          }}
        >
          {[
            { num: "20+", label: "Years of Practice" },
            { num: "1,400+", label: "Cases Resolved" },
            { num: "4", label: "Legal Specializations" },
          ].map((s, i) => (
            <div key={i} style={styles.statItem}>
              <span style={styles.statNum}>{s.num}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          ...styles.scrollHint,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 2s",
        }}
      >
        <div style={styles.scrollLine} className="scroll-line" />
        <span style={styles.scrollText}>SCROLL</span>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#0a0a0a",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#e8e0d0",
  },
  videoBg: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
    background: `
      radial-radial(ellipse at 20% 50%, #1a1208 0%, transparent 60%),
      #0a0a0a
    `,
  },
  videoOverlay: {
    position: "absolute",
    inset: 0,
    background: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.08) 2px,
        rgba(0,0,0,0.08) 4px
      )
    `,
    zIndex: 2,
    animation: "panBg 30s linear infinite",
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        to bottom,
        rgba(180,140,60,0.03) 0%,
        transparent 50%,
        rgba(180,140,60,0.03) 100%
      )
    `,
    zIndex: 1,
    animation: "scanline 8s ease-in-out infinite",
  },
  parallaxLayer: {
    position: "absolute",
    inset: "-5%",
    backgroundImage: `
      radial-gradient(ellipse 80% 60% at 30% 40%, rgba(160,120,40,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 70% 60%, rgba(100,80,30,0.08) 0%, transparent 50%)
    `,
    transition: "transform 0.15s ease-out",
    zIndex: 1,
    animation: "slowDrift 20s ease-in-out infinite",
  },
  vertLines: {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "stretch",
    zIndex: 1,
    pointerEvents: "none",
  },
  vertLine: {
    width: "1px",
    background: "rgba(180,140,60,0.06)",
    animation: "fadeInLine 1.5s ease forwards",
    opacity: 0,
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderTop: "2px solid rgba(180,140,60,0.5)",
    borderLeft: "2px solid rgba(180,140,60,0.5)",
    zIndex: 10,
    animation: "cornerAppear 1s ease 0.2s forwards",
    opacity: 0,
  },
  badge: {
    position: "absolute",
    top: 36,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "10px",
    letterSpacing: "0.35em",
    color: "#b8962e",
    display: "flex",
    alignItems: "center",
    gap: 10,
    zIndex: 10,
    transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
    whiteSpace: "nowrap",
  },
  badgeDot: {
    display: "inline-block",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "#b8962e",
  },
  content: {
    position: "relative",
    zIndex: 5,
    textAlign: "center",
    maxWidth: 820,
    padding: "0 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  headline: {
    fontSize: "clamp(36px, 5.5vw, 68px)",
    fontWeight: "400",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "#f0e8d8",
    marginBottom: 0,
    marginTop: 0,
  },
  headlineFor: {
    color: "#9a8a6a",
    fontStyle: "italic",
  },
  animWord: {
    color: "#b8962e",
    display: "inline-block",
    fontStyle: "italic",
    transition: "opacity 0.4s ease, transform 0.4s ease",
    borderBottom: "1px solid rgba(184,150,46,0.4)",
    paddingBottom: 2,
  },
  divider: {
    height: "1px",
    background: "rgba(184,150,46,0.35)",
    margin: "28px auto",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  dividerDiamond: {
    fontSize: 10,
    color: "#b8962e",
    background: "#0a0a0a",
    padding: "0 10px",
    position: "absolute",
    letterSpacing: 4,
  },
  sub: {
    fontSize: "clamp(14px, 1.8vw, 17px)",
    color: "#b0a898",
    letterSpacing: "0.04em",
    lineHeight: 1.7,
    maxWidth: 620,
    margin: "0 auto 16px",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: 300,
  },
  desc: {
    fontSize: "clamp(13px, 1.5vw, 15px)",
    color: "#7a7060",
    letterSpacing: "0.02em",
    lineHeight: 1.8,
    maxWidth: 540,
    margin: "0 auto 36px",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  ctaRow: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 48,
  },
  btnPrimary: {
    background: "#b8962e",
    border: "none",
    color: "#0a0a0a",
    padding: "14px 34px",
    fontSize: "12px",
    letterSpacing: "0.2em",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: 700,
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
  },
  btnSecondary: {
    background: "transparent",
    border: "1px solid rgba(184,150,46,0.5)",
    color: "#c8b06e",
    padding: "14px 34px",
    fontSize: "12px",
    letterSpacing: "0.2em",
    fontFamily: "'Trebuchet MS', sans-serif",
    fontWeight: 400,
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
  },
  btnInner: {
    position: "relative",
    zIndex: 1,
  },
  statsRow: {
    display: "flex",
    gap: 48,
    borderTop: "1px solid rgba(184,150,46,0.15)",
    paddingTop: 28,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  statNum: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 400,
    color: "#b8962e",
    letterSpacing: "0.05em",
  },
  statLabel: {
    fontSize: "10px",
    color: "#6a6050",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  scrollHint: {
    position: "absolute",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    zIndex: 10,
  },
  scrollLine: {
    width: "1px",
    height: 40,
    background: "rgba(184,150,46,0.4)",
  },
  scrollText: {
    fontSize: "9px",
    letterSpacing: "0.3em",
    color: "#5a5040",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
};

const css = `
  @keyframes panBg {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
  }
  @keyframes scanline {
    0%, 100% { opacity: 0.4; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-10px); }
  }
  @keyframes slowDrift {
    0%, 100% { transform: translate(0,0) scale(1); }
    33% { transform: translate(-1%,1%) scale(1.01); }
    66% { transform: translate(1%,-0.5%) scale(0.99); }
  }
  @keyframes fadeInLine {
    to { opacity: 1; }
  }
  @keyframes cornerAppear {
    to { opacity: 1; }
  }
  @keyframes scrollPulse {
    0%, 100% { transform: scaleY(1); transform-origin: top; }
    50% { transform: scaleY(0.4); transform-origin: top; }
  }
  .scroll-line {
    animation: scrollPulse 2s ease-in-out infinite;
  }
  .btn-primary:hover {
    background: #d4ab38 !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(184,150,46,0.3);
  }
  .btn-secondary:hover {
    background: rgba(184,150,46,0.1) !important;
    border-color: rgba(184,150,46,0.8) !important;
    color: #e8c87a !important;
    transform: translateY(-2px);
  }
  .btn-primary::after, .btn-secondary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%) skewX(-15deg);
    transition: transform 0.5s ease;
  }
  .btn-primary:hover::after, .btn-secondary:hover::after {
    transform: translateX(150%) skewX(-15deg);
  }
  .badge-anim {
    transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s !important;
  }
  * { box-sizing: border-box; }
`;