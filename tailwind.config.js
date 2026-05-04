/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mugold: "#F1B82D",
        mugold2: "#B8860B",
        muink: "#0a0a0a",
        mucard: "#141414",
        mubord: "#2a2a2a",
        mufaint: "#9ca3af",
      },
      fontFamily: {
        display: ['"Oswald"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(241,184,45,0.3), 0 4px 20px rgba(241,184,45,0.08)",
      },
    },
  },
  plugins: [],
};
