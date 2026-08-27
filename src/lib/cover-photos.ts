/** Weekly cover photo. Swap COVER_PHOTOS for Cloudinary URLs when the folder is ready. */

export const CLOUDINARY = {
  cloudName: "",
  folder: "",
};

export type CoverPhoto = {
  id: string;
  url: string;
};

/** Fallback pool until Cloudinary folder is connected. One photo per ISO week. */
export const COVER_PHOTOS: CoverPhoto[] = [
  {
    id: "window-read",
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "laptop-warm",
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "street-walk",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "desk-hands",
    url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cafe-light",
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "linen-morning",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];

export function isoWeekIndex(date = new Date()): number {
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return utc.getUTCFullYear() * 53 + week;
}

export function getWeeklyCoverPhoto(date = new Date()): CoverPhoto {
  const photos = COVER_PHOTOS;
  if (photos.length === 0) {
    throw new Error("COVER_PHOTOS is empty");
  }
  const index = isoWeekIndex(date) % photos.length;
  return photos[index]!;
}
