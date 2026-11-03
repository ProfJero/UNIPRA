import { format, parseISO } from "date-fns";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatDay(iso: string | null | undefined) {
  if (!iso) return "—";
  const date = iso.length <= 10 ? parseISO(iso) : new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return format(date, "d MMMM yyyy");
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function paragraphs(text: string) {
  return text
    .trim()
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function isUpcoming(startsOn: string) {
  return startsOn >= todayISO();
}
