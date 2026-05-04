import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star, X } from "lucide-react";
import Header from "../components/Header";
import DiagnosisCard from "../components/DiagnosisCard";
import { DIAGNOSES } from "../data/diagnoses";
import { CATEGORIES } from "../data/categories";
import { useStarred } from "../hooks/useStarred";

export default function Home() {
  const { isStarred, toggle } = useStarred();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(null); // null = all
  const [starsOnly, setStarsOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DIAGNOSES.filter((dx) => {
      if (starsOnly && !isStarred(dx.id)) return false;
      if (activeCat && dx.category !== activeCat) return false;
      if (q) {
        return (
          dx.name.toLowerCase().includes(q) ||
          (dx.subtitle ?? "").toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [query, activeCat, starsOnly, isStarred]);

  // Group filtered diagnoses by category order
  const grouped = useMemo(() => {
    const map = {};
    CATEGORIES.forEach((c) => { map[c.id] = []; });
    filtered.forEach((dx) => {
      if (map[dx.category]) map[dx.category].push(dx);
    });
    return CATEGORIES.filter((c) => map[c.id].length > 0).map((c) => ({
      cat: c,
      items: map[c.id],
    }));
  }, [filtered]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="EM Critical Dx" subtitle="Mizzou Emergency Medicine" />

      {/* Search + filters */}
      <div className="px-4 pt-4 pb-2 flex flex-col gap-3">
        {/* Search bar */}
        <div
          className="flex items-center gap-2 rounded-xl px-3"
          style={{ background: "#141414", border: "1px solid #222", height: 44 }}
        >
          <Search size={16} className="shrink-0" style={{ color: "#4b5563" }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diagnoses…"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "#e5e7eb", caretColor: "#F1B82D" }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{ color: "#4b5563" }}>
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {/* Stars toggle */}
          <button
            onClick={() => setStarsOnly((v) => !v)}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: starsOnly ? "rgba(241,184,45,0.15)" : "#1a1a1a",
              border: starsOnly ? "1px solid rgba(241,184,45,0.4)" : "1px solid #2a2a2a",
              color: starsOnly ? "#F1B82D" : "#6b7280",
            }}
          >
            <Star size={12} fill={starsOnly ? "#F1B82D" : "none"} />
            Starred
          </button>

          {/* All button */}
          <button
            onClick={() => setActiveCat(null)}
            className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeCat === null && !starsOnly ? "#F1B82D" : "#1a1a1a",
              border: activeCat === null && !starsOnly ? "1px solid #F1B82D" : "1px solid #2a2a2a",
              color: activeCat === null && !starsOnly ? "#0a0a0a" : "#6b7280",
            }}
          >
            All
          </button>

          {CATEGORIES.map((c) => {
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(active ? null : c.id)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: active ? `${c.color}22` : "#1a1a1a",
                  border: active ? `1px solid ${c.color}55` : "1px solid #2a2a2a",
                  color: active ? c.color : "#6b7280",
                }}
              >
                {c.short}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 px-4 pb-8">
        <AnimatePresence mode="popLayout">
          {grouped.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 gap-3"
              style={{ color: "#4b5563" }}
            >
              <Star size={32} strokeWidth={1.2} />
              <p className="text-sm">
                {starsOnly ? "No starred diagnoses yet." : "No results found."}
              </p>
            </motion.div>
          ) : (
            grouped.map(({ cat, items }) => (
              <motion.div key={cat.id} layout>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-3 mt-5 first:mt-1">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: cat.color }} />
                  <span
                    className="font-display font-semibold uppercase tracking-widest"
                    style={{ fontSize: 11, color: cat.color, letterSpacing: "0.1em" }}
                  >
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `${cat.color}20` }} />
                  <span className="text-xs" style={{ color: "#374151" }}>{items.length}</span>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 gap-3">
                  <AnimatePresence mode="popLayout">
                    {items.map((dx) => (
                      <DiagnosisCard
                        key={dx.id}
                        dx={dx}
                        isStarred={isStarred(dx.id)}
                        onToggleStar={toggle}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Disclaimer footer */}
      <div
        className="px-4 py-3 text-center text-xs"
        style={{ color: "#374151", borderTop: "1px solid #1a1a1a" }}
      >
        For educational use only — verify all doses before clinical application.
      </div>
    </div>
  );
}
