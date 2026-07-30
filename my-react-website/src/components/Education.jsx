import { COURSES } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">04 · Education</div>
      <div className="education-row">
        <div>
          <div className="org-name">University of British Columbia</div>
          <div className="job-role">Bachelor of Computer Science</div>
          <div className="job-dates">2020 – 2024 · Kelowna, BC</div>
        </div>
        <div>
          <div className="coursework-label">Relevant coursework</div>
          <div className="chip-outline-row">
            {COURSES.map((c, i) => (
              <span key={i} className="chip-outline">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
