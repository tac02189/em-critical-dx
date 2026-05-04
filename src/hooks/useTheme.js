import { useCallback, useEffect, useState } from "react";

const KEY = "em-critical-dx:theme";

function read() {
  try {
    return localStorage.getItem(KEY) || "dark";
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
