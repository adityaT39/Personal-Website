import { METRICS } from "../data";

export default function Metrics() {
  return (
    <div className="metrics">
      {METRICS.map((m, i) => (
        <div key={i} className="metric-cell">
          <div className="metric-num">{m.n}</div>
          <div className="metric-label">{m.l}</div>
        </div>
      ))}
    </div>
  );
}
