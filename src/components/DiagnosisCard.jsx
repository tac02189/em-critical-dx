import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CATEGORY_BY_ID } from "../data/categories";
import StarButton from "./StarButton";

export default function DiagnosisCard({ dx, isStarred, onToggleStar }) {
  const navigate = useNavigate();
  const cat = CATEGORY_BY_ID[dx.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -2, boxShadow: "0 0 0 1px rgba(241,184,45,0.35), 0 6px 24px rgba(0,0,0,0.5)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      onClick={() => navigate(`/dx/${dx.id}`)}
      className="relative flex flex-col justify-between rounded-2xl cursor-pointer overflow-hidden"
      style={{
        background: "#141414",
        border: "1px solid #222",
        minHeight: 110,
        padding: "16px 16px 12px",
      }}
    >
      {/* Category accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: cat?.color ?? "#F1B82D" }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p
            className="font-display font-semibold leading-tight"
            style={{ fontSize: 17, color: "#f3f4f6", letterSpacing: "0.01em" }}
          >
            {dx.name}
          </p>
          {dx.subtitle && (
            <p
              className="mt-0.5 leading-snug"
              style={{ fontSize: 12, color: "#6b7280" }}
            >
              {dx.subtitle}
            </p>
          )}
        </div>
        <div className="shrink-0 -mt-0.5 -mr-1">
          <StarButton starred={isStarred} onToggle={() => onToggleStar(dx.id)} size={19} />
        </div>
      </div>

      {/* Category chip */}
      <div className="mt-3 flex">
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{
            background: `${cat?.color}18`,
            color: cat?.color ?? "#F1B82D",
            border: `1px solid ${cat?.color}30`,
            letterSpacing: "0.04em",
          }}
        >
          {cat?.short ?? dx.category}
        </span>
      </div>
    </motion.div>
  );
}
