import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  Check,
  CircleCheck,
  CircleX,
  Globe,
  Lock,
  Shield,
  Terminal,
} from "lucide-react";
import {
  ClaudeMark,
  DolphinMark,
  PlaywrightMark,
  VsCodeMark,
} from "@/components/icons/brands";
import { Card, IconChip, SlideShell, Tag } from "./slide-shell";

export function Slide01() {
  return (
    <SlideShell index={0} eyebrow="связка, которой пользуюсь сама">
      <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Полный <span className="text-orange">Claude</span> в России без блокировок
      </h1>
      <p className="text-[13px] leading-relaxed text-muted text-pretty">
        6 шагов, 10 минут. На текущий момент работает стабильно.
      </p>

      <div className="grid grid-cols-2 gap-2">
        <FlowNode
          icon={
            <IconChip>
              <Shield className="size-3.5" strokeWidth={2.2} />
            </IconChip>
          }
          title="VPN"
          sub="одна страна"
        />
        <FlowNode
          icon={
            <IconChip>
              <VsCodeMark size={14} />
            </IconChip>
          }
          title="VS Code"
          sub="Claude Code"
        />
        <FlowNode
          icon={
            <IconChip tone="sage">
              <ClaudeMark size={14} />
            </IconChip>
          }
          title="Claude"
          sub="готов к работе"
        />
        <FlowNode
          icon={
            <IconChip>
              <DolphinMark size={14} />
            </IconChip>
          }
          title="Dolphin"
          sub="профиль + прокси"
        />
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-orange-soft px-3 py-2.5 text-[12px] font-medium text-orange">
        <Bookmark className="size-3.5 shrink-0" strokeWidth={2.2} />
        Сохрани этот пост. Настроишь один раз и забудешь.
      </div>
    </SlideShell>
  );
}

function FlowNode({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <Card className="flex items-center gap-2 p-2.5">
      {icon}
      <div className="min-w-0">
        <p className="text-[12px] font-semibold">{title}</p>
        <p className="text-[11px] text-muted">{sub}</p>
      </div>
    </Card>
  );
}

export function Slide02() {
  return (
    <SlideShell index={1} eyebrow="без лишних обещаний">
      <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Что в связке стоит <span className="text-orange">денег</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Говорю сразу, чтобы не тратить время зря.
      </p>

      <div className="grid grid-cols-3 gap-1.5">
        <Card className="flex flex-col gap-1.5 p-2.5">
          <div className="flex items-center gap-1.5">
            <Lock className="size-3.5 text-orange" strokeWidth={2.2} />
            <p className="text-[11px] font-semibold">VPN на ПК</p>
          </div>
          <p className="text-[10px] leading-snug text-muted">
            Общий, на всю систему. Включается один раз перед стартом.
          </p>
          <Tag>платно</Tag>
        </Card>
        <Card className="flex flex-col gap-1.5 p-2.5">
          <div className="flex items-center gap-1.5">
            <DolphinMark size={14} />
            <p className="text-[11px] font-semibold">Dolphin Anty</p>
          </div>
          <p className="text-[10px] leading-snug text-muted">
            Минимальный тариф. Без API Playwright не свяжется с браузером.
          </p>
          <Tag tone="orange">мин. тариф</Tag>
        </Card>
        <Card className="flex flex-col gap-1.5 p-2.5">
          <div className="flex items-center gap-1.5">
            <ClaudeMark size={14} />
            <p className="text-[11px] font-semibold">Claude</p>
          </div>
          <p className="text-[10px] leading-snug text-muted">
            Нужен минимум Pro. На бесплатном тарифе связка не поедет.
          </p>
          <Tag tone="orange">от Pro</Tag>
        </Card>
      </div>

      <Card className="flex items-start gap-2 border-green/25 bg-green-soft p-2.5">
        <CircleCheck className="mt-0.5 size-4 shrink-0 text-green" strokeWidth={2.2} />
        <div>
          <p className="text-[12px] font-semibold text-green">Прокси покупать не нужно</p>
          <p className="text-[11px] leading-snug text-muted">
            В профиль Dolphin можно прописать тот же прокси, что стоит у тебя в VPN.
          </p>
        </div>
      </Card>

      <div className="flex flex-wrap gap-1.5">
        <span className="text-[10px] text-muted">бесплатно</span>
        <Tag tone="green">
          <VsCodeMark size={10} /> VS Code
        </Tag>
        <Tag tone="green">
          <ClaudeMark size={10} /> Claude Code
        </Tag>
        <Tag tone="green">
          <PlaywrightMark size={10} /> Playwright MCP
        </Tag>
      </div>
    </SlideShell>
  );
}

