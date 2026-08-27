import { createFileRoute } from "@tanstack/react-router";
import { IgFrame } from "@/components/carousel/ig-frame";
import { SLIDES } from "@/components/carousel/slides";
import { ClaudeMark, DolphinMark, PlaywrightMark, VsCodeMark } from "@/components/icons/brands";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-[100dvh] bg-studio px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start">
        <section className="flex-1">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-orange uppercase">
            @myspacet_ai
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Светлая карусель с настоящими иконками
          </h1>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted text-pretty">
            Lucide для UI. Официальные SVG для Claude, VS Code, Dolphin и Playwright. Не буквы, не эмодзи.
          </p>

          <ul className="mt-6 grid max-w-md grid-cols-2 gap-2">
            <Legend
              icon={<Shield className="size-4 text-orange" strokeWidth={2.2} />}
              label="VPN"
              source="Lucide Shield"
            />
            <Legend icon={<VsCodeMark size={16} />} label="VS Code" source="логотип бренда" />
            <Legend icon={<ClaudeMark size={16} />} label="Claude" source="официальный burst" />
            <Legend icon={<DolphinMark size={16} />} label="Dolphin" source="логотип Anty" />
            <Legend icon={<PlaywrightMark size={16} />} label="Playwright" source="логотип Microsoft" />
          </ul>
        </section>

        <IgFrame />
      </div>

      <section className="mx-auto mt-12 max-w-6xl">
        <h2 className="mb-4 text-sm font-semibold text-muted">Все 9 слайдов</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {SLIDES.map((Slide, i) => (
            <div
              key={i}
              className="shrink-0 overflow-hidden rounded-xl border border-border shadow-sm"
            >
              <Slide />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Legend({
  icon,
  label,
  source,
}: {
  icon: React.ReactNode;
  label: string;
  source: string;
}) {
  return (
    <li className="flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2">
      <span className="flex size-7 items-center justify-center rounded-md bg-bg">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold">{label}</p>
        <p className="text-[10px] text-muted">{source}</p>
      </div>
    </li>
  );
}
