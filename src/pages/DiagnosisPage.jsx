import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import ContentRenderer from "../components/ContentRenderer";
import StarButton from "../components/StarButton";
import ViewToggle from "../components/ViewToggle";
import { DIAGNOSES } from "../data/diagnoses";
import { CATEGORY_BY_ID } from "../data/categories";
import { useStarred, useLastView } from "../hooks/useStarred";

export default function DiagnosisPage() {
  const { id } = useParams();
  const dx = DIAGNOSES.find((d) => d.id === id);
  const { isStarred, toggle } = useStarred();
  const [view, setView] = useLastView();

  if (!dx) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center gap-3"
        style={{ color: "var(--text-muted)", background: "var(--bg)" }}
      >
        <p>Diagnosis not found.</p>
      </div>
    );
  }

  const cat = CATEGORY_BY_ID[dx.category];
  const content = view === "tldr" ? dx.tldr : dx.extended;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title={dx.name} subtitle={dx.subtitle} showBack />

      {/* Category + star */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${cat?.color}1a`,
            color: cat?.color ?? "#F1B82D",
            border: `1px solid ${cat?.color}35`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cat?.color }} />
          {cat?.label ?? dx.category}
        </span>

        <StarButton starred={isStarred(dx.id)} onToggle={() => toggle(dx.id)} size={22} />
      </div>

      {/* Sticky TLDR/Extended toggle */}
      <div
        className="sticky z-20 flex justify-center px-4 py-3"
        style={{
          top: "calc(57px + var(--sat))",
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-5 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <ContentRenderer sections={content} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="px-4 py-3 text-center text-xs"
        style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border-subtle)", paddingBottom: "calc(0.75rem + var(--sab))" }}
      >
        For educational use only — verify all doses before clinical application.
      </div>
    </div>
  );
}
