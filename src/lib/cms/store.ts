import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Article, CmsData, Enquiry, ExtraStaff, Photo, Role, SiteSettings } from "./types";
import { createSeed } from "./seed";
import { allowedStatuses } from "./access";

type CmsStore = CmsData & {
  updateSettings: (patch: Partial<SiteSettings>) => void;
  setPage: (id: string, body: string) => void;
  saveArticle: (article: Article, role: Role) => boolean;
  deleteArticle: (id: string, role: Role) => void;
  saveAnnouncement: (item: CmsData["announcements"][number]) => void;
  deleteAnnouncement: (id: string) => void;
  saveEvent: (item: CmsData["events"][number]) => void;
  deleteEvent: (id: string) => void;
  saveProgramme: (item: CmsData["programmes"][number]) => void;
  deleteProgramme: (id: string) => void;
  saveLeader: (item: CmsData["leaders"][number]) => void;
  deleteLeader: (id: string) => void;
  saveHouse: (item: CmsData["houses"][number]) => void;
  saveMilestone: (item: CmsData["milestones"][number]) => void;
  deleteMilestone: (id: string) => void;
  saveAlbum: (item: CmsData["albums"][number]) => void;
  deleteAlbum: (id: string) => void;
  addPhoto: (albumId: string, photo: Photo) => void;
  deletePhoto: (albumId: string, photoId: string) => void;
  addEnquiry: (item: Enquiry) => void;
  setEnquiryStatus: (id: string, status: Enquiry["status"]) => void;
  addStaff: (person: ExtraStaff) => string | null;
  removeStaff: (id: string) => void;
  replacePublic: (bundle: Partial<CmsData>) => void;
  resetContent: () => void;
};

function upsert<T extends { id: string }>(list: T[], item: T) {
  const index = list.findIndex((entry) => entry.id === item.id);
  if (index === -1) return [item, ...list];
  const next = list.slice();
  next[index] = item;
  return next;
}

export const useCms = create<CmsStore>()(
  persist(
    (set, get) => ({
      ...createSeed(),
      updateSettings: (patch) => set({ settings: { ...get().settings, ...patch } }),
      setPage: (id, body) =>
        set({ pages: get().pages.map((page) => (page.id === id ? { ...page, body } : page)) }),
      saveArticle: (article, role) => {
        const statuses = allowedStatuses(role);
        if (!statuses.includes(article.status)) return false;
        const existing = get().news.find((item) => item.id === article.id);
        if (
          existing &&
          role === "media" &&
          (existing.status === "published" || existing.status === "ready" || existing.status === "archived")
        ) {
          return false;
        }
        if (existing && role === "editor" && (existing.status === "published" || existing.status === "archived")) {
          return false;
        }
        set({ news: upsert(get().news, article) });
        return true;
      },
      deleteArticle: (id, role) => {
        if (role !== "super" && role !== "admin") return;
        set({ news: get().news.filter((item) => item.id !== id) });
      },
      saveAnnouncement: (item) => set({ announcements: upsert(get().announcements, item) }),
      deleteAnnouncement: (id) => set({ announcements: get().announcements.filter((item) => item.id !== id) }),
      saveEvent: (item) => set({ events: upsert(get().events, item) }),
      deleteEvent: (id) => set({ events: get().events.filter((item) => item.id !== id) }),
      saveProgramme: (item) => set({ programmes: upsert(get().programmes, item) }),
      deleteProgramme: (id) => set({ programmes: get().programmes.filter((item) => item.id !== id) }),
      saveLeader: (item) => set({ leaders: upsert(get().leaders, item) }),
      deleteLeader: (id) => set({ leaders: get().leaders.filter((item) => item.id !== id) }),
      saveHouse: (item) => set({ houses: upsert(get().houses, item) }),
      saveMilestone: (item) => set({ milestones: upsert(get().milestones, item) }),
      deleteMilestone: (id) => set({ milestones: get().milestones.filter((item) => item.id !== id) }),
      saveAlbum: (item) => set({ albums: upsert(get().albums, item) }),
      deleteAlbum: (id) => set({ albums: get().albums.filter((item) => item.id !== id) }),
      addPhoto: (albumId, photo) =>
        set({
          albums: get().albums.map((album) =>
            album.id === albumId ? { ...album, photos: [photo, ...album.photos] } : album,
          ),
        }),
      deletePhoto: (albumId, photoId) =>
        set({
          albums: get().albums.map((album) =>
            album.id === albumId
              ? { ...album, photos: album.photos.filter((photo) => photo.id !== photoId) }
              : album,
          ),
        }),
      addEnquiry: (item) => set({ enquiries: [item, ...get().enquiries] }),
      setEnquiryStatus: (id, status) =>
        set({
          enquiries: get().enquiries.map((item) => (item.id === id ? { ...item, status } : item)),
        }),
      addStaff: (person) => {
        const email = person.email.trim().toLowerCase();
        if (get().staff.some((member) => member.email === email)) return "That email is already on the desk.";
        set({ staff: [...get().staff, { ...person, email }] });
        return null;
      },
      removeStaff: (id) => set({ staff: get().staff.filter((member) => member.id !== id) }),
      replacePublic: (bundle) => {
        const current = get().settings;
        set({
          news: bundle.news?.length ? bundle.news : get().news,
          announcements: bundle.announcements?.length ? bundle.announcements : get().announcements,
          events: bundle.events?.length ? bundle.events : get().events,
          programmes: bundle.programmes?.length ? bundle.programmes : get().programmes,
          leaders: bundle.leaders?.length ? bundle.leaders : get().leaders,
          houses: bundle.houses?.length ? bundle.houses : get().houses,
          milestones: bundle.milestones?.length ? bundle.milestones : get().milestones,
          albums: bundle.albums?.length ? bundle.albums : get().albums,
          pages: bundle.pages?.length ? bundle.pages : get().pages,
          settings: bundle.settings
            ? {
                ...current,
                ...bundle.settings,
                workerUrl: current.workerUrl,
                cloudName: current.cloudName,
                uploadPreset: current.uploadPreset,
                useRemotePublic: current.useRemotePublic,
              }
            : current,
        });
      },
      resetContent: () => {
        const settings = get().settings;
        set({ ...createSeed(), settings });
      },
    }),
    {
      name: "upshs-cms-v1",
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        settings: state.settings,
        pages: state.pages,
        news: state.news,
        announcements: state.announcements,
        events: state.events,
        programmes: state.programmes,
        leaders: state.leaders,
        houses: state.houses,
        milestones: state.milestones,
        albums: state.albums,
        enquiries: state.enquiries,
        staff: state.staff,
      }),
    },
  ),
);