export function Slide03() {
  return (
    <SlideShell index={2} eyebrow="шаг 0" number="0">
      <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Включи VPN и больше <span className="text-orange">не трогай</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Выбери одну страну и оставайся на ней. Я сижу в локации Казахстан.
      </p>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[12px] font-semibold">Одна страна всё время</p>
          <Tag tone="green">стабильно</Tag>
        </div>
        <div className="flex items-center gap-1.5">
          <Country>KZ</Country>
          <ArrowRight className="size-3 text-muted" />
          <Country>KZ</Country>
          <ArrowRight className="size-3 text-muted" />
          <Country>KZ</Country>
        </div>
      </Card>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[12px] font-semibold">Прыжки между странами</p>
          <Tag tone="red">проверки</Tag>
        </div>
        <div className="flex items-center gap-1.5">
          <Country>KZ</Country>
          <ArrowRight className="size-3 text-red/50" />
          <Country>DE</Country>
          <ArrowRight className="size-3 text-red/50" />
          <Country>NL</Country>
          <ArrowRight className="size-3 text-red/50" />
          <Country>US</Country>
        </div>
      </Card>

      <p className="text-[12px] leading-relaxed text-muted">
        Чем спокойнее окружение, тем меньше вопросов к вашему входу.
      </p>
    </SlideShell>
  );
}

function Country({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-studio px-2 py-1 text-[11px] font-semibold">
      <Globe className="size-3 text-sage" strokeWidth={2.2} />
      {children}
    </span>
  );
}

export function Slide04() {
  return (
    <SlideShell index={3} eyebrow="шаг 1" number="1">
      <h1 className="text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Поставь Claude Code в <span className="text-orange">VS Code</span>
      </h1>
      <div className="flex items-center gap-1.5 text-muted">
        <VsCodeMark size={14} />
        <span className="text-[12px]">+</span>
        <ClaudeMark size={14} />
      </div>
      <p className="text-[13px] leading-relaxed text-muted">
        Сначала VPN, и только потом запуск. Claude живёт прямо в редакторе кода.
      </p>

      <Card className="font-mono text-[11px] leading-relaxed">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] text-muted">
            <span className="size-1.5 rounded-full bg-red" />
            <span className="size-1.5 rounded-full bg-orange" />
            <span className="size-1.5 rounded-full bg-green" />
            Visual Studio Code
          </span>
          <Tag tone="green">VPN · Казахстан</Tag>
        </div>
        <p className="text-muted">// терминал прямо в редакторе</p>
        <p>
          <span className="text-muted">$</span> npm i -g @anthropic-ai/claude-code
        </p>
        <p>
          <span className="text-muted">$</span> claude
        </p>
        <p className="text-green">{">"} Claude Code готов к работе</p>
      </Card>

      <Card className="flex items-start gap-2 bg-fg p-2.5 text-surface">
        <Terminal className="mt-0.5 size-3.5 shrink-0 text-orange" strokeWidth={2.2} />
        <p className="text-[11px] leading-snug text-surface/80">
          Перед запуском проверь метку VPN. Claude Code запоминает окружение первого входа.
        </p>
      </Card>
    </SlideShell>
  );
}

export function Slide05() {
  return (
    <SlideShell index={4} eyebrow="шаг 2" number="2">
      <h1 className="text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance">
        В VS Code расширение <span className="text-orange">не сработает</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Обычно агент работает как ты: сам открывает сайты в браузере. В VS Code он живёт внутри редактора, поэтому расширение Claude for Chrome там не работает. Ставим Playwright.
      </p>

      <div className="grid grid-cols-2 gap-2">
        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ClaudeMark size={14} className="text-muted" />
              <p className="text-[12px] font-semibold">Claude for Chrome</p>
            </div>
            <CircleX className="size-4 text-red" strokeWidth={2.2} />
          </div>
          <p className="text-[11px] leading-snug text-muted">
            Работает как ты: открывает сайты в твоём Chrome. Только там.
          </p>
        </Card>
        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <PlaywrightMark size={14} />
              <p className="text-[12px] font-semibold">Playwright MCP</p>
            </div>
            <CircleCheck className="size-4 text-green" strokeWidth={2.2} />
          </div>
          <p className="text-[11px] leading-snug text-muted">
            То же самое, но из VS Code. Так Claude Code управляет браузером.
          </p>
        </Card>
      </div>

      <Card className="font-mono text-[11px] leading-relaxed">
        <p className="mb-1 text-[10px] text-muted">терминал VS Code</p>
        <p>
          <span className="text-muted">$</span> claude mcp add playwright npx @playwright/mcp@latest
        </p>
        <p className="mt-1 text-[10px] text-muted">Одна строка, и VS Code сам поставит плагин.</p>
      </Card>
    </SlideShell>
  );
}

