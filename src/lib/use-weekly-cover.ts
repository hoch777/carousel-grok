import { useEffect, useState } from "react";
import { resolveWeeklyCover } from "./cover-photo";

export function useWeeklyCoverPhoto() {
  const [url, setUrl] = useState(
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1080&h=1350&q=80",
  );

  useEffect(() => {
    let alive = true;
    resolveWeeklyCover().then((next) => {
      if (alive) setUrl(next);
    });
    return () => {
      alive = false;
    };
  }, []);

  return url;
}
