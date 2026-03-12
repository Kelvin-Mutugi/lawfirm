import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer style={s.footer}>
        <style>{css}</style>

        <div style={s.container}>
          {/* Column 1 - Branding */}
          <div style={s.column}>
            <Link to="/" style={s.footerBrandLink}>
              <div style={s.brand}>
                <div style={s.brandName}>MWANGI & ASSOCIATES</div>
                <div style={s.brandTagline}>Advocates</div>
              </div>
            </Link>
            <p style={s.description}>
              Providing trusted legal solutions and strategic representation across corporate law, family law, property disputes, and litigation.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div style={s.column}>
            <h3 style={s.columnTitle}>QUICK LINKS</h3>
            <ul style={s.linkList}>
              <li>
                <Link to="/" style={s.footerLink} className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={s.footerLink} className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice" style={s.footerLink} className="footer-link">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/team" style={s.footerLink} className="footer-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" style={s.footerLink} className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div style={s.column}>
            <h3 style={s.columnTitle}>PRACTICE AREAS</h3>
            <ul style={s.linkList}>
              <li><a href="#" style={s.footerLink} className="footer-link">Corporate Law</a></li>
              <li><a href="#" style={s.footerLink} className="footer-link">Family Law</a></li>
              <li><a href="#" style={s.footerLink} className="footer-link">Property Disputes</a></li>
              <li><a href="#" style={s.footerLink} className="footer-link">Litigation</a></li>
              <li><a href="#" style={s.footerLink} className="footer-link">Consultancy</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div style={s.column}>
            <h3 style={s.columnTitle}>CONTACT INFO</h3>
            <div style={s.contactInfo}>
              <div style={s.contactItem}>
                <span style={s.contactLabel}>Phone</span>
                <a href="tel:+254712345678" style={s.contactValue}>
                  +254 (0) 712 345 678
                </a>
              </div>
              <div style={s.contactItem}>
                <span style={s.contactLabel}>Email</span>
                <a href="mailto:info@mwangiassociates.co.ke" style={s.contactValue}>
                  info@mwangiassociates.co.ke
                </a>
              </div>
              <div style={s.contactItem}>
                <span style={s.contactLabel}>Location</span>
                <span style={s.contactValue}>
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={s.divider} />

        {/* Bottom Section */}
        <div style={s.bottom}>
          <div style={s.bottomLeft}>
            <p style={s.copyright}>
              © {currentYear} Mwangi & Associates Advocates. All rights reserved.
            </p>
          </div>
          
          <div style={s.socialLinks}>
            <a href="#" style={s.socialLink} className="social-link" title="LinkedIn">in</a>
            <a href="#" style={s.socialLink} className="social-link" title="Twitter">𝕏</a>
            <a href="#" style={s.socialLink} className="social-link" title="Facebook">f</a>
          </div>

          <div style={s.bottomRight}>
            <a href="#" style={s.legalLink}>Privacy Policy</a>
            <span style={s.separator}>•</span>
            <a href="#" style={s.legalLink}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

const s = {
  footer: {
    background: "#111111",
    color: "#ffffff",
    padding: "60px 0 20px",
    fontFamily: "'Trebuchet MS', sans-serif",
    borderTop: "1px solid #222222",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "40px",
    marginBottom: "40px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  footerBrandLink: {
    textDecoration: "none",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  brandName: {
    fontSize: "14px",
    fontWeight: "900",
    letterSpacing: "0.15em",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  brandTagline: {
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    color: "#1b9e9e",
    textTransform: "uppercase",
  },
  description: {
    fontSize: "13px",
    color: "#cccccc",
    lineHeight: 1.6,
    margin: 0,
  },
  columnTitle: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#ffffff",
    textTransform: "uppercase",
    margin: 0,
    marginBottom: "8px",
  },
  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerLink: {
    fontSize: "13px",
    color: "#cccccc",
    textDecoration: "none",
    transition: "color 0.25s ease",
    cursor: "pointer",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  contactItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  contactLabel: {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    color: "#1b9e9e",
    textTransform: "uppercase",
  },
  contactValue: {
    fontSize: "13px",
    color: "#cccccc",
    textDecoration: "none",
    transition: "color 0.25s ease",
  },
  divider: {
    height: "1px",
    background: "#222222",
    margin: "0 20px",
    marginBottom: "24px",
  },
  bottom: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  bottomLeft: {
    flex: 1,
    minWidth: "200px",
  },
  copyright: {
    fontSize: "12px",
    color: "#888888",
    margin: 0,
    letterSpacing: "0.05em",
  },
  socialLinks: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  socialLink: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #333333",
    color: "#1b9e9e",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.25s ease",
    borderRadius: "2px",
  },
  bottomRight: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  legalLink: {
    fontSize: "12px",
    color: "#888888",
    textDecoration: "none",
    transition: "color 0.25s ease",
    cursor: "pointer",
  },
  separator: {
    color: "#444444",
  },
};

const css = `
  .footer-link:hover {
    color: #1b9e9e !important;
  }

  .social-link:hover {
    background: #1b9e9e !important;
    border-color: #1b9e9e !important;
    color: #111111 !important;
    transform: translateY(-2px);
  }

  a[href^="mailto:"],
  a[href^="tel:"] {
    color: #1b9e9e;
  }

  a[href^="mailto:"]:hover,
  a[href^="tel:"]:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    footer {
      padding: 40px 0 20px !important;
    }
    
    footer > div:nth-child(2) {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
    }

    footer > div:nth-child(4) {
      flex-direction: column !important;
      align-items: flex-start !important;
    }

    footer > div:nth-child(4) > div:nth-child(1) {
      width: 100% !important;
    }

    footer > div:nth-child(4) > div:nth-child(3) {
      width: 100% !important;
    }
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
`;
