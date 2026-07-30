import { EMAIL, STATUS, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../data";

export default function Contact({ copyLabel, onCopyEmail }) {
  return (
    <section id="contact">
      <div className="section-label">05 · Contact</div>
      <div className="contact-row">
        <div>
          <div className="contact-headline">Hiring for a junior full stack role?</div>
          <div className="contact-status">{STATUS}</div>
        </div>
        <div className="contact-actions">
          <a className="btn-primary" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button className="btn-outline" onClick={onCopyEmail}>
            {copyLabel}
          </button>
        </div>
      </div>
      <div className="contact-footer">
        <a href={LINKEDIN_URL}>LinkedIn ↗</a>
        <a href={GITHUB_URL}>GitHub ↗</a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">
          Resume PDF ↗
        </a>
        <span className="push-right">Burnaby, BC · 2026</span>
      </div>
    </section>
  );
}
