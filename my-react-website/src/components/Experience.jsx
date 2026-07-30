import { JOBS } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">01 · Experience</div>
      {JOBS.map((j, i) => (
        <div key={i} className="job-row">
          <div>
            <div className="org-name">{j.org}</div>
            <div className="job-role">{j.role}</div>
            <div className="job-dates">
              {j.dates} · {j.place}
            </div>
            <div className="chip-row">
              {j.stack.map((s, k) => (
                <span key={k} className="chip-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <ul className="job-bullets">
            {j.bullets.map((b, k) => (
              <li key={k}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
