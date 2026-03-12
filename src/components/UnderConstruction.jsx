import { useState, useEffect } from "react";

export default function UnderConstruction({ title = "Coming Soon", description = "This page is under construction" }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* Left Section - Text Content */}
      <div style={s.left}>
        <div style={{ ...s.mainContent, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
          <h1 style={s.title}>{title}</h1>
          
          <p style={s.description}>
            {description}
          </p>

          <div style={{ ...s.divider, width: loaded ? "80px" : "0px", transition: "width 1s ease 0.4s" }} />

          <p style={s.message}>
            We're working hard to bring you this section. Check back soon for updates and new features.
          </p>

          <div style={{ ...s.ctaSection, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s" }}>
            <a href="/" style={s.backButton} className="back-btn">
              ← BACK TO HOME
            </a>
          </div>
        </div>

        {/* Geometric shapes bottom-left */}
        <div style={s.shapesRow}>
          <div style={{ ...s.triYellow, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1s, transform 0.7s ease 1s" }} />
          <div style={{ ...s.triTeal, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s" }} />
          <div style={{ ...s.triTealStripe, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 1.2s, transform 0.7s ease 1.2s" }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{ ...s.stripe, top: `${i * 14}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div style={s.right}>
        {/* Teal triangle top */}
        <div style={{ ...s.triTopRight, opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.4s" }} />

        {/* Construction illustration */}
        <div style={{ ...s.illustrationWrap, opacity: loaded ? 1 : 0, clipPath: loaded ? "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", transition: "clip-path 1s ease 0.3s, opacity 0.8s ease 0.3s" }}>
          <div style={s.illustrationBg}>
            <div style={s.illustrationOverlay} />
            <div style={s.illustration}>
              {/* Under construction icon */}
              <div style={s.constructionIcon}>
                <div style={s.toolBox}>
                  <div style={s.wrench}>🔧</div>
                  <div style={s.hammer}>🔨</div>
                  <div style={s.gear}>⚙</div>
                </div>
              </div>

              {/* Floating text */}
              <div style={{ ...s.floatingText, animation: "float 3s ease-in-out infinite" }}>
                PAGE UNDER CONSTRUCTION
              </div>
            </div>
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
    paddingTop: "70px",
  },
  left: {
    flex: "0 0 52%",
    padding: "80px 52px 40px 56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },
  mainContent: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "clamp(42px, 5vw, 72px)",
    fontWeight: "900",
    lineHeight: 1.2,
    color: "#111111",
    letterSpacing: "-0.02em",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
  },
  description: {
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#1b9e9e",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: "24px",
    textTransform: "uppercase",
  },
  divider: {
    height: "2px",
    background: "#1b9e9e",
    marginBottom: "24px",
    transition: "width 1s ease",
  },
  message: {
    fontSize: "15px",
    color: "#555555",
    lineHeight: 1.8,
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: "32px",
    maxWidth: "450px",
  },
  ctaSection: {
    display: "flex",
    gap: "16px",
  },
  backButton: {
    background: "#111111",
    color: "#ffffff",
    border: "none",
    padding: "14px 28px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    fontFamily: "'Trebuchet MS', sans-serif",
    cursor: "pointer",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "all 0.25s ease",
    display: "inline-block",
    borderRadius: "2px",
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
  illustrationWrap: {
    position: "absolute",
    inset: 0,
    top: "8%",
    overflow: "hidden",
    zIndex: 1,
  },
  illustrationBg: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
    position: "relative",
    overflow: "hidden",
  },
  illustrationOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(180,160,120,0.1) 0%, rgba(100,90,70,0.1) 100%)",
  },
  illustration: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "40px",
  },
  constructionIcon: {
    fontSize: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toolBox: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  wrench: {
    fontSize: "60px",
    animation: "spin 4s linear infinite",
  },
  hammer: {
    fontSize: "70px",
    animation: "bounce 2s ease-in-out infinite",
  },
  gear: {
    fontSize: "65px",
    animation: "spin 6s linear infinite reverse",
  },
  floatingText: {
    fontSize: "16px",
    fontWeight: "700",
    letterSpacing: "0.2em",
    color: "#1b9e9e",
    fontFamily: "'Trebuchet MS', sans-serif",
    textAlign: "center",
    opacity: 0.8,
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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .back-btn:hover {
    background: #1b9e9e !important;
    color: #ffffff !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(27,158,158,0.3);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
`;
