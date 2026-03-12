import { useState, useEffect } from "react";
import heroVid from "../images/heroVid.mp4";

const WORDS = ["Individuals", "Businesses", "Families", "Futures"];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeWord, setFadeWord] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeWord(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setFadeWord(true);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* LEFT PANEL — white content */}
      <div style={s.left}>
        {/* Big headline */}
        <div style={{ ...s.bigTitle, ...(loaded ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(40px)" }), transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s" }}>
          MWANGI &<br />ASSOCIATES
        </div>

        {/* Tagline with cycling word */}
        <div style={{ ...s.tagline, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
          TRUSTED LEGAL SOLUTIONS FOR{" "}
          <span style={{ ...s.cycleWord, opacity: fadeWord ? 1 : 0, transform: fadeWord ? "translateY(0)" : "translateY(8px)" }}>
            {WORDS[wordIndex]}
          </span>
        </div>

        {/* Divider */}
        <div style={{ ...s.hrWrap, opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          <div style={{ ...s.hr, width: loaded ? "260px" : "0px", transition: "width 1s ease 0.5s" }} />
        </div>

        {/* Sub section */}
        <div style={{ ...s.subSection, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s" }}>
          <p style={s.subTitle}>PROVIDING PROFESSIONAL REPRESENTATION</p>
          <p style={s.subText}>
            At Mwangi & Associates Advocates, we are committed to protecting your rights and delivering strategic legal solutions tailored to your needs — in corporate law, family law, property disputes, and litigation.
          </p>
        </div>

        {/* Secondary divider */}
        <div style={{ ...s.hrWrap, opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.8s" }}>
          <div style={{ ...s.hr, width: loaded ? "260px" : "0px", transition: "width 1s ease 0.8s" }} />
        </div>

        {/* CTA Buttons */}
        <div style={{ ...s.ctaRow, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.8s ease 1s, transform 0.8s ease 1s" }}>
          <button style={s.btnBlack} className="btn-black">
            BOOK A CONSULTATION
          </button>
          <button style={s.btnOutline} className="btn-outline">
            CONTACT OUR LAWYERS
          </button>
        </div>

        {/* Geometric shapes bottom-left */}
        <div style={s.shapesRow}>
          <div style={{ ...s.triYellow, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s" }} />
          <div style={{ ...s.triTeal, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1.2s, transform 0.7s ease 1.2s" }} />
          <div style={{ ...s.triTealStripe, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1.3s, transform 0.7s ease 1.3s" }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{ ...s.stripe, top: `${i * 14}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — image with diagonal clip + teal triangle */}
      <div style={s.right}>
        {/* Teal triangle top */}
        <div style={{ ...s.triTopRight, opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.4s" }} />

        {/* Photo panel with diagonal left edge */}
        <div style={{ ...s.photoWrap, opacity: loaded ? 1 : 0, clipPath: loaded ? "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", transition: "clip-path 1s ease 0.3s, opacity 0.8s ease 0.3s" }}>
          <div style={s.photoBg}>
            <video style={s.video} src={heroVid} autoPlay loop muted />
            <div style={s.photoOverlay} />
          </div>
        </div>

        {/* Small teal triangle lower */}
        <div style={{ ...s.triBottomRight, opacity: loaded ? 1 : 0, transition: "opacity 0.9s ease 0.9s" }} />
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
  },
  left: {
    flex: "0 0 52%",
    padding: "60px 52px 40px 56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },
  bigTitle: {
    fontSize: "clamp(48px, 6vw, 82px)",
    fontWeight: "900",
    lineHeight: 1.0,
    color: "#111111",
    letterSpacing: "-0.02em",
    marginBottom: 14,
    fontFamily: "'Georgia', serif",
  },
  tagline: {
    fontSize: "clamp(11px, 1.3vw, 14px)",
    fontWeight: "700",
    letterSpacing: "0.18em",
    color: "#111111",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: 18,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0 6px",
  },
  cycleWord: {
    color: "#1b9e9e",
    display: "inline-block",
    transition: "opacity 0.35s ease, transform 0.35s ease",
    borderBottom: "2px solid #1b9e9e",
  },
  hrWrap: { marginBottom: 20 },
  hr: {
    height: "2px",
    background: "#111111",
    transition: "width 1s ease",
  },
  subSection: { marginBottom: 20 },
  subTitle: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#111",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: 10,
    marginTop: 0,
  },
  subText: {
    fontSize: "13px",
    color: "#444444",
    lineHeight: 1.75,
    fontFamily: "'Trebuchet MS', sans-serif",
    margin: 0,
    maxWidth: 420,
  },
  ctaRow: {
    display: "flex",
    gap: 14,
    marginTop: 8,
    marginBottom: 40,
    flexWrap: "wrap",
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
    transition: "all 0.25s ease",
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
    transition: "all 0.25s ease",
    textTransform: "uppercase",
  },
  shapesRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 0,
    position: "absolute",
    bottom: 0,
    left: 40,
  },
  triYellow: {
    width: 0,
    height: 0,
    borderLeft: "44px solid transparent",
    borderRight: "44px solid transparent",
    borderBottom: "72px solid #e8b83a",
  },
  triTeal: {
    width: 0,
    height: 0,
    borderLeft: "52px solid transparent",
    borderRight: "52px solid transparent",
    borderBottom: "96px solid #1b7f7f",
    marginLeft: 4,
  },
  triTealStripe: {
    width: 72,
    height: 90,
    position: "relative",
    overflow: "hidden",
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    background: "#1b9e9e",
    marginLeft: 4,
    opacity: 0.6,
  },
  stripe: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "10%",
    background: "rgba(255,255,255,0.35)",
  },
  right: {
    flex: "0 0 48%",
    position: "relative",
    overflow: "hidden",
  },
  triTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderTop: "160px solid #9ee8e4",
    borderLeft: "160px solid transparent",
    zIndex: 3,
  },
  photoWrap: {
    position: "absolute",
    inset: 0,
    top: "8%",
    overflow: "hidden",
    zIndex: 1,
  },
  photoBg: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
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
    background:
      "linear-gradient(135deg, rgba(180,160,120,0.3) 0%, rgba(100,90,70,0.2) 100%)",
    zIndex: 2,
  },
  triBottomRight: {
    position: "absolute",
    bottom: 0,
    right: "10%",
    width: 0,
    height: 0,
    borderBottom: "100px solid #9ee8e4",
    borderLeft: "100px solid transparent",
    zIndex: 4,
  },
};

const css = `
  .btn-black:hover {
    background: #1b9e9e !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(27,158,158,0.3);
  }
  .btn-outline:hover {
    background: #111 !important;
    color: #fff !important;
    transform: translateY(-2px);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;