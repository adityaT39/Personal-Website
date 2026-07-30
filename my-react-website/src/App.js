import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import CommandPalette from "./components/CommandPalette";
import About from "./components/About";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { EMAIL, SECTIONS } from "./data";

const SHOW_COVER = false;
const SHOW_METRICS = true;

export default function App() {
  const [active, setActive] = useState("about");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
        setQuery("");
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      io.disconnect();
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const jump = useCallback((id) => {
    setCmdOpen(false);
    setQuery("");
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: "smooth" });
    }
  }, []);

  const copyEmail = useCallback(() => {
    try {
      navigator.clipboard.writeText(EMAIL);
    } catch (_) {
      // clipboard unavailable — no-op
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  }, []);

  const copyLabel = copied ? "Copied ✓" : "Copy email";

  return (
    <div className="shell">
      <Sidebar active={active} onOpenCmd={() => setCmdOpen(true)} copyLabel={copyLabel} onCopyEmail={copyEmail} />
      <MobileHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main className="main">
        {SHOW_COVER && (
          <div className="cover">
            <span>cover image — 2400 × 420</span>
          </div>
        )}

        <About copyLabel={copyLabel} onCopyEmail={copyEmail} hover={hover} onHoverEnter={setHover} onHoverLeave={() => setHover(null)} />
        {SHOW_METRICS && <Metrics />}
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact copyLabel={copyLabel} onCopyEmail={copyEmail} />
      </main>

      {cmdOpen && (
        <CommandPalette
          query={query}
          onQueryChange={setQuery}
          onClose={() => setCmdOpen(false)}
          onJump={jump}
        />
      )}
    </div>
  );
}
