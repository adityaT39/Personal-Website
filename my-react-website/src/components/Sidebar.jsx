import { SECTIONS, GITHUB_URL, LINKEDIN_URL } from "../data";

export default function Sidebar({ active, onOpenCmd, copyLabel, onCopyEmail }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-name">
          Aditya
          <br />
          Tripathi
        </div>
        <div className="sidebar-meta">
          Full stack developer
          <br />
          Burnaby, BC · Open to work
        </div>
      </div>
      <nav className="sidebar-nav">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`sidebar-nav-row${active === s.id ? " active" : ""}`}
          >
            <span className="nav-num">{s.num}</span>
            <span className="nav-label">{s.label}</span>
          </a>
        ))}
      </nav>
      <button className="search-btn" onClick={onOpenCmd}>
        <span className="glyph">⌕</span>
        <span className="label">Search</span>
        <span className="hint">⌘K</span>
      </button>
      <div className="sidebar-footer">
        <button className="copy-link-btn" onClick={onCopyEmail}>
          {copyLabel}
        </button>
        <div className="sidebar-social">
          <a href={GITHUB_URL}>GitHub</a>
          <span>·</span>
          <a href={LINKEDIN_URL}>LinkedIn</a>
        </div>
      </div>
    </aside>
  );
}
