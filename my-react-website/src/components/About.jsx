import { EMAIL, HERO_LINKS } from "../data";

export default function About({ copyLabel, onCopyEmail, hover, onHoverEnter, onHoverLeave }) {
  return (
    <section id="about">
      <div className="eyebrow">Portfolio · 2026</div>
      <h1 className="hero-name">Aditya Tripathi</h1>
      <p className="hero-summary">
        Computer Science graduate, University of British Columbia, with hands-on experience building and
        shipping full-stack, AI-powered web applications — Next.js/TypeScript, React, Python/FastAPI and the
        Claude API. Seeking Junior Full Stack Software Engineer roles.
      </p>
      <div className="hero-actions">
        <a className="btn-primary" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <button className="btn-outline" onClick={onCopyEmail}>
          {copyLabel}
        </button>
        {HERO_LINKS.map((l) => (
          <span
            key={l.key}
            className="link-wrap"
            onMouseEnter={() => onHoverEnter(l.key)}
            onMouseLeave={onHoverLeave}
          >
            <a
              className="link-outline"
              href={l.href}
              target={l.key === "cv" ? "_blank" : undefined}
              rel={l.key === "cv" ? "noreferrer" : undefined}
            >
              <span className="link-tag">{l.tag}</span>
              {l.label}
            </a>
            {hover === l.key && (
              <span className="link-preview">
                <span className="link-preview-url">{l.href}</span>
                {l.preview}
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
