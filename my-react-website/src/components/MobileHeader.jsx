import { SECTIONS, EMAIL } from "../data";

export default function MobileHeader({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <div className="mobile-header">
      <div className="mobile-bar">
        <div className="mobile-bar-name">Aditya Tripathi</div>
        <a className="mobile-email-btn" href={`mailto:${EMAIL}`}>
          Email
        </a>
        <button className="mobile-menu-toggle" onClick={onToggleMenu}>
          {menuOpen ? "✕" : "≡"}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="mobile-nav-row" onClick={onCloseMenu}>
              <span className="nav-num">{s.num}</span>
              <span className="nav-label">{s.label}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
