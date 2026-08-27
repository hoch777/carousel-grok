const STORAGE_KEY = "myspacet-cover-week";

const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD as string | undefined;
const TAG = (import.meta.env.VITE_CLOUDINARY_TAG as string | undefined) ?? "myspacet-hook";
const PUBLIC_IDS = (import.meta.env.VITE_CLOUDINARY_PUBLIC_IDS as string | undefined)
  ?.split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** Warm editorial fallbacks until Cloudinary folder/tag is connected. */
const FALLBACK = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1080&h=1350&q=80",
  "https://images.unsplash.com/photo-1499750310107-5fefc47bd6d0?auto=format&fit=crop&w=1080&h=1350&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080&h=1350&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1080&h=1350&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1080&h=1350&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1080&h=1350&q=80",
];

export function isoWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

function hashPick(seed: string, length: number) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % length;
}

export function cloudinaryUrl(publicId: string) {
  if (!CLOUD) return publicId;
  return `https://res.cloudinary.com/${CLOUD}/image/upload/c_fill,ar_4:5,w_1080,h_1350,g_auto,f_auto,q_auto/${publicId}`;
}

async function listFromCloudinary(): Promise<string[]> {
  if (PUBLIC_IDS?.length && CLOUD) return PUBLIC_IDS.map(cloudinaryUrl);
  if (!CLOUD) return [];
  const res = await fetch(`https://res.cloudinary.com/${CLOUD}/image/list/${TAG}.json`);
  if (!res.ok) return [];
  const data = (await res.json()) as { resources?: { public_id: string }[] };
  return (data.resources ?? []).map((r) => cloudinaryUrl(r.public_id));
}

export async function resolveWeeklyCover(): Promise<string> {
  const week = isoWeekKey();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw) as { week: string; url: string };
      if (saved.week === week && saved.url) return saved.url;
    }
  } catch {
    /* ignore */
  }

  let pool = FALLBACK;
  try {
    const remote = await listFromCloudinary();
    if (remote.length) pool = remote;
  } catch {
    /* keep fallback */
  }

  const url = pool[hashPick(week, pool.length)] ?? pool[0];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ week, url }));
  } catch {
    /* ignore */
  }
  return url;
}
