import { motion } from "framer-motion";

export default function ViewToggle({ view, onChange }) {
  return (
    <div
      className="flex rounded-full p-0.5 text-sm font-semibold select-none"
      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border-mid)" }}
    >
      {["tldr", "extended"].map((v) => {
        const active = view === v;
        return (
          <button
            key={v}
            onClick={() => onChange(v)}
            className="relative px-4 py-1.5 rounded-full transition-colors z-10"
            style={{ color: active ? "#0a0a0a" : "var(--text-muted)" }}
          >
            {active && (
              <motion.div
                layoutId="toggle-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "#F1B82D" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {v === "tldr" ? "TLDR" : "Extended"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
