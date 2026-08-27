# myspacet-carousel

Скилл дизайн-системы каруселей **@myspacet_ai** для Claude Code и Codex.

## Установка

### Claude Code
Скопируй папку в скиллы проекта или пользователя:

```bash
cp -R myspacet-carousel ~/.claude/skills/myspacet-carousel
# или в репо:
cp -R myspacet-carousel .claude/skills/myspacet-carousel
```

### Codex / универсальный Agents
```bash
cp -R myspacet-carousel ~/.agents/skills/myspacet-carousel
```

Либо: `npx skills add <path-or-repo>@myspacet-carousel` если опубликуешь репозиторий.

## Что внутри

- `SKILL.md` — правила, сетка, голос, QA
- `references/tokens.md` — цвета и типографика
- `references/icons.md` — Lucide + SVG брендов (Claude burst, VS Code, Dolphin D, Playwright)

Агент читает `SKILL.md` сам, когда просят карусель / пересбор слайдов.
