import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search, Star, X } from "lucide-react";
import Header from "../components/Header";
import DiagnosisCard from "../components/DiagnosisCard";
import { DIAGNOSES } from "../data/diagnoses";
import { CATEGORIES } from "../data/categories";
import { useStarred } from "../hooks/useStarred";

export default function Home() {
  const { isStarred, toggle } = useStarred();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(null);
  const [starsOnly, setStarsOnly] = useState(false);
  const [collapsedCats, setCollapsedCats] = useState(new Set());

  // Auto-expand everything when filters/search are active
  useEffect(() => {
    setCollapsedCats(new Set());
  }, [query, activeCat, starsOnly]);

  function toggleCollapse(catId) {
    setCollapsedCats((prev) => {
      const next = new Set(prev);
      next.has(catId) ? next.delete(catId) : next.add(catId);
      return next;
    });
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DIAGNOSES.filter((dx) => {
      if (starsOnly && !isStarred(dx.id)) return false;
      if (activeCat && dx.category !== activeCat) return false;
      if (q) return dx.name.toLowerCase().includes(q) || (dx.subtitle ?? "").toLowerCase().includes(q);
      return true;
    });
  }, [query, activeCat, starsOnly, isStarred]);

  const grouped = useMemo(() => {
    const map = {};
    CATEGORIES.forEach((c) => { map[c.id] = []; });
    filtered.forEach((dx) => { if (map[dx.category]) map[dx.category].push(dx); });
    return CATEGORIES.filter((c) => map[c.id].length > 0).map((c) => ({ cat: c, items: map[c.id] }));
  }, [filtered]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title="Critical Diagnoses" subtitle="Emergency Medicine" />

      {/* Sticky search + filters */}
      <div
        className="sticky z-20 px-3 pt-1 pb-2 flex flex-col gap-2"
        style={{
          top: 64,
          background: "var(--bg)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="flex items-center gap-2 rounded-lg px-2.5"
          style={{ background: "var(--bg-input)", border: "1px solid var(--border)", height: 36 }}
        >
          <Search size={14} className="shrink-0" style={{ color: "var(--text-faint)" }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diagnoses…"
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 13, color: "var(--text-primary)", caretColor: "#F1B82D" }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{ color: "var(--text-faint)" }}>
              <X size={13} />
            </button>
          )}
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
          {/* Stars */}
          <button
            onClick={() => { setStarsOnly((v) => !v); setActiveCat(null); }}
            className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold transition-all"
            style={{
              fontSize: 11,
              background: starsOnly ? "rgba(241,184,45,0.15)" : "var(--bg-subtle)",
              border: starsOnly ? "1px solid rgba(241,184,45,0.4)" : "1px solid var(--border-mid)",
              color: starsOnly ? "#F1B82D" : "var(--text-muted)",
            }}
          >
            <Star size={11} fill={starsOnly ? "#F1B82D" : "none"} />
            Starred
          </button>

          {/* All */}
          <button
            onClick={() => { setActiveCat(null); setStarsOnly(false); }}
            className="shrink-0 px-2.5 py-1 rounded-full font-semibold transition-all"
            style={{
              fontSize: 11,
              background: activeCat === null && !starsOnly ? "#F1B82D" : "var(--bg-subtle)",
              border: activeCat === null && !starsOnly ? "1px solid #F1B82D" : "1px solid var(--border-mid)",
              color: activeCat === null && !starsOnly ? "#0a0a0a" : "var(--text-muted)",
            }}
          >
            All
          </button>

          {CATEGORIES.map((c) => {
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => { setActiveCat(active ? null : c.id); setStarsOnly(false); }}
                className="shrink-0 px-2.5 py-1 rounded-full font-semibold transition-all"
                style={{
                  fontSize: 11,
                  background: active ? `${c.color}22` : "var(--bg-subtle)",
                  border: active ? `1px solid ${c.color}55` : "1px solid var(--border-mid)",
                  color: active ? c.color : "var(--text-muted)",
                }}
              >
                {c.short}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 px-4 pb-8 pt-2">
        {grouped.length > 0 && (
          <div className="flex justify-end pt-1 pb-0.5">
            <button
              onClick={() => {
                const allCollapsed = grouped.every(({ cat }) => collapsedCats.has(cat.id));
                setCollapsedCats(allCollapsed ? new Set() : new Set(grouped.map(({ cat }) => cat.id)));
              }}
              className="text-xs transition-colors"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-faint)"}
            >
              {grouped.every(({ cat }) => collapsedCats.has(cat.id)) ? "Expand all" : "Collapse all"}
            </button>
          </div>
        )}
        <AnimatePresence mode="popLayout">
          {grouped.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 gap-3"
              style={{ color: "var(--text-faint)" }}
            >
              <Star size={32} strokeWidth={1.2} />
              <p className="text-sm">
                {starsOnly ? "No starred diagnoses yet." : "No results found."}
              </p>
            </motion.div>
          ) : (
            grouped.map(({ cat, items }) => {
              const isCollapsed = collapsedCats.has(cat.id);
              return (
                <motion.div key={cat.id} layout>
                  {/* Category header — tappable accordion trigger */}
                  <button
                    onClick={() => toggleCollapse(cat.id)}
                    className="w-full flex items-center gap-2 mb-3 mt-5 first:mt-1"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: cat.color }} />
                    <span
                      className="font-display font-semibold uppercase"
                      style={{ fontSize: 11, color: cat.color, letterSpacing: "0.1em" }}
                    >
                      {cat.label}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${cat.color}22` }} />
                    <span className="text-xs mr-1" style={{ color: "var(--text-dim)" }}>{items.length}</span>
                    <motion.span
                      animate={{ rotate: isCollapsed ? -90 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: "var(--text-dim)", display: "flex" }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  {/* Collapsible cards */}
                  <motion.div
                    initial={false}
                    animate={{ height: isCollapsed ? 0 : "auto", opacity: isCollapsed ? 0 : 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="grid grid-cols-2 gap-3 pb-1">
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
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      <div
        className="px-4 py-3 text-center text-xs"
        style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border-subtle)" }}
      >
        For educational use only — verify all doses before clinical application.
      </div>
    </div>
  );
}
