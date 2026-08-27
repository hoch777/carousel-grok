import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const SLIDE_W = 420;
export const SLIDE_H = 525;
export const TOTAL_SLIDES = 9;

export function SlideShell({
  children,
  index,
  eyebrow,
}: {
  children: React.ReactNode;
  index: number;
  eyebrow?: string;
  number?: string;
}) {
  const pct = ((index + 1) / TOTAL_SLIDES) * 100;
  const isLast = index === TOTAL_SLIDES - 1;
  const displayNum = String(index + 1).padStart(2, "0");

  return (
    <article
      className="relative flex shrink-0 flex-col overflow-hidden bg-bg text-fg"
      style={{ width: SLIDE_W, height: SLIDE_H }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 bottom-2 z-0 select-none font-extrabold text-[200px] leading-none tracking-tighter text-orange/[0.10] tabular-nums"
      >
        {displayNum}
      </span>

      <header className="relative z-[1] shrink-0 px-7 pt-6">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
          {eyebrow}
        </p>
      </header>

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-3 px-7 pt-3 pb-14 [&>:last-child]:mt-auto">
        {children}
      </div>

      {!isLast ? <SwipeEdge light /> : null}
      <ProgressBar pct={pct} index={index} light />
    </article>
  );
}

export function CoverSlide({
  children,
  index,
  photoUrl,
}: {
  children: React.ReactNode;
  index: number;
  photoUrl: string;
}) {
  const pct = ((index + 1) / TOTAL_SLIDES) * 100;
  const isLast = index === TOTAL_SLIDES - 1;

  return (
    <article
      className="relative flex shrink-0 flex-col overflow-hidden text-[#f6f1e8]"
      style={{ width: SLIDE_W, height: SLIDE_H }}
    >
      <img
        src={photoUrl}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgb(17 17 17 / 0.28) 0%, rgb(17 17 17 / 0.12) 32%, rgb(17 17 17 / 0.45) 70%, rgb(17 17 17 / 0.72) 100%)",
        }}
      />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col px-7 pt-6 pb-14">
        {children}
      </div>

      {!isLast ? <SwipeEdge /> : null}
      <ProgressBar pct={pct} index={index} />
    </article>
  );
}

function SwipeEdge({ light }: { light?: boolean }) {
  return (
    <div
      className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 flex w-8 items-center justify-center"
      style={{
        background: light
          ? "linear-gradient(to right, transparent, rgb(0 0 0 / 0.03))"
          : "linear-gradient(to right, transparent, rgb(0 0 0 / 0.18))",
      }}
    >
      <ChevronRight
        className={cn("size-5", light ? "text-fg/25" : "text-white/55")}
        strokeWidth={2.4}
      />
    </div>
  );
}

function ProgressBar({
  pct,
  index,
  light}: {
  pct: number;
  index: number;
  light?: boolean;
}) {
  return (
    <div className="absolute right-0 bottom-0 left-0 z-20 flex items-center gap-2.5 px-7 pb-4">
      <div
        className={cn(
          "h-[3px] flex-1 overflow-hidden rounded-full",
          light ? "bg-fg/8" : "bg-white/25",
        )}
      >
        <div
          className="h-full rounded-full bg-orange"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={cn(
          "text-[11px] font-medium tabular-nums",
          light ? "text-fg/30" : "text-white/55",
        )}
      >
        {index + 1}/{TOTAL_SLIDES}
      </span>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-3 shadow-[0_1px_2px_rgb(17_17_17/0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Tag({
  children,
  tone = "gray",
}: {
  children: React.ReactNode;
  tone?: "gray" | "orange" | "green" | "red";
}) {
  const tones = {
    gray: "bg-studio text-muted",
    orange: "bg-orange-soft text-orange",
    green: "bg-green-soft text-green",
    red: "bg-red-soft text-red",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function IconChip({
  children,
  tone = "orange",
}: {
  children: React.ReactNode;
  tone?: "orange" | "sage" | "green" | "red";
}) {
  const tones = {
    orange: "bg-orange-soft text-orange",
    sage: "bg-sage-soft text-sage",
    green: "bg-green-soft text-green",
    red: "bg-red-soft text-red",
  };
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center rounded-md",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}