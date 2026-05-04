import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function StarButton({ starred, onToggle, size = 22 }) {
  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onToggle();
      }}
      whileTap={{ scale: 0.8 }}
      aria-label={starred ? "Unstar" : "Star"}
      className="flex items-center justify-center rounded-full p-1.5 transition-colors"
      style={{
        color: starred ? "#F1B82D" : "#4b5563",
        background: starred ? "rgba(241,184,45,0.12)" : "transparent",
      }}
    >
      <Star
        size={size}
        fill={starred ? "#F1B82D" : "none"}
        strokeWidth={1.8}
      />
    </motion.button>
  );
}
