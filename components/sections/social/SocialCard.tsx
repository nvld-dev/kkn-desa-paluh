"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { SocialItem } from "@/data/social";

interface SocialCardProps {
  item: SocialItem;
}

export default function SocialCard({ item }: SocialCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      data-social-card
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(16,185,129,.15)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col items-center p-6 text-center">
        {/* Icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-7 w-7 text-emerald-400" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {item.name}
        </h3>

        {/* Username */}
        <p className="mt-2 text-sm font-medium text-emerald-400">
          {item.username}
        </p>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">
          {item.description}
        </p>

        {/* CTA */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/15">
          <span>{item.cta}</span>

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
