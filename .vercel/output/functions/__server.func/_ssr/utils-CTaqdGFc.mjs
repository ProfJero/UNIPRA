import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CTaqdGFc.js
var foundingBody = `University Practice Senior High School was the brain-child of the then Faculty of Education at the University of Cape Coast. The Ghana Education Service accepted the idea, and the school was conceived as a practice school where students reading education at the University could do their teaching practice.

It was, from the start, to be run on the same lines as other public senior high schools. The University was to provide the physical structures and equipment. The Ghana Education Service was to provide the teaching and non-teaching staff.

The school was formally opened on 13 October 1976 with 70 A-level students. A further 42 students were admitted to the Lower Sixth to read General Arts and Science. The pioneers numbered 112. There were twelve classrooms and a science laboratory.

General Arts and Science were the only electives at the opening. The young school relied heavily on the University of Cape Coast, especially its libraries and science laboratories.`;
function createSeed() {
	return {
		settings: {
			phone: "+233 55 253 7260",
			email: "universitypracticeshs@ges.gov.gh",
			address: "University of Cape Coast campus, Cape Coast, Central Region, Ghana",
			poBox: "P.O. Box UC 092, Cape Coast",
			officeHours: "Monday to Friday, 7:30 am – 3:30 pm",
			facebook: "https://www.facebook.com/UPSHS/",
			youtube: "",
			workerUrl: "",
			cloudName: "",
			uploadPreset: "",
			useRemotePublic: false
		},
		pages: [
			{
				id: "home-intro",
				label: "Home introduction",
				body: "University Practice Senior High School — UNIPRA — stands on the campus of the University of Cape Coast. Opened in 1976, it is a mixed, day and boarding, Category B public school of the Cape Coast Metropolis. Its motto is Service to the Community."
			},
			{
				id: "history-intro",
				label: "History introduction",
				body: "The record below follows the school’s own earlier website, its public profile, and named press reports. Where a detail is only an oral account, it is described as such. The administration can correct this page from the staff desk."
			},
			{
				id: "admissions-intro",
				label: "Admissions introduction",
				body: "Admission to University Practice Senior High School follows the national Computerised School Selection and Placement System and the Free Senior High School policy. This website does not sell forms, collect fees, or take placement requests."
			},
			{
				id: "alumni-intro",
				label: "Alumni introduction",
				body: "Old students of UNIPRA are widely known as UPOSANS. The students’ union is UPOSA. This page is for the association’s public life — reunions, service, and news the school is prepared to stand behind. It is not a directory of individual old students."
			}
		],
		news: [
			{
				id: "news-jubilee",
				slug: "fiftieth-year-1976-2026",
				title: "UNIPRA in its fiftieth year",
				excerpt: "The school opened on 13 October 1976. The year 2026 marks fifty years of Service to the Community.",
				body: `University Practice Senior High School was formally opened on 13 October 1976. In 2026 the school completes fifty years on the campus of the University of Cape Coast.

Old students have, in public, been organising toward a golden jubilee homecoming in Cape Coast. Official dates, venues and programmes will be published on this page by the school when the administration confirms them. Until then, please treat social-media announcements as community conversation, not as an instruction from the school.

Parents, students and partners who need a verified notice should use the contacts on this website or the school’s Facebook page.`,
				category: "School News",
				status: "published",
				authorName: "School administration",
				coverUrl: "/media/coast.jpg",
				publishedAt: "2026-10-01",
				updatedAt: "2026-10-01"
			},
			{
				id: "news-hosa",
				slug: "head-of-state-award-bronze-2022",
				title: "Seventy-two students received the Head of State Award bronze",
				excerpt: "In July 2022 the Ghanaian Times reported that 72 UPSHS students were decorated for voluntary community service.",
				body: `In July 2022 the Ghanaian Times reported that 72 students of University Practice Senior High School received certificates and bronze medals under the Head of State Award scheme.

The students had gone on expedition to deprived communities in the Central Region, taking part in communal work outside the classroom. The Headmaster, Charles Agyapong Boamah, presented the awards with other dignitaries and urged the students to carry the same spirit of service beyond the school.

The report sits squarely on the motto. Service to the Community is not a line under the crest only; it is work the school has asked of its students in public.`,
				category: "Community",
				status: "published",
				authorName: "School administration",
				coverUrl: "/media/flame.jpg",
				publishedAt: "2022-07-25",
				updatedAt: "2022-07-25"
			},
			{
				id: "news-founding",
				slug: "opened-13-october-1976",
				title: "Opened with 112 pioneers",
				excerpt: "Twelve classrooms, one science laboratory, and a charge from the Faculty of Education and the Ghana Education Service.",
				body: foundingBody,
				category: "Heritage",
				status: "published",
				authorName: "School administration",
				coverUrl: "/media/flame.jpg",
				publishedAt: "2026-01-15",
				updatedAt: "2026-01-15"
			},
			{
				id: "news-admissions-caution",
				slug: "admissions-are-not-for-sale",
				title: "Admissions are not for sale",
				excerpt: "Placement is through CSSPS. The school does not take money on this website, and it will not ask you to pay a private person for a place.",
				body: `University Practice Senior High School is a public senior high school. Placement is handled through the Computerised School Selection and Placement System under the Free Senior High School policy.

No member of staff is authorised to sell a place. This website has no payment page. If someone calls, writes, or messages you demanding a fee for admission to UNIPRA, do not pay. Contact the school on the official telephone number or email published on the contact page, and if you believe a fraud is in progress, report it.

Documents, dates and the school code used on the CSSPS form should always be checked against the current Ghana Education Service register. The code commonly published for the school is 0030105. Confirm it for the year you are applying.`,
				category: "Announcements",
				status: "published",
				authorName: "School administration",
				coverUrl: "",
				publishedAt: "2026-09-01",
				updatedAt: "2026-09-01"
			}
		],
		announcements: [{
			id: "ann-fraud",
			title: "Do not pay anyone for admission",
			body: "UNIPRA does not sell places. Placement is through CSSPS and Free SHS. This website never asks for mobile-money payments.",
			active: true,
			publishedAt: "2026-09-01"
		}, {
			id: "ann-verify",
			title: "Use the contacts on this website",
			body: "Telephone and email on the contact page are taken from the school’s public listings. The administration will correct them here if they change. Ignore numbers that circulate only on unofficial flyers.",
			active: true,
			publishedAt: "2026-09-01"
		}],
		events: [{
			id: "evt-founders-2027",
			title: "Founders’ Day",
			summary: "The school was formally opened on 13 October 1976. Founders’ Day is observed on that date each year. The 2026 observance has passed; the next date is 13 October 2027. The day’s order of programme is announced by the administration.",
			startsOn: "2027-10-13",
			endsOn: "2027-10-13",
			place: "School campus, Cape Coast",
			category: "School calendar",
			visible: true
		}, {
			id: "evt-jubilee",
			title: "Golden jubilee year",
			summary: "2026 is the fiftieth year since the opening. A public homecoming has been discussed by old students. The school will publish any official jubilee programme on the news page. This entry is a marker for the year, not a confirmed ceremony time.",
			startsOn: "2026-01-01",
			endsOn: "2026-12-31",
			place: "Cape Coast",
			category: "Jubilee",
			visible: true
		}],
		programmes: [
			{
				id: "prog-arts",
				slug: "general-arts",
				name: "General Arts",
				summary: "One of the two electives with which the school opened in 1976.",
				body: "General Arts has been offered since the school opened. Students read a combination drawn from the humanities and social sciences. The precise electives — literature, history, government, economics, geography, languages, religious studies and others — are set by the school for each cohort. Confirm the current combination with the academic office before you rely on it for a CSSPS choice.",
				subjects: "Combinations are set by the school each year from the humanities and social sciences. This page does not invent a fixed elective list."
			},
			{
				id: "prog-science",
				slug: "general-science",
				name: "General Science",
				summary: "Offered from the opening year, alongside General Arts.",
				body: "General Science was offered to the pioneer Lower Sixth in 1976, when the school had a single science laboratory and also used the laboratories of the University of Cape Coast. Science remains a core part of the school’s public identity. Elective combinations for the current year should be confirmed with the academic office and with the GES register.",
				subjects: "Elective science combinations are confirmed by the academic office. The school opened with one laboratory and early support from the University."
			},
			{
				id: "prog-business",
				slug: "business",
				name: "Business",
				summary: "Added after the founding curriculum of Arts and Science.",
				body: "Business was not among the courses at the opening. A 2021 public account by a student leader of the school places its introduction after the early vocational programmes, under a later headmaster. Treat that chronology as oral history until the administration publishes a formal note. Current business electives should be confirmed before placement.",
				subjects: "Accounting, business management and related electives — confirm the live combination with the school."
			},
			{
				id: "prog-visual",
				slug: "visual-arts",
				name: "Visual Arts",
				summary: "A vocational programme added as the school grew beyond Arts and Science.",
				body: "The same 2021 public account credits the first headmaster, Mr S. A. Asante, with adding the vocational programmes — Home Economics and Visual Arts — after the school had opened with only General Arts and Science. The school should confirm that credit, and the subjects currently examined, before this page is treated as a prospectus.",
				subjects: "Art and design electives as currently approved. Confirm before publication to applicants."
			},
			{
				id: "prog-home",
				slug: "home-economics",
				name: "Home Economics",
				summary: "A vocational programme associated with the early widening of the curriculum.",
				body: "Home Economics is publicly described as one of the programmes UNIPRA came to offer after its opening years. As with Visual Arts, the account of who introduced it is oral history and should be confirmed by management. Applicants should use the current GES course register, not this paragraph alone, when selecting a school.",
				subjects: "Home Economics electives as currently approved by the school and GES."
			}
		],
		leaders: [{
			id: "leader-boamah",
			name: "Charles Agyapong Boamah",
			role: "Headmaster",
			note: "Named as Headmaster in the Ghanaian Times (July 2022) and in later public interviews, and listed on the school’s Wikipedia entry. The administration should replace this note if the headship has changed."
		}],
		houses: [
			{
				id: "house-ackah",
				name: "Ackah",
				summary: "One of the six houses of the school."
			},
			{
				id: "house-densu",
				name: "Densu",
				summary: "One of the six houses of the school."
			},
			{
				id: "house-tano",
				name: "Tano",
				summary: "One of the six houses of the school."
			},
			{
				id: "house-nkrumah",
				name: "Nkrumah",
				summary: "One of the six houses of the school."
			},
			{
				id: "house-pra",
				name: "Pra",
				summary: "One of the six houses of the school."
			},
			{
				id: "house-volta",
				name: "Volta",
				summary: "One of the six houses of the school."
			}
		],
		milestones: [
			{
				id: "ms-idea",
				year: "Before 1976",
				title: "A practice school for the University",
				body: "The Faculty of Education at the University of Cape Coast wanted a school where its students could do their teaching practice. The Ghana Education Service accepted the proposal. The school would still be run as a public senior high school: the University providing structures and equipment, GES providing staff."
			},
			{
				id: "ms-1976",
				year: "13 October 1976",
				title: "Formal opening",
				body: "Seventy A-level students entered, and 42 more joined the Lower Sixth in General Arts and Science. One hundred and twelve pioneers. Twelve classrooms. One science laboratory."
			},
			{
				id: "ms-curriculum",
				year: "The early years",
				title: "Arts, Science, then a wider curriculum",
				body: "Only General Arts and Science were offered at the start, with heavy use of the University’s libraries and laboratories. Vocational programmes and, later, Business were added as the school grew. The names attached to those decisions in student oral history — including a first headmaster, Mr S. A. Asante — should be confirmed by the school before they are treated as the official succession."
			},
			{
				id: "ms-identity",
				year: "The public record",
				title: "UNIPRA, Category B",
				body: "The school is publicly listed as a mixed, day and boarding Category B senior high school in the Cape Coast Metropolitan Assembly. Its nickname is UNIPRA. The students’ association is UPOSA. Six houses are on the public record: Ackah, Densu, Tano, Nkrumah, Pra and Volta. The motto is Service to the Community. The ceremonial crest carries the word Floreat."
			},
			{
				id: "ms-2022",
				year: "July 2022",
				title: "Head of State Award",
				body: "Seventy-two students received bronze medals for voluntary service in communities of the Central Region, as reported by the Ghanaian Times."
			},
			{
				id: "ms-2026",
				year: "2026",
				title: "Fifty years",
				body: "The school enters the fiftieth year since its opening. Official jubilee programmes will be published here when the administration confirms them."
			}
		],
		albums: [
			{
				id: "album-symbol",
				slug: "symbol",
				title: "The symbol",
				summary: "The crest shows an open book and a torch. This still life is an illustration of that idea, not a photograph of a school ceremony.",
				photos: [{
					id: "photo-flame",
					src: "/media/flame.jpg",
					alt: "Still life of an open book and a lit torch on a dark blue cloth",
					caption: "Illustration of the crest: the book and the torch. Not an official ceremony photograph."
				}]
			},
			{
				id: "album-cape-coast",
				slug: "cape-coast",
				title: "Cape Coast",
				summary: "The school’s home city, on the Gulf of Guinea. This frame is an atmospheric study, not a claim to be a particular landmark.",
				photos: [{
					id: "photo-coast",
					src: "/media/coast.jpg",
					alt: "Late-afternoon light on the coast, with palms and deep blue water",
					caption: "Cape Coast, the city’s coast. An atmospheric study until the media team files an official photograph."
				}]
			},
			{
				id: "album-studies",
				slug: "awaiting-photographs",
				title: "Awaiting official photographs",
				summary: "These studies hold the layout. They are not photographs of the UPSHS campus. Replace them from the staff desk once pictures are in Cloudinary.",
				photos: [{
					id: "photo-class",
					src: "/media/classroom.jpg",
					alt: "An empty classroom with wooden desks and tall windows",
					caption: "Layout study of a classroom. Not the UPSHS campus. Replace with an official photograph."
				}, {
					id: "photo-lab",
					src: "/media/laboratory.jpg",
					alt: "An empty school science laboratory with wooden benches",
					caption: "Layout study of a laboratory. The school opened with one science laboratory; this picture is not that room."
				}]
			}
		],
		enquiries: [],
		staff: []
	};
}
var ARTICLE_CATEGORIES = [
	"School News",
	"Announcements",
	"Academic Achievements",
	"Sports",
	"Events",
	"Community",
	"Heritage"
];
function canDraft(role) {
	return role !== "viewer";
}
function canReview(role) {
	return role === "super" || role === "admin" || role === "editor";
}
function canDelete(role) {
	return role === "super" || role === "admin";
}
function canManageUsers(role) {
	return role === "super";
}
function canEditSettings(role) {
	return role === "super" || role === "admin";
}
function canReadEnquiries(role) {
	return role === "super" || role === "admin";
}
function allowedStatuses(role) {
	if (role === "super" || role === "admin") return [
		"draft",
		"in_review",
		"ready",
		"published",
		"archived"
	];
	if (role === "editor") return [
		"draft",
		"in_review",
		"ready"
	];
	if (role === "media") return ["draft", "in_review"];
	return [];
}
function roleLabel(role) {
	switch (role) {
		case "super": return "Super Administrator";
		case "admin": return "School Administrator";
		case "editor": return "Editor";
		case "media": return "Media Team";
		case "viewer": return "Viewer";
	}
}
var ROLE_OPTIONS = [
	"super",
	"admin",
	"editor",
	"media",
	"viewer"
];
function upsert(list, item) {
	const index = list.findIndex((entry) => entry.id === item.id);
	if (index === -1) return [item, ...list];
	const next = list.slice();
	next[index] = item;
	return next;
}
var useCms = create()(persist((set, get) => ({
	...createSeed(),
	updateSettings: (patch) => set({ settings: {
		...get().settings,
		...patch
	} }),
	setPage: (id, body) => set({ pages: get().pages.map((page) => page.id === id ? {
		...page,
		body
	} : page) }),
	saveArticle: (article, role) => {
		if (!allowedStatuses(role).includes(article.status)) return false;
		const existing = get().news.find((item) => item.id === article.id);
		if (existing && role === "media" && (existing.status === "published" || existing.status === "ready" || existing.status === "archived")) return false;
		if (existing && role === "editor" && (existing.status === "published" || existing.status === "archived")) return false;
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
	addPhoto: (albumId, photo) => set({ albums: get().albums.map((album) => album.id === albumId ? {
		...album,
		photos: [photo, ...album.photos]
	} : album) }),
	deletePhoto: (albumId, photoId) => set({ albums: get().albums.map((album) => album.id === albumId ? {
		...album,
		photos: album.photos.filter((photo) => photo.id !== photoId)
	} : album) }),
	addEnquiry: (item) => set({ enquiries: [item, ...get().enquiries] }),
	setEnquiryStatus: (id, status) => set({ enquiries: get().enquiries.map((item) => item.id === id ? {
		...item,
		status
	} : item) }),
	addStaff: (person) => {
		const email = person.email.trim().toLowerCase();
		if (get().staff.some((member) => member.email === email)) return "That email is already on the desk.";
		set({ staff: [...get().staff, {
			...person,
			email
		}] });
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
			settings: bundle.settings ? {
				...current,
				...bundle.settings,
				workerUrl: current.workerUrl,
				cloudName: current.cloudName,
				uploadPreset: current.uploadPreset,
				useRemotePublic: current.useRemotePublic
			} : current
		});
	},
	resetContent: () => {
		const settings = get().settings;
		set({
			...createSeed(),
			settings
		});
	}
}), {
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
		staff: state.staff
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { canDraft as a, canReadEnquiries as c, roleLabel as d, useCms as f, canDelete as i, canReview as l, ROLE_OPTIONS as n, canEditSettings as o, allowedStatuses as r, canManageUsers as s, ARTICLE_CATEGORIES as t, cn as u };
