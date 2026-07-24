"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Default theme
  const [theme, setThemeState] = useState<Theme>("light");

  const applyTheme = useCallback((value: Theme) => {
    document.documentElement.classList.toggle("dark", value === "dark");

    localStorage.setItem("theme", value);

    setThemeState(value);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    applyTheme(savedTheme ?? "light");
  }, [applyTheme]);

  const setTheme = useCallback(
    (value: Theme) => {
      applyTheme(value);
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme, applyTheme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
