import { useState, useEffect } from "react";

const PRACTICE_AREAS = [
  "Corporate Law", "Family Law", "Property Disputes",
  "Litigation", "Employment Law", "Contract Law", "Other",
];

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function BookConsultation() {
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    date: "", message: "", consultationType: "",
  });

  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);
  const update = (f, v) => setForm(p => ({ ...p, [f]: v }));
  const handleSubmit = () => setSubmitted(true);
  const reset = () => {
    setSubmitted(false); setStep(1); setSelectedArea(""); setSelectedSlot("");
    setForm({ firstName:"", lastName:"", email:"", phone:"", date:"", message:"", consultationType:"" });
  };

  return (
    <div style={{ ...s.root, fontFamily: "'Georgia','Times New Roman',serif" }}>
      <style>{css}</style>

      {/* Corner triangles */}
      <div style={{ ...s.triTR, opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }} />
      <div style={{ ...s.triTL, opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }} />

      {/* Header */}
      <div style={{
        ...s.header,
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
      }}>
        <p style={s.firmBadge}>MWANGI & ASSOCIATES ADVOCATES</p>
        <h1 style={s.pageTitle}>BOOK A CONSULTATION</h1>
        <div style={s.hrWrap}>
          <div style={{ ...s.hr, width: loaded ? "180px" : "0px", transition: "width 1s ease 0.6s" }} />
        </div>
        <p style={s.headerDesc}>
          Schedule a confidential consultation with one of our experienced advocates.
          We are here to provide the legal guidance you need.
        </p>
      </div>

      {/* Body */}
      <div style={s.body}>

        {/* Sidebar */}
        <div style={{
          ...s.sidebar,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
        }} className="sidebar">
          <div>
            <p style={s.sectionLabel}>WHY CHOOSE US</p>
            {[
              { icon: "⚖", title: "Expert Advocates", desc: "Experienced in Kenyan law across multiple disciplines." },
              { icon: "🔒", title: "Confidential", desc: "All consultations are strictly private and protected." },
              { icon: "⚡", title: "Swift Response", desc: "We respond to all inquiries within 24 hours." },
              { icon: "🎯", title: "Tailored Strategy", desc: "Solutions crafted specifically for your situation." },
            ].map((item, i) => (
              <div key={i} style={s.infoCard} className="info-card">
                <span style={s.infoIcon}>{item.icon}</span>
                <div>
                  <div style={s.infoTitle}>{item.title}</div>
                  <div style={s.infoDesc}>{item.desc}</div>
                </div>
              </div>
            ))}

            <div style={s.contactBlock}>
              <p style={s.sectionLabel}>CONTACT US DIRECTLY</p>
              {[
                { icon: "📞", text: "+254 700 000 000" },
                { icon: "✉", text: "info@mwangiadvocates.co.ke" },
                { icon: "📍", text: "Nairobi, Kenya" },
              ].map((c, i) => (
                <div key={i} style={s.contactRow}>
                  <span style={s.contactIcon}>{c.icon}</span>
                  <span style={s.contactText}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shapes */}
          <div style={s.shapesRow}>
            <div style={s.triYellow} />
            <div style={s.triTeal} />
            <div style={s.triStripe} className="tri-stripe">
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{ ...s.stripe, top: `${i * 18}%` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Form area */}
        <div style={s.formArea}>
          {!submitted ? (
            <>
              {/* Step indicators */}
              <div style={{
                ...s.stepRow,
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.7s ease 0.7s",
              }}>
                {["Your Details", "Appointment", "Message"].map((label, i) => {
                  const num = i + 1;
                  const active = step === num;
                  const done = step > num;
                  return (
                    <div key={i} style={s.stepGroup}>
                      <div style={s.stepInner} onClick={() => num < step && setStep(num)}>
                        <div style={{
                          ...s.stepNum,
                          background: done ? "#1b9e9e" : active ? "#111" : "#e5e5e5",
                          color: done || active ? "#fff" : "#999",
                          cursor: num < step ? "pointer" : "default",
                        }}>
                          {done ? "✓" : num}
                        </div>
                        <span style={{
                          ...s.stepLabel,
                          color: active ? "#111" : done ? "#1b9e9e" : "#999",
                        }} className="step-label">
                          {label.toUpperCase()}
                        </span>
                      </div>
                      {i < 2 && (
                        <div style={{
                          ...s.stepLine,
                          background: step > num ? "#1b9e9e" : "#e5e5e5",
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Steps */}
              <div style={{
                ...s.formContent,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s",
              }}>
                {step === 1 && (
                  <div className="step-panel">
                    <p style={s.stepCounter}>STEP 1 OF 3</p>
                    <h2 style={s.stepTitle}>YOUR DETAILS</h2>
                    <div style={s.grid2}>
                      <Field label="FIRST NAME" value={form.firstName} onChange={v => update("firstName", v)} placeholder="e.g. John" />
                      <Field label="LAST NAME" value={form.lastName} onChange={v => update("lastName", v)} placeholder="e.g. Kamau" />
                    </div>
                    <div style={{ ...s.grid2, marginTop: 16 }}>
                      <Field label="EMAIL ADDRESS" value={form.email} onChange={v => update("email", v)} placeholder="john@email.com" type="email" />
                      <Field label="PHONE NUMBER" value={form.phone} onChange={v => update("phone", v)} placeholder="+254 700 000 000" />
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 24 }}>
                      <label style={s.fieldLabel}>CONSULTATION TYPE</label>
                      <div style={s.typeGrid}>
                        {["In-Person", "Phone Call", "Video Call"].map(type => (
                          <button key={type}
                            onClick={() => update("consultationType", type)}
                            style={{
                              ...s.typeBtn,
                              borderColor: form.consultationType === type ? "#1b9e9e" : "#e5e5e5",
                              background: form.consultationType === type ? "#1b9e9e" : "#fff",
                              color: form.consultationType === type ? "#fff" : "#555",
                            }} className="sel-btn">
                            {type.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <NavButtons onNext={() => setStep(2)} showBack={false}
                      canNext={!!(form.firstName && form.lastName && form.email && form.consultationType)} />
                  </div>
                )}

                {step === 2 && (
                  <div className="step-panel">
                    <p style={s.stepCounter}>STEP 2 OF 3</p>
                    <h2 style={s.stepTitle}>YOUR APPOINTMENT</h2>
                    <div style={{ marginBottom: 20 }}>
                      <label style={s.fieldLabel}>AREA OF LAW</label>
                      <div style={s.areaGrid}>
                        {PRACTICE_AREAS.map(area => (
                          <button key={area}
                            onClick={() => setSelectedArea(area)}
                            style={{
                              ...s.areaBtn,
                              borderColor: selectedArea === area ? "#1b9e9e" : "#e5e5e5",
                              background: selectedArea === area ? "#1b9e9e" : "#fff",
                              color: selectedArea === area ? "#fff" : "#555",
                            }} className="sel-btn">
                            {area.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <Field label="PREFERRED DATE" value={form.date} onChange={v => update("date", v)} type="date" />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={s.fieldLabel}>PREFERRED TIME</label>
                      <div style={s.timeGrid}>
                        {TIME_SLOTS.map(slot => (
                          <button key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            style={{
                              ...s.timeBtn,
                              borderColor: selectedSlot === slot ? "#e8b83a" : "#e5e5e5",
                              background: selectedSlot === slot ? "#e8b83a" : "#fff",
                              color: selectedSlot === slot ? "#111" : "#555",
                            }} className="sel-btn">
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <NavButtons onNext={() => setStep(3)} onBack={() => setStep(1)}
                      canNext={!!(selectedArea && form.date && selectedSlot)} />
                  </div>
                )}

                {step === 3 && (
                  <div className="step-panel">
                    <p style={s.stepCounter}>STEP 3 OF 3</p>
                    <h2 style={s.stepTitle}>YOUR MESSAGE</h2>
                    <div style={{ marginBottom: 16 }}>
                      <label style={s.fieldLabel}>BRIEFLY DESCRIBE YOUR LEGAL MATTER</label>
                      <textarea
                        value={form.message}
                        onChange={e => update("message", e.target.value)}
                        placeholder="Please describe your situation and what legal assistance you need..."
                        rows={5}
                        style={s.textarea}
                        className="custom-textarea"
                      />
                    </div>
                    <div style={s.summary}>
                      <p style={{ ...s.sectionLabel, marginBottom: 12 }}>BOOKING SUMMARY</p>
                      <div style={s.summaryGrid}>
                        {[
                          ["Name", `${form.firstName} ${form.lastName}`],
                          ["Type", form.consultationType],
                          ["Area", selectedArea],
                          ["Date", form.date],
                          ["Time", selectedSlot],
                          ["Email", form.email],
                        ].map(([label, val]) => (
                          <div key={label} style={s.summaryRow}>
                            <span style={s.summaryKey}>{label}: </span>
                            <span style={s.summaryVal}>{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <NavButtons onNext={handleSubmit} onBack={() => setStep(2)}
                      nextLabel="CONFIRM BOOKING" canNext={form.message.length > 0} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={s.successWrap} className="step-panel">
              <div style={{ fontSize: 48, color: "#1b9e9e", marginBottom: 16 }}>✓</div>
              <p style={s.sectionLabel}>BOOKING CONFIRMED</p>
              <h2 style={{ ...s.stepTitle, fontSize: "clamp(24px,4vw,36px)", marginBottom: 12 }}>
                THANK YOU, {form.firstName.toUpperCase()}!
              </h2>
              <div style={{ height: 2, width: 140, background: "#111", margin: "0 auto 20px" }} />
              <p style={{ ...s.headerDesc, maxWidth: 420, marginBottom: 28 }}>
                Your consultation has been booked for <strong>{form.date}</strong> at <strong>{selectedSlot}</strong>.
                A confirmation will be sent to <strong>{form.email}</strong>. Our team will be in touch shortly.
              </p>
              <button onClick={reset} style={s.btnBlack} className="btn-black">BOOK ANOTHER</button>
            </div>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        ...s.statsBar,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease 1.2s",
      }}>
        {[
          { num: "20+", label: "YEARS OF PRACTICE" },
          { num: "1,400+", label: "CASES RESOLVED" },
          { num: "24hrs", label: "RESPONSE TIME" },
          { num: "98%", label: "CLIENT SATISFACTION" },
        ].map((st, i, arr) => (
          <div key={i} style={{
            ...s.statItem,
            borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}>
            <span style={s.statNum}>{st.num}</span>
            <span style={s.statLabel}>{st.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label style={s.fieldLabel}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={s.input}
        className="custom-input"
      />
    </div>
  );
}

function NavButtons({ onNext, onBack, nextLabel = "NEXT STEP →", showBack = true, canNext = true }) {
  return (
    <div style={s.navRow}>
      {showBack && onBack && (
        <button onClick={onBack} style={s.btnOutline} className="btn-outline">← BACK</button>
      )}
      <button
        onClick={canNext ? onNext : undefined}
        style={{ ...s.btnBlack, background: canNext ? "#111" : "#ccc", cursor: canNext ? "pointer" : "not-allowed" }}
        className="btn-black">
        {nextLabel}
      </button>
    </div>
  );
}

const s = {
  root: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  triTR: {
    position: "absolute", top: 0, right: 0, zIndex: 10,
    width: 0, height: 0,
    borderTop: "130px solid #9ee8e4",
    borderLeft: "130px solid transparent",
  },
  triTL: {
    position: "absolute", top: 0, left: 0, zIndex: 10,
    width: 0, height: 0,
    borderTop: "100px solid #9ee8e4",
    borderRight: "100px solid transparent",
  },
  header: {
    position: "relative", zIndex: 20,
    textAlign: "center",
    padding: "clamp(16px,4vw,48px) 1rem clamp(12px,2vw,24px)",
  },
  firmBadge: {
    fontSize: 10, letterSpacing: "0.3em", marginBottom: 10,
    color: "#1b9e9e", fontFamily: "'Trebuchet MS',sans-serif", margin: "0 0 10px",
  },
  pageTitle: {
    fontSize: "clamp(28px,5vw,60px)", fontWeight: 900, color: "#111",
    letterSpacing: "-0.01em", lineHeight: 1.1, margin: "0 0 16px",
  },
  hrWrap: { display: "flex", justifyContent: "center", marginBottom: 14 },
  hr: { height: 2, background: "#111" },
  headerDesc: {
    fontSize: "clamp(12px,1.4vw,14px)", color: "#444", lineHeight: 1.75,
    fontFamily: "'Trebuchet MS',sans-serif", maxWidth: 560, margin: "0 auto",
  },
  body: {
    position: "relative", zIndex: 20, flex: 1,
    display: "flex", gap: 40,
    maxWidth: 1200, width: "100%", margin: "0 auto",
    padding: "0 clamp(16px,4vw,40px) 0",
  },
  sidebar: {
    width: 280, flexShrink: 0,
    display: "flex", flexDirection: "column", justifyContent: "space-between",
  },
  sectionLabel: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.28em",
    color: "#1b9e9e", fontFamily: "'Trebuchet MS',sans-serif",
    margin: "0 0 14px",
  },
  infoCard: {
    display: "flex", gap: 12, marginBottom: 14, padding: "10px 12px",
    borderLeft: "3px solid #1b9e9e", background: "#f9f9f9",
  },
  infoIcon: { fontSize: 18, flexShrink: 0, marginTop: 2 },
  infoTitle: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
    color: "#111", fontFamily: "'Trebuchet MS',sans-serif", marginBottom: 4,
  },
  infoDesc: {
    fontSize: 11, color: "#555", lineHeight: 1.6,
    fontFamily: "'Trebuchet MS',sans-serif",
  },
  contactBlock: { borderTop: "2px solid #111", paddingTop: 20, marginTop: 4 },
  contactRow: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 },
  contactIcon: { fontSize: 14, flexShrink: 0 },
  contactText: { fontSize: 11, color: "#444", fontFamily: "'Trebuchet MS',sans-serif" },
  shapesRow: { display: "flex", alignItems: "flex-end", gap: 4, paddingTop: 24, paddingBottom: 4 },
  triYellow: {
    width: 0, height: 0,
    borderLeft: "36px solid transparent",
    borderRight: "36px solid transparent",
    borderBottom: "58px solid #e8b83a",
  },
  triTeal: {
    width: 0, height: 0,
    borderLeft: "44px solid transparent",
    borderRight: "44px solid transparent",
    borderBottom: "76px solid #1b7f7f",
  },
  triStripe: {
    width: 58, height: 70, position: "relative", overflow: "hidden",
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    background: "#1b9e9e", opacity: 0.65,
  },
  stripe: {
    position: "absolute", left: 0, right: 0,
    height: "10%", background: "rgba(255,255,255,0.35)",
  },
  formArea: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0, paddingBottom: 24 },
  stepRow: {
    display: "flex", alignItems: "center", marginBottom: 28, overflowX: "auto", paddingBottom: 4,
  },
  stepGroup: { display: "flex", alignItems: "center" },
  stepInner: { display: "flex", alignItems: "center", gap: 8 },
  stepNum: {
    width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 700, fontFamily: "'Trebuchet MS',sans-serif",
    flexShrink: 0, transition: "all 0.3s ease",
  },
  stepLabel: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
    fontFamily: "'Trebuchet MS',sans-serif", whiteSpace: "nowrap",
  },
  stepLine: { width: 32, height: 2, margin: "0 10px", transition: "background 0.4s ease" },
  formContent: { flex: 1 },
  stepCounter: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.28em",
    color: "#1b9e9e", fontFamily: "'Trebuchet MS',sans-serif", margin: "0 0 6px",
  },
  stepTitle: {
    fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#111",
    margin: "0 0 20px", fontFamily: "'Georgia',serif",
  },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  fieldLabel: {
    display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
    color: "#111", fontFamily: "'Trebuchet MS',sans-serif", marginBottom: 8,
  },
  input: {
    width: "100%", padding: "10px 12px", fontSize: 13,
    border: "2px solid #e5e5e5", outline: "none",
    fontFamily: "'Trebuchet MS',sans-serif", color: "#333",
    boxSizing: "border-box", transition: "border-color 0.2s ease",
  },
  typeGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 },
  typeBtn: {
    padding: "10px 8px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
    border: "2px solid", cursor: "pointer", fontFamily: "'Trebuchet MS',sans-serif",
    transition: "all 0.2s ease",
  },
  areaGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 },
  areaBtn: {
    padding: "8px 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
    border: "2px solid", cursor: "pointer", fontFamily: "'Trebuchet MS',sans-serif",
    textAlign: "left", transition: "all 0.2s ease",
  },
  timeGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 },
  timeBtn: {
    padding: "8px 4px", fontSize: 10, fontWeight: 700,
    border: "2px solid", cursor: "pointer", fontFamily: "'Trebuchet MS',sans-serif",
    transition: "all 0.2s ease",
  },
  textarea: {
    width: "100%", padding: "12px", fontSize: 13, resize: "none",
    border: "2px solid #e5e5e5", outline: "none",
    fontFamily: "'Trebuchet MS',sans-serif", color: "#333",
    boxSizing: "border-box", transition: "border-color 0.2s ease",
  },
  summary: {
    padding: "16px 18px", background: "#f9f9f9",
    borderLeft: "3px solid #1b9e9e", marginBottom: 24,
  },
  summaryGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" },
  summaryRow: {},
  summaryKey: { fontSize: 11, fontWeight: 700, color: "#999", fontFamily: "'Trebuchet MS',sans-serif" },
  summaryVal: { fontSize: 11, color: "#111", fontFamily: "'Trebuchet MS',sans-serif" },
  navRow: { display: "flex", gap: 12, paddingTop: 8 },
  btnBlack: {
    padding: "12px 28px", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
    background: "#111", color: "#fff", border: "none",
    fontFamily: "'Trebuchet MS',sans-serif", cursor: "pointer",
    transition: "background 0.25s ease, transform 0.2s ease",
  },
  btnOutline: {
    padding: "10px 22px", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
    background: "transparent", color: "#111", border: "2px solid #111",
    fontFamily: "'Trebuchet MS',sans-serif", cursor: "pointer",
    transition: "all 0.25s ease",
  },
  successWrap: {
    flex: 1, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    textAlign: "center", padding: "40px 16px",
  },
  statsBar: {
    position: "relative", zIndex: 20,
    display: "flex", background: "#111",
  },
  statItem: {
    flex: 1, display: "flex", flexDirection: "column",
    alignItems: "center", padding: "16px 8px", gap: 4,
  },
  statNum: {
    fontSize: "clamp(16px,2.5vw,28px)", fontWeight: 900,
    color: "#1b9e9e", fontFamily: "'Georgia',serif",
  },
  statLabel: {
    fontSize: "clamp(7px,0.7vw,9px)", letterSpacing: "0.18em",
    color: "#aaa", fontFamily: "'Trebuchet MS',sans-serif", textAlign: "center",
  },
};

const css = `
  * { box-sizing: border-box; }
  .step-panel { animation: fadeUp 0.4s ease forwards; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  .custom-input:focus { border-color: #1b9e9e !important; box-shadow: 0 0 0 3px rgba(27,158,158,0.1); }
  .custom-textarea:focus { border-color: #1b9e9e !important; box-shadow: 0 0 0 3px rgba(27,158,158,0.1); }
  .btn-black:hover { background: #1b9e9e !important; transform: translateY(-1px); }
  .btn-outline:hover { background: #111 !important; color: #fff !important; }
  .sel-btn:hover { opacity: 0.85; }
  .info-card { transition: transform 0.2s ease, border-color 0.2s ease; cursor: default; }
  .info-card:hover { transform: translateX(4px); border-left-color: #e8b83a !important; }
  .step-label { display: none; }
  @media (min-width: 480px) { .step-label { display: inline; } }
  .sidebar { display: none; }
  @media (min-width: 1024px) { .sidebar { display: flex; } }
  @media (max-width: 600px) {
    [data-grid2] { grid-template-columns: 1fr !important; }
  }
`;