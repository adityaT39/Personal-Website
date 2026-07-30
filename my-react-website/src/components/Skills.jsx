import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">03 · Skills</div>
      <div className="skills-list">
        {SKILLS.map((g, i) => (
          <div key={i} className="skill-group">
            <div className="skill-group-label">{g.group}</div>
            <div className="skill-items">
              {g.items.map((s, k) => (
                <span key={k} className="chip-outline">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
