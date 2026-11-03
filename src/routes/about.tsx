import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · University Practice Senior High School" },
      { name: "description", content: "Profile, vision and mission of University Practice Senior High School, Cape Coast." },
    ],
  }),
});

const FACTS = [
  ["Opened", "13 October 1976"],
  ["Nickname", "UNIPRA"],
  ["Motto", "Service to the Community"],
  ["Category", "B"],
  ["Students", "Mixed"],
  ["Residency", "Day and boarding"],
  ["District", "Cape Coast Metropolitan Assembly"],
  ["Union", "UPOSA"],
  ["Houses", "Six"],
  ["Directory code", "0030105 — confirm on the current GES register"],
];

function AboutPage() {
  const intro = useCms((state) => state.pages.find((item) => item.id === "home-intro")?.body ?? "");
  return (
    <SiteShell>
      <PageIntro
        kicker="About UNIPRA"
        title="A public school on the University campus."
        lede="University Practice Senior High School was founded so that the Faculty of Education could have a practice school, and so that Cape Coast would have another public senior high school worthy of the name."
      />
      <Wrap className="grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <Prose text={intro} />
          <section>
            <h2 className="text-3xl">Vision</h2>
            <p className="mt-3 leading-relaxed">
              To be a centre of excellence in moral, academic and vocational education — a school of choice in the Cape Coast Metropolis and in the nation.
            </p>
          </section>
          <section>
            <h2 className="text-3xl">Mission</h2>
            <p className="mt-3 leading-relaxed">
              To provide a holistic secondary education aimed at excellence and competence, through discipline and hard work. To send out people who are physically fit, morally upright and academically sound, ready to serve themselves, their families and society.
            </p>
            <p className="mt-3 text-sm text-muted">
              Wording follows the vision and mission published by the school in 2024. “Hard work” is used for the phrase that circulated as “handwork”.
            </p>
          </section>
          <section>
            <h2 className="text-3xl">What the motto asks</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {[
                ["Service", "The crest says it, and the Head of State Award work of 2022 showed it in the communities of the Central Region."],
                ["Discipline", "The mission names discipline as the means, not as a slogan beside the gate."],
                ["Competence", "Academic and vocational work, examined in public, not claimed in private."],
                ["Character", "Morally upright is part of the mission, not an extra-curricular afterthought."],
              ].map(([title, body]) => (
                <li key={title} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="text-muted">{body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-6">
          <img src="/crest.png" alt="School crest" className="w-full border border-line bg-paper object-contain p-6" />
          <dl className="border border-line bg-paper">
            {FACTS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line px-4 py-3 last:border-b-0">
                <dt className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <nav className="grid gap-2 text-sm font-semibold" aria-label="About sections">
            <Link to="/history" className="min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy">History</Link>
            <Link to="/leadership" className="min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy">Leadership</Link>
            <Link to="/houses" className="min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy">Houses</Link>
          </nav>
        </aside>
      </Wrap>
      <section className="border-t border-line bg-paper">
        <Wrap className="grid gap-8 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Campus and facilities</h2>
            <p className="mt-4 leading-relaxed text-muted">
              The school opened with twelve classrooms and one science laboratory, and it used the libraries and laboratories of the University of Cape Coast. It is now a day and boarding school. A room-by-room inventory is not published here until the administration files one. The media team can replace the layout studies in the gallery with official photographs.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">Student life</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Boarding and day students share six houses. The students’ union is UPOSA. A cadet corps has been part of public accounts of student leadership. The school anthem will be published on this page only after the administration approves the text.
            </p>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