export function Slide06() {
  return (
    <SlideShell index={5} eyebrow="шаг 3" number="3">
      <h1 className="text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Отдельный профиль только под <span className="text-orange">Claude</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        В Dolphin Anty создаём новый профиль и прописываем прокси на ту же страну, что и VPN. Отдельный покупать не нужно, подойдёт тот же.
      </p>

      <Card className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DolphinMark size={18} />
          <p className="text-[13px] font-semibold">Dolphin Anty</p>
        </div>
        <Tag tone="green">готово</Tag>
      </Card>

      <Card className="border-red/25 bg-red-soft">
        <div className="mb-1 flex items-center gap-1.5 text-red">
          <AlertCircle className="size-3.5" strokeWidth={2.2} />
          <p className="text-[12px] font-semibold">Только для Claude</p>
        </div>
        <p className="text-[11px] leading-snug text-muted">
          Даже веб-версию открывай в этом же профиле. Больше в нём ничего не открывай: ни почту, ни соцсети, ни российские сайты.
        </p>
      </Card>
    </SlideShell>
  );
}

export function Slide07() {
  return (
    <SlideShell index={6} eyebrow="шаг 4" number="4">
      <h1 className="text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Две настройки, без которых <span className="text-orange">не поедет</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Прописываем их в системном промпте, постоянной инструкции, которую Claude читает перед каждой задачей.
      </p>

      <Card>
        <div className="mb-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-md bg-orange text-[10px] font-bold text-surface">
              1
            </span>
            <p className="text-[12px] font-semibold">Только браузер Dolphin</p>
          </div>
          <DolphinMark size={16} />
        </div>
        <p className="text-[11px] leading-snug text-muted">
          Playwright MCP работает только через браузер Dolphin Anty. Встроенный браузер не подойдёт.
        </p>
      </Card>

      <Card>
        <div className="mb-1.5 flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-md bg-orange text-[10px] font-bold text-surface">
            2
          </span>
          <p className="text-[12px] font-semibold">Проверка перед запуском</p>
        </div>
        <ul className="space-y-1 text-[11px] text-muted">
          <li className="flex items-center gap-1.5">
            <Check className="size-3 text-green" strokeWidth={2.6} />
            VPN включён и стоит на нужной стране
          </li>
          <li className="flex items-center gap-1.5">
            <Check className="size-3 text-green" strokeWidth={2.6} />
            прокси в профиле подключён
          </li>
        </ul>
      </Card>
    </SlideShell>
  );
}

export function Slide08() {
  return (
    <SlideShell index={7} eyebrow="шаг 5" number="5">
      <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Всё, можно <span className="text-orange">работать</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Дальше любые промпты и агентные сценарии прямо из VS Code.
      </p>

      <div className="flex flex-col gap-1.5">
        <ReadyRow
          icon={<Shield className="size-3.5 text-orange" strokeWidth={2.2} />}
          title="VPN"
          sub="одна страна, не переключаем"
        />
        <ReadyRow
          icon={<VsCodeMark size={14} />}
          title="VS Code + Claude Code"
          sub="рабочее место"
        />
        <ReadyRow
          icon={<PlaywrightMark size={14} />}
          title="Playwright MCP"
          sub="так Claude Code открывает сайты"
        />
        <ReadyRow
          icon={<DolphinMark size={14} />}
          title="Dolphin Anty"
          sub="отдельный профиль и прокси"
        />
        <ReadyRow
          icon={<ClaudeMark size={14} />}
          title="Claude без блокировок"
          sub="связка собрана"
        />
      </div>
    </SlideShell>
  );
}

function ReadyRow({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <Card className="flex items-center gap-2.5 py-2">
      <span className="flex size-7 items-center justify-center rounded-md bg-studio">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-semibold">{title}</p>
        <p className="text-[11px] text-muted">{sub}</p>
      </div>
      <span className="size-2 rounded-full bg-green" />
    </Card>
  );
}

export function Slide09() {
  return (
    <SlideShell index={8} eyebrow="инструкция целиком">
      <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance">
        Полный разбор, в <span className="text-orange">Telegram</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-muted">
        Сохрани этот пост. Инструкция целиком у меня в канале.
      </p>

      <Card className="flex flex-col gap-2">
        <p className="text-[11px] font-semibold tracking-wide text-orange uppercase">закреплено</p>
        <p className="text-[13px] font-semibold">Полная инструкция: Claude из России без блокировок</p>
        <ul className="space-y-1 text-[11px] text-muted">
          <li>Что делать, если просит подтвердить вход</li>
          <li>Какой прокси брать и где</li>
          <li>Готовый системный промпт</li>
          <li>Частые ошибки при настройке</li>
        </ul>
      </Card>

      <div className="flex items-center justify-between rounded-lg bg-fg px-3 py-2.5 text-surface">
        <div className="flex items-center gap-2">
          <Bookmark className="size-3.5" strokeWidth={2.2} />
          <span className="text-[12px] font-semibold">Сохрани этот пост</span>
        </div>
        <span className="text-[12px] font-semibold text-orange">@myspacet_ai</span>
      </div>
    </SlideShell>
  );
}

export const SLIDES = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
];
