import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav style={s.navbar}>
        <div style={s.container}>
          {/* Logo */}
          <Link to="/" style={s.logoLink}>
            <div style={s.logo}>
              <span style={s.logoText}>MWANGI & ASSOCIATES</span>
              <span style={s.logoSubtext}>Advocates</span>
            </div>
          </Link>

          {/* Hamburger menu */}
          <button
            style={s.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
          >
            <span style={{ ...s.hamburgerLine, ...(mobileMenuOpen && s.hamburgerLineActive1) }} />
            <span style={{ ...s.hamburgerLine, ...(mobileMenuOpen && s.hamburgerLineActive2) }} />
            <span style={{ ...s.hamburgerLine, ...(mobileMenuOpen && s.hamburgerLineActive3) }} />
          </button>

          {/* Desktop Navigation */}
          <div style={s.desktopNav}>
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.href} style={s.navLink} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button style={s.ctaButton} className="cta-btn">
            CONSULTATION
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={s.mobileMenu}>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                style={s.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button style={s.mobileCTAButton} className="mobile-cta">
              CONSULTATION
            </button>
          </div>
        )}
      </nav>
      <style>{css}</style>
    </>
  );
}

const s = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    zIndex: 1000,
    transition: "all 0.3s ease",
  },
  container: {
    maxWidth: "100vw",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    height: "70px",
    paddingLeft: "56px",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    cursor: "pointer",
  },
  logoLink: {
    textDecoration: "none",
  },
  logoText: {
    fontSize: "16px",
    fontWeight: "900",
    letterSpacing: "0.15em",
    color: "#111111",
    fontFamily: "'Georgia', serif",
  },
  logoSubtext: {
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    color: "#1b9e9e",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  desktopNav: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "32px",
  },
  navLink: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    color: "#444444",
    textDecoration: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    transition: "color 0.25s ease",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  ctaButton: {
    background: "#1b9e9e",
    color: "#ffffff",
    border: "none",
    padding: "10px 22px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.12em",
    fontFamily: "'Trebuchet MS', sans-serif",
    cursor: "pointer",
    transition: "all 0.25s ease",
    textTransform: "uppercase",
    borderRadius: "2px",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    background: "none",
    border: "none",
    cursor: "pointer",
    gap: "5px",
    padding: "8px",
    marginRight: "16px",
  },
  hamburgerLine: {
    width: "24px",
    height: "2px",
    background: "#111111",
    transition: "all 0.3s ease",
    display: "block",
  },
  hamburgerLineActive1: {
    transform: "rotate(45deg) translateY(12px)",
  },
  hamburgerLineActive2: {
    opacity: 0,
  },
  hamburgerLineActive3: {
    transform: "rotate(-45deg) translateY(-12px)",
  },
  mobileMenu: {
    display: "none",
    flexDirection: "column",
    gap: "0",
    padding: "16px 20px",
    background: "#ffffff",
    borderTop: "1px solid #e5e5e5",
  },
  mobileNavLink: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    color: "#444444",
    textDecoration: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    padding: "12px 0",
    textTransform: "uppercase",
    borderBottom: "1px solid #f0f0f0",
  },
  mobileCTAButton: {
    background: "#1b9e9e",
    color: "#ffffff",
    border: "none",
    padding: "12px 20px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.12em",
    fontFamily: "'Trebuchet MS', sans-serif",
    cursor: "pointer",
    marginTop: "12px",
    textTransform: "uppercase",
    borderRadius: "2px",
    transition: "all 0.25s ease",
  },
};

const css = `
  @media (max-width: 768px) {
    nav > div:nth-child(1) {
      padding: 0 12px !important;
    }
    nav > div:nth-child(1) > div:nth-child(2) {
      display: flex !important;
      order: 2;
    }
    nav > div:nth-child(1) > div:nth-child(3) {
      display: none !important;
    }
    nav > div:nth-child(1) > button:nth-child(4) {
      display: none !important;
    }
    nav > div:nth-child(2) {
      display: flex !important;
      max-height: 500px;
      animation: slideDown 0.3s ease;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-link:hover {
    color: #1b9e9e !important;
  }

  .cta-btn:hover {
    background: #1b7f7f !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(27,158,158,0.25);
  }

  .mobile-cta:hover {
    background: #1b7f7f !important;
    transform: translateY(-2px);
  }

  .hamburger-btn:focus {
    outline: none;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
`;
