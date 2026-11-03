export type Role = "super" | "admin" | "editor" | "media" | "viewer";

export type ArticleStatus = "draft" | "in_review" | "ready" | "published" | "archived";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  status: ArticleStatus;
  authorName: string;
  coverUrl: string;
  publishedAt: string | null;
  updatedAt: string;
};

export type Announcement = {
  id: string;
  title: string;
  body: string;
  active: boolean;
  publishedAt: string;
};

export type SchoolEvent = {
  id: string;
  title: string;
  summary: string;
  startsOn: string;
  endsOn: string;
  place: string;
  category: string;
  visible: boolean;
};

export type Programme = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  body: string;
  subjects: string;
};

export type Leader = {
  id: string;
  name: string;
  role: string;
  note: string;
};

export type House = {
  id: string;
  name: string;
  summary: string;
};

export type Milestone = {
  id: string;
  year: string;
  title: string;
  body: string;
};

export type Photo = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type Album = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  photos: Photo[];
};

export type EnquiryStatus = "new" | "read" | "archived";

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  audience: string;
  subject: string;
  message: string;
  createdAt: string;
  status: EnquiryStatus;
};

export type EditablePage = {
  id: string;
  label: string;
  body: string;
};

export type SiteSettings = {
  phone: string;
  email: string;
  address: string;
  poBox: string;
  officeHours: string;
  facebook: string;
  youtube: string;
  workerUrl: string;
  cloudName: string;
  uploadPreset: string;
  useRemotePublic: boolean;
};

export type ExtraStaff = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type Session = {
  staffId: string;
  name: string;
  email: string;
  role: Role;
  mode: "preview" | "worker";
  token?: string;
};

export type CmsData = {
  settings: SiteSettings;
  pages: EditablePage[];
  news: Article[];
  announcements: Announcement[];
  events: SchoolEvent[];
  programmes: Programme[];
  leaders: Leader[];
  houses: House[];
  milestones: Milestone[];
  albums: Album[];
  enquiries: Enquiry[];
  staff: ExtraStaff[];
};
