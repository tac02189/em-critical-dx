import { createContext, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import DiagnosisPage from "./pages/DiagnosisPage";
import { useTheme } from "./hooks/useTheme";

export const ThemeContext = createContext({ theme: "dark", toggle: () => {} });
export const useThemeCtx = () => useContext(ThemeContext);

const pageVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -20 },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 340, damping: 30 }}
      style={{ minHeight: "100svh" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100svh", position: "relative" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"        element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/dx/:id"  element={<PageWrapper><DiagnosisPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}
