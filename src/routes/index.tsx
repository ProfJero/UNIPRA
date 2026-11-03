import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Wrap, Prose } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";
import { formatDay, isUpcoming } from "@/lib/cms/format";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "University Practice Senior High School · UNIPRA, Cape Coast" },
      {
        name: "description",
        content:
          "Official site of University Practice Senior High School, Cape Coast. Motto: Service to the Community. Opened 13 October 1976.",
      },
    ],
  }),
});

function Home() {
  const page = useCms((state) => state.pages.find((item) => item.id === "home-intro")?.body ?? "");
  const news = useCms((state) =>
    state.news
      .filter((item) => item.status === "published")
      .slice()
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  );
  const announcements = useCms((state) => state.announcements.filter((item) => item.active));
  const programmes = useCms((state) => state.programmes);
  const events = useCms((state) =>
    state.events.filter((item) => item.visible && isUpcoming(item.startsOn)).slice(0, 3),
  );
  const houses = useCms((state) => state.houses);
  const lead = news[0];
  const rest = news.slice(1, 4);

  return (
    <SiteShell>
      <section className="border-b border-line bg-paper">
        <Wrap className="grid items-center gap-10 py-12 lg:grid-cols-[1.4fr_0.8fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
              Cape Coast · Established 13 October 1976
            </p>
            <h1 className="mt-4 text-4xl leading-none sm:text-6xl">
              A legacy of learning.
              <span className="mt-2 block text-gold-deep">A charge to serve.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Welcome to University Practice Senior High School. Fifty years on the campus of the University
              of Cape Coast, still under the same motto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/history">Our history</Link>
              </Button>
              <Button asChild variant="line">
                <Link to="/admissions">Admissions guidance</Link>
              </Button>
            </div>
          </div>
          <figure className="justify-self-center border border-gold bg-cream p-3">
            <img
              src="/crest-gold.jpg"
              alt="Ceremonial crest of University Practice Senior High School, with the motto Service to the Community and the word Floreat"
              className="w-64 max-w-full bg-paper object-contain sm:w-72"
            />
            <figcaption className="px-2 pt-3 text-center font-display text-lg text-navy">Floreat</figcaption>
          </figure>
        </Wrap>
      </section>

      {announcements.length > 0 ? (
        <section className="border-b border-line bg-navy text-paper" aria-label="Announcements">
          <Wrap className="grid gap-4 py-5 sm:grid-cols-2">
            {announcements.map((item) => (
              <article key={item.id}>
                <h2 className="font-display text-lg text-paper">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-cream">{item.body}</p>
              </article>
            ))}
          </Wrap>
        </section>
      ) : null}

      <section className="border-b border-line">
        <Wrap className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src="/media/flame.jpg"
            alt="Still life of an open book and a torch, echoing the school crest"
            className="aspect-3/2 w-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">The school</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Service to the Community</h2>
            <div className="mt-4">
              <Prose text={page} />
            </div>
            <Link to="/about" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
              About UNIPRA
            </Link>
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line bg-paper">
        <Wrap className="py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl">Academic programmes</h2>
            <Link to="/academics" className="hidden min-h-11 items-center text-sm font-semibold text-navy sm:inline-flex">
              All programmes
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-muted">
            Publicly described offerings. The academic office confirms the live CSSPS list before each placement season.
          </p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {programmes.map((programme, index) => (
              <li key={programme.id}>
                <Link
                  to="/academics/$slug"
                  params={{ slug: programme.slug }}
                  className="flex min-h-16 items-baseline gap-4 py-4 hover:bg-cream"
                >
                  <span className="w-8 font-display text-gold-deep">0{index + 1}</span>
                  <span className="font-display text-2xl text-navy">{programme.name}</span>
                  <span className="hidden text-sm text-muted sm:inline">{programme.summary}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      <section className="border-b border-line">
        <Wrap className="grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl">Latest from the school</h2>
            {lead ? (
              <article className="mt-6 border-t border-line pt-6">
                <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
                  {lead.category} · {formatDay(lead.publishedAt)}
                </p>
                <h3 className="mt-2 text-3xl">
                  <Link to="/news/$slug" params={{ slug: lead.slug }} className="hover:text-gold-deep">
                    {lead.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-xl text-muted">{lead.excerpt}</p>
              </article>
            ) : null}
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {rest.map((article) => (
                <li key={article.id} className="py-4">
                  <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                    {article.category} · {formatDay(article.publishedAt)}
                  </p>
                  <Link to="/news/$slug" params={{ slug: article.slug }} className="mt-1 block font-display text-xl text-navy hover:text-gold-deep">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <h2 className="text-3xl">Calendar</h2>
            <ul className="mt-6 space-y-4">
              {events.length === 0 ? <li className="text-muted">No dated events are currently listed.</li> : null}
              {events.map((event) => (
                <li key={event.id} className="border border-line bg-paper p-4">
                  <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{formatDay(event.startsOn)}</p>
                  <h3 className="mt-1 font-display text-xl">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
                </li>
              ))}
            </ul>
            <Link to="/events" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy">
              Full calendar
            </Link>
          </aside>
        </Wrap>
      </section>

      <section className="border-b border-line bg-paper">
        <Wrap className="py-14">
          <h2 className="text-3xl">Six houses</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Ackah, Densu, Tano, Nkrumah, Pra and Volta. House colours and histories can be added by the school; they are not invented here.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
            {houses.map((house) => (
              <li key={house.id} className="bg-paper px-3 py-5 text-center font-display text-xl text-navy">
                {house.name}
              </li>
            ))}
          </ul>
          <Link to="/houses" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
            House life
          </Link>
        </Wrap>
      </section>

      <section>
        <Wrap className="grid gap-8 py-14 lg:grid-cols-2">
          <div className="border border-line bg-navy p-8 text-paper">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Old students</p>
            <h2 className="mt-2 text-3xl text-paper">UPOSANS</h2>
            <p className="mt-3 leading-relaxed text-cream">
              The association’s public news lives here. There is no open directory of individual old students.
            </p>
            <Link to="/alumni" className="mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-navy">
              Alumni
            </Link>
          </div>
          <div className="border border-line bg-paper p-8">
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">Visit</p>
            <h2 className="mt-2 text-3xl">The campus is inside the University</h2>
            <p className="mt-3 leading-relaxed text-muted">
              P.O. Box UC 092, Cape Coast. Write to the office, or use the enquiry form. Do not send money.
            </p>
            <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center border border-navy px-4 text-sm font-semibold text-navy">
              Contact the school
            </Link>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
