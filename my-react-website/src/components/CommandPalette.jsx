import { SECTIONS, PROJECTS, JOBS } from "../data";

function buildPool() {
  return [
    ...SECTIONS.map((s) => ({ num: s.num, label: s.label, kind: "section", target: s.id })),
    ...PROJECTS.map((p) => ({ num: "→", label: p.name, kind: "project", target: "projects" })),
    ...JOBS.map((j) => ({ num: "→", label: j.org, kind: "role", target: "experience" })),
  ];
}

export default function CommandPalette({ query, onQueryChange, onClose, onJump }) {
  const q = query.trim().toLowerCase();
  const results = buildPool()
    .filter((r) => !q || r.label.toLowerCase().includes(q))
    .slice(0, 7);

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div className="cmd-panel" onClick={(e) => e.stopPropagation()}>
        <input
          className="cmd-input"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Jump to a section or project…"
          autoFocus
        />
        <div className="cmd-results">
          {results.map((r, i) => (
            <button key={i} className="cmd-row" onClick={() => onJump(r.target)}>
              <span className="nav-num">{r.num}</span>
              <span className="label">{r.label}</span>
              <span className="kind">{r.kind}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
