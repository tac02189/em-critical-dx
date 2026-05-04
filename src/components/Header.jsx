import { useNavigate } from "react-router-dom";

export default function Header({ title, subtitle, showBack = false }) {
  const navigate = useNavigate();
  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{ width: 36, height: 36, background: "#1a1a1a", color: "#9ca3af", border: "1px solid #2a2a2a" }}
          aria-label="Back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* MU Logo mark */}
      {!showBack && (
        <div className="shrink-0">
          <img src={`${import.meta.env.BASE_URL}mu-icon.svg`} alt="MU" style={{ width: 34, height: 34, borderRadius: 8 }} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p
          className="font-display font-semibold truncate leading-none"
          style={{ fontSize: showBack ? 16 : 17, color: "#f3f4f6", letterSpacing: "0.01em" }}
        >
          {title}
        </p>
        {subtitle && (
          <p className="mt-0.5 text-xs truncate" style={{ color: "#6b7280" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Gold accent dot */}
      {!showBack && (
        <div className="shrink-0 flex items-center gap-1">
          <span className="shimmer-dot w-1.5 h-1.5 rounded-full" style={{ background: "#F1B82D", display: "inline-block" }} />
        </div>
      )}
    </header>
  );
}
