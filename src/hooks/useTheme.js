import { useCallback, useEffect, useState } from "react";

const KEY = "pocket-resus:theme";
const LEGACY_KEY = "em-critical-dx:theme";

function read() {
  try {
    let v = localStorage.getItem(KEY);
    if (!v) {
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        localStorage.setItem(KEY, legacy);
        localStorage.removeItem(LEGACY_KEY);
        v = legacy;
      }
    }
    return v || "dark";
  } catch {
    return "dark";
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch {}
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
