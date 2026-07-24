"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

import type { SocialItem } from "@/data/social";

interface SocialCardProps {
  item: SocialItem;
}

export default function SocialCard({ item }: SocialCardProps) {
  const { theme } = useTheme();

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      data-social-card
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2",

        theme === "dark"
          ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-emerald-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(16,185,129,.15)]"
          : "border border-slate-200 bg-white shadow-lg shadow-slate-200/40 hover:border-emerald-300 hover:shadow-xl",
      )}
    >
      {/* Glow */}
      {theme === "dark" && (
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
      )}

      <div className="relative flex h-full flex-col items-center p-6 text-center">
        {/* Icon */}
        <div
          className={cn(
            "mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110",

            theme === "dark"
              ? "border border-white/10 bg-white/5"
              : "border border-emerald-100 bg-emerald-50",
          )}
        >
          <Icon
            className={cn(
              "h-7 w-7 transition-colors duration-300",

              theme === "dark" ? "text-emerald-400" : "text-emerald-600",
            )}
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-xl font-semibold tracking-tight transition-colors duration-300",

            theme === "dark" ? "text-white" : "text-slate-900",
          )}
        >
          {item.name}
        </h3>

        {/* Username */}
        <p
          className={cn(
            "mt-2 text-sm font-medium transition-colors duration-300",

            theme === "dark" ? "text-emerald-400" : "text-emerald-600",
          )}
        >
          {item.username}
        </p>

        {/* Description */}
        <p
          className={cn(
            "mt-4 flex-1 text-sm leading-6 transition-colors duration-300",

            theme === "dark" ? "text-slate-400" : "text-slate-600",
          )}
        >
          {item.description}
        </p>

        {/* CTA */}
        <div
          className={cn(
            "mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",

            theme === "dark"
              ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/15"
              : "border border-emerald-300 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100",
          )}
        >
          <span>{item.cta}</span>

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
