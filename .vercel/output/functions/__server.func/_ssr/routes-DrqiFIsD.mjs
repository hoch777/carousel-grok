import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MessageCircle, c as Globe, d as CircleAlert, f as ChevronRight, g as ArrowRight, h as Bookmark, i as Send, l as CircleX, m as Check, n as Terminal, o as Lock, p as ChevronLeft, r as Shield, s as Heart, u as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrqiFIsD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ClaudeMark({ className, size = 18 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 1.4 14.7 9.3 22.6 12 14.7 14.7 12 22.6 9.3 14.7 1.4 12 9.3 9.3 12 1.4Z" })
	});
}
function VsCodeMark({ className, size = 18 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#0078D4",
			d: "M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.275.065L.191 7.404a1.002 1.002 0 0 0-.033 1.432l3.796 3.47-3.796 3.47a1.002 1.002 0 0 0 .033 1.432l1.46 1.337a1 1 0 0 0 1.275.065l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861-8.04-6.12v-.656l8.04-6.12v12.896z"
		})
	});
}
function DolphinMark({ className, size = 18 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "6",
			fill: "#6C5CE7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M8.2 6.4h4.15c2.55 0 4.15 1.45 4.15 3.7 0 1.55-.8 2.7-2.15 3.25L16.7 17.6h-2.45l-2.15-3.95H10.3V17.6H8.2V6.4zm2.1 5.35h1.85c1.2 0 1.95-.65 1.95-1.65s-.75-1.6-1.95-1.6H10.3v3.25z"
		})]
	});
}
function PlaywrightMark({ className, size = 18 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "8",
				cy: "10",
				r: "5.2",
				fill: "#2EAD33"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "10",
				r: "5.2",
				fill: "#D44B4B"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "15.2",
				r: "5.2",
				fill: "#2B7DE9"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SlideShell({ children, index, eyebrow, number }) {
	const pct = (index + 1) / 9 * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative flex shrink-0 flex-col overflow-hidden bg-bg text-fg",
		style: {
			width: 420,
			height: 525
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between px-7 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pt-1.5 text-[10px] font-semibold tracking-[0.14em] text-muted uppercase",
					children: eyebrow
				}), number ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-extrabold text-[40px] leading-none tracking-tight text-orange tabular-nums",
					children: number
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 flex-col gap-3 px-7 pt-3 pb-14",
				children
			}),
			!(index === 8) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-0 right-0 bottom-0 z-10 flex w-10 items-center justify-center",
				style: { background: "linear-gradient(to right, transparent, rgb(0 0 0 / 0.04))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-5 text-fg/25",
					strokeWidth: 2.4
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-0 bottom-0 left-0 z-20 flex items-center gap-2.5 px-7 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[3px] flex-1 overflow-hidden rounded-full bg-fg/8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-orange",
						style: { width: `${pct}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] font-medium text-fg/30 tabular-nums",
					children: [
						index + 1,
						"/",
						9
					]
				})]
			})
		]
	});
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg border border-border bg-surface p-3 shadow-[0_1px_2px_rgb(17_17_17/0.04)]", className),
		children
	});
}
function Tag({ children, tone = "gray" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold", {
			gray: "bg-studio text-muted",
			orange: "bg-orange-soft text-orange",
			green: "bg-green-soft text-green",
			red: "bg-red-soft text-red"
		}[tone]),
		children
	});
}
function IconChip({ children, tone = "orange" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex size-6 shrink-0 items-center justify-center rounded-md", {
			orange: "bg-orange-soft text-orange",
			sage: "bg-sage-soft text-sage",
			green: "bg-green-soft text-green",
			red: "bg-red-soft text-red"
		}[tone]),
		children
	});
}
function Slide01() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 0,
		eyebrow: "связка, которой пользуюсь сам",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: [
					"Полный ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-orange",
						children: "Claude"
					}),
					" в России без блокировок"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted text-pretty",
				children: "6 шагов, 10 минут. На текущий момент работает стабильно."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChip, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-3.5",
							strokeWidth: 2.2
						}) }),
						title: "VPN",
						sub: "одна страна"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChip, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VsCodeMark, { size: 14 }) }),
						title: "VS Code",
						sub: "Claude Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChip, {
							tone: "sage",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, { size: 14 })
						}),
						title: "Claude",
						sub: "готов к работе"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChip, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 14 }) }),
						title: "Dolphin",
						sub: "профиль + прокси"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center gap-2 rounded-lg bg-orange-soft px-3 py-2.5 text-[12px] font-medium text-orange",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
					className: "size-3.5 shrink-0",
					strokeWidth: 2.2
				}), "Сохрани этот пост. Настроишь один раз и забудешь."]
			})
		]
	});
}
function FlowNode({ icon, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex items-center gap-2 p-2.5",
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted",
				children: sub
			})]
		})]
	});
}
function Slide02() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 1,
		eyebrow: "без лишних обещаний",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Что в связке стоит ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "денег"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Говорю сразу, чтобы вы не тратили время зря."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-1.5 p-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
									className: "size-3.5 text-orange",
									strokeWidth: 2.2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold",
									children: "VPN на ПК"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] leading-snug text-muted",
								children: "Общий, на всю систему. Включается один раз перед стартом."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "платно" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-1.5 p-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold",
									children: "Dolphin Anty"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] leading-snug text-muted",
								children: "Минимальный тариф. Без API Playwright не свяжется с браузером."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								tone: "orange",
								children: "мин. тариф"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-1.5 p-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, {
									size: 14,
									className: "text-orange"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold",
									children: "Claude"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] leading-snug text-muted",
								children: "Нужен минимум Pro. На бесплатном тарифе связка не поедет."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								tone: "orange",
								children: "от Pro"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-start gap-2 border-green/25 bg-green-soft p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "mt-0.5 size-4 shrink-0 text-green",
					strokeWidth: 2.2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-semibold text-green",
					children: "Прокси покупать не нужно"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] leading-snug text-muted",
					children: "В профиль Dolphin можно прописать тот же прокси, что стоит у вас в VPN."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted",
						children: "бесплатно"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
						tone: "green",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VsCodeMark, { size: 10 }), " VS Code"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
						tone: "green",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, { size: 10 }), " Claude Code"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
						tone: "green",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaywrightMark, { size: 10 }), " Playwright MCP"]
					})
				]
			})
		]
	});
}
function Slide03() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 2,
		eyebrow: "шаг 0",
		number: "0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Включи VPN и больше ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "не трогай"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Выбери одну страну и оставайся на ней. Я сижу на Казахстане."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-semibold",
					children: "Одна страна всё время"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: "green",
					children: "стабильно"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "KZ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "KZ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "KZ" })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-semibold",
					children: "Прыжки между странами"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: "red",
					children: "проверки"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "KZ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-red/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "DE" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-red/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "NL" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-red/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Country, { children: "US" })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] leading-relaxed text-muted",
				children: "Чем спокойнее окружение, тем меньше вопросов к вашему входу."
			})
		]
	});
}
function Country({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 rounded-md bg-studio px-2 py-1 text-[11px] font-semibold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
			className: "size-3 text-sage",
			strokeWidth: 2.2
		}), children]
	});
}
function Slide04() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 3,
		eyebrow: "шаг 1",
		number: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Поставь Claude Code в ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "VS Code"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VsCodeMark, { size: 14 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px]",
						children: "+"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, {
						size: 14,
						className: "text-orange"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Сначала VPN, и только потом запуск. Claude живёт прямо в редакторе кода."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "font-mono text-[11px] leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-[10px] text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-red" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-orange" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-green" }),
								"Visual Studio Code"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "green",
							children: "VPN · KZ"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "// терминал прямо в редакторе"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "$"
					}), " npm i -g @anthropic-ai/claude-code"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "$"
					}), " claude"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-green",
						children: [">", " Claude Code готов к работе"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-start gap-2 p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
					className: "mt-0.5 size-3.5 shrink-0 text-sage",
					strokeWidth: 2.2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] leading-snug text-muted",
					children: "Проверьте метку VPN до запуска. Claude Code запоминает окружение первого входа."
				})]
			})
		]
	});
}
function Slide05() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 4,
		eyebrow: "шаг 2",
		number: "2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["В VS Code расширение ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "не сработает"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Обычно ИИ-агент работает как пользователь прямо в вашем браузере. В VS Code это эмуляция Claude Code, и расширение браузера там недоступно. Вместо него ставим Playwright."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, {
								size: 14,
								className: "text-muted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-semibold",
								children: "Claude for Chrome"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
							className: "size-4 text-red",
							strokeWidth: 2.2
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] leading-snug text-muted",
						children: "Работает как вы: открывает сайты в вашем браузере. Но только в Chrome."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaywrightMark, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-semibold",
								children: "Playwright MCP"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-4 text-green",
							strokeWidth: 2.2
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] leading-snug text-muted",
						children: "То же самое, но изнутри VS Code. Это и есть руки для Claude Code."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "font-mono text-[11px] leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[10px] text-muted",
						children: "терминал VS Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "$"
					}), " claude mcp add playwright npx @playwright/mcp@latest"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] text-muted",
						children: "Одна строка, и VS Code сам поставит плагин."
					})
				]
			})
		]
	});
}
function Slide06() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 5,
		eyebrow: "шаг 3",
		number: "3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Отдельный профиль только под ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "Claude"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "В Dolphin Anty создаём новый профиль и прописываем прокси на ту же страну, что и VPN. Отдельный покупать не нужно, подойдёт тот же."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold",
						children: "Dolphin Anty"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: "green",
					children: "READY"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-red/25 bg-red-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center gap-1.5 text-red",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						className: "size-3.5",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-semibold",
						children: "Только для Claude"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] leading-snug text-muted",
					children: "Даже веб-версию открывай в этом же профиле. Больше в нём ничего не открывай: ни почту, ни соцсети, ни российские сайты."
				})]
			})
		]
	});
}
function Slide07() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 6,
		eyebrow: "шаг 4",
		number: "4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[24px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Две настройки, без которых ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "не поедет"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Прописываем их в системном промпте, постоянной инструкции, которую Claude читает перед каждой задачей."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1.5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-5 items-center justify-center rounded-md bg-orange text-[10px] font-bold text-surface",
						children: "1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-semibold",
						children: "Только браузер Dolphin"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 16 })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-snug text-muted",
				children: "Playwright MCP работает только через браузер Dolphin Anty. Встроенный браузер, нет."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1.5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-5 items-center justify-center rounded-md bg-orange text-[10px] font-bold text-surface",
					children: "2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-semibold",
					children: "Проверка перед запуском"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-1 text-[11px] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-3 text-green",
						strokeWidth: 2.6
					}), "VPN включён и на нужной стране"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-3 text-green",
						strokeWidth: 2.6
					}), "прокси в профиле подключён"]
				})]
			})] })
		]
	});
}
function Slide08() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 7,
		eyebrow: "шаг 5",
		number: "5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Всё, можно ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "работать"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Дальше любые промпты и агентные сценарии прямо из VS Code."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-3.5 text-orange",
							strokeWidth: 2.2
						}),
						title: "VPN",
						sub: "одна страна, не переключаем"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VsCodeMark, { size: 14 }),
						title: "VS Code + Claude Code",
						sub: "рабочее место"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaywrightMark, { size: 14 }),
						title: "Playwright MCP",
						sub: "руки для браузера"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 14 }),
						title: "Dolphin Anty",
						sub: "отдельный профиль и прокси"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, {
							size: 14,
							className: "text-orange"
						}),
						title: "Claude без блокировок",
						sub: "система собрана"
					})
				]
			})
		]
	});
}
function ReadyRow({ icon, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex items-center gap-2.5 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-7 items-center justify-center rounded-md bg-studio",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted",
					children: sub
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-green" })
		]
	});
}
function Slide09() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		index: 8,
		eyebrow: "инструкция целиком",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[26px] leading-[1.12] font-extrabold tracking-tight text-balance",
				children: ["Полный разбор, в ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-orange",
					children: "Telegram"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted",
				children: "Сохрани этот пост. Инструкция целиком у меня в канале."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-wide text-orange uppercase",
						children: "закреплено"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold",
						children: "Полная инструкция: Claude из России без блокировок"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1 text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Что делать, если просит подтвердить вход" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Какой прокси брать и где" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Готовый системный промпт" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Частые ошибки при настройке" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between rounded-lg bg-fg px-3 py-2.5 text-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "size-3.5",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px] font-semibold",
						children: "Сохрани этот пост"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] font-semibold text-orange",
					children: "@myspacet_ai"
				})]
			})
		]
	});
}
var SLIDES = [
	Slide01,
	Slide02,
	Slide03,
	Slide04,
	Slide05,
	Slide06,
	Slide07,
	Slide08,
	Slide09
];
function IgFrame() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const startX = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		setIndex(Math.max(0, Math.min(8, next)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-[420px] max-w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_rgb(17_17_17/0.12)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 border-b border-border px-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 items-center justify-center rounded-full bg-orange text-[11px] font-extrabold text-surface",
					children: "M"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold",
						children: "myspacet_ai"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted",
						children: "карусель · 9 слайдов"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-bg",
				style: {
					width: 420,
					height: 525
				},
				onPointerDown: (e) => {
					startX.current = e.clientX;
				},
				onPointerUp: (e) => {
					if (startX.current == null) return;
					const dx = e.clientX - startX.current;
					startX.current = null;
					if (dx < -40) go(index + 1);
					if (dx > 40) go(index - 1);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex transition-transform duration-300 ease-out",
						style: { transform: `translateX(${-index * 420}px)` },
						children: SLIDES.map((Slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {}, i))
					}),
					index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Назад",
						onClick: () => go(index - 1),
						className: "absolute top-1/2 left-2 z-30 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-fg shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}) : null,
					index < 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Дальше",
						onClick: () => go(index + 1),
						className: "absolute top-1/2 right-2 z-30 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-fg shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center gap-1.5 py-2.5",
				children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Слайд ${i + 1}`,
					onClick: () => go(i),
					className: cn("h-1.5 rounded-full transition-all", i === index ? "w-4 bg-orange" : "w-1.5 bg-border")
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 px-3 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-5",
						strokeWidth: 1.8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "size-5",
						strokeWidth: 1.8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
						className: "size-5",
						strokeWidth: 1.8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "ml-auto size-5",
						strokeWidth: 1.8
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-3 pb-3 text-[13px] leading-snug",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "myspacet_ai"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Полный Claude в России без блокировок. Свайпни."
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-[100dvh] bg-studio px-4 py-8 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.14em] text-orange uppercase",
						children: "@myspacet_ai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-extrabold tracking-tight text-balance md:text-4xl",
						children: "Светлая карусель с настоящими иконками"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-[15px] leading-relaxed text-muted text-pretty",
						children: "Lucide для UI. Официальные SVG для Claude, VS Code, Dolphin и Playwright. Не буквы, не эмодзи."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 grid max-w-md grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "size-4 text-orange",
									strokeWidth: 2.2
								}),
								label: "VPN",
								source: "Lucide Shield"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VsCodeMark, { size: 16 }),
								label: "VS Code",
								source: "логотип бренда"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeMark, {
									size: 16,
									className: "text-orange"
								}),
								label: "Claude",
								source: "символ Anthropic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DolphinMark, { size: 16 }),
								label: "Dolphin",
								source: "логотип Anty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaywrightMark, { size: 16 }),
								label: "Playwright",
								source: "логотип Microsoft"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IgFrame, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-12 max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-sm font-semibold text-muted",
				children: "Все 9 слайдов"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-4 overflow-x-auto pb-4",
				children: SLIDES.map((Slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 overflow-hidden rounded-xl border border-border shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {})
				}, i))
			})]
		})]
	});
}
function Legend({ icon, label, source }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-7 items-center justify-center rounded-md bg-bg",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12px] font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] text-muted",
			children: source
		})] })]
	});
}
//#endregion
export { Home as component };
