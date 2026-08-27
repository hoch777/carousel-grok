import { useCallback, useRef, useState } from "react";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import { SLIDES } from "./slides";
import { SLIDE_H, SLIDE_W, TOTAL_SLIDES } from "./slide-shell";
import { cn } from "@/lib/utils";

export function IgFrame() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(TOTAL_SLIDES - 1, next)));
  }, []);

  return (
    <div className="w-[420px] max-w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_rgb(17_17_17/0.12)]">
      <div className="flex items-center gap-2.5 border-b border-border px-3 py-2.5">
        <div className="flex size-8 items-center justify-center rounded-full bg-orange text-[11px] font-extrabold text-surface">
          M
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold">myspacet_ai</p>
          <p className="text-[11px] text-muted">карусель · 9 слайдов</p>
        </div>
      </div>

      <div
        className="relative overflow-hidden bg-bg"
        style={{ width: SLIDE_W, height: SLIDE_H }}
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (startX.current == null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (dx < -40) go(index + 1);
          if (dx > 40) go(index - 1);
        }}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-index * SLIDE_W}px)` }}
        >
          {SLIDES.map((Slide, i) => (
            <Slide key={i} />
          ))}
        </div>

        {index > 0 ? (
          <button
            type="button"
            aria-label="Назад"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-2 z-30 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-fg shadow-sm"
          >
            <ChevronLeft className="size-4" />
          </button>
        ) : null}
        {index < TOTAL_SLIDES - 1 ? (
          <button
            type="button"
            aria-label="Дальше"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-2 z-30 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-fg shadow-sm"
          >
            <ChevronRight className="size-4" />
          </button>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-1.5 py-2.5">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-4 bg-orange" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 px-3 pb-2">
        <Heart className="size-5" strokeWidth={1.8} />
        <MessageCircle className="size-5" strokeWidth={1.8} />
        <Send className="size-5" strokeWidth={1.8} />
        <Bookmark className="ml-auto size-5" strokeWidth={1.8} />
      </div>
      <p className="px-3 pb-3 text-[13px] leading-snug">
        <span className="font-semibold">myspacet_ai</span>{" "}
        <span className="text-muted">Полный Claude в России без блокировок. Свайпни.</span>
      </p>
    </div>
  );
}
