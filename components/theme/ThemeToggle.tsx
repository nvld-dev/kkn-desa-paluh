"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "relative flex h-10 w-[78px] items-center rounded-full p-1 transition-all duration-300",

        isDark
          ? "border border-white/10 bg-white/5 backdrop-blur-xl"
          : "border border-slate-200 bg-slate-100",
      )}
    >
      {/* Slider */}
      <div
        className={cn(
          "absolute top-1 h-8 w-8 rounded-full transition-all duration-300 ease-out",

          isDark
            ? "left-1 bg-emerald-500/20 ring-1 ring-emerald-400/30"
            : "left-[38px] bg-white shadow-md",
        )}
      />

      {/* Moon */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <Moon
          className={cn(
            "h-4.5 w-4.5 transition-all duration-300",

            isDark ? "text-emerald-300" : "text-slate-400",
          )}
        />
      </div>

      {/* Sun */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <Sun
          className={cn(
            "h-4.5 w-4.5 transition-all duration-300",

            isDark ? "text-slate-500" : "text-yellow-500",
          )}
        />
      </div>
    </button>
  );
}
