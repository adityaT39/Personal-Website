import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">02 · Projects</div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <a key={i} className="project-cell" href={p.href} target="_blank" rel="noreferrer">
            <div className="project-head">
              <div className="project-name">{p.name}</div>
              <div className="project-year">{p.year}</div>
            </div>
            <div className="project-blurb">{p.blurb}</div>
            <div className="chip-row">
              {p.stack.map((s, k) => (
                <span key={k} className="chip-mono">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
