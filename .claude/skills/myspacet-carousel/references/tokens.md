# Tokens

Copy into CSS or Tailwind `@theme`. Do not invent extra hues.

```css
:root {
  --bg: #F4F4F2;
  --surface: #FFFFFF;
  --fg: #111111;
  --muted: #5A5A5A;
  --orange: #FF6B2C;
  --orange-soft: #FFF0E8;
  --sage: #6B8E6B;
  --sage-soft: #EBF1EB;
  --green: #2E9B5E;
  --green-soft: #E6F6EC;
  --red: #E03E3E;
  --red-soft: #FDECEC;
  --border: #E8E8E6;
  --font: "Plus Jakarta Sans", system-ui, sans-serif;
  --slide-w: 420px;
  --slide-h: 525px;
  --pad-x: 28px;
  --radius-card: 14px;
}
```

Type scale (px, at 420 width):

| Role | Size | Weight | Color |
|---|---|---|---|
| Eyebrow | 10 | 600 | muted, uppercase, ls 0.14em |
| H1 | 24–26 | 800 | fg, one word orange |
| Lead | 13 | 400 | muted, lh 1.5 |
| Card title | 12 | 600 | fg |
| Card body | 11 | 400 | muted |
| Tag | 10 | 600 | tone |
| Progress | 11 | 500 | fg 30% |
| Watermark | 200 | 800 | orange 10% |

Spacing: 4/8. Card gap 8. Content gap 12. Bottom safe 56 for progress.
