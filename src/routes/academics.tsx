import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
  head: () => ({
    meta: [
      { title: "Academics · University Practice Senior High School" },
      { name: "description", content: "Programmes at University Practice Senior High School, Cape Coast." },
    ],
  }),
});

function AcademicsPage() {
  const programmes = useCms((state) => state.programmes);
  return (
    <SiteShell>
      <PageIntro
        kicker="Academics"
        title="What the school teaches."
        lede="General Arts and General Science were the opening electives in 1976. Business, Visual Arts and Home Economics are publicly described as later additions. Management should confirm this list against the current GES register before each admission season. Agricultural Science and technical programmes are not listed, because the public record used here does not establish them."
      />
      <Wrap className="divide-y divide-line border-y border-line">
        {programmes.map((programme) => (
          <article key={programme.id} className="grid gap-3 py-8 lg:grid-cols-[16rem_1fr]">
            <h2 className="text-3xl">
              <Link to="/academics/$slug" params={{ slug: programme.slug }} className="hover:text-gold-deep">
                {programme.name}
              </Link>
            </h2>
            <div>
              <p className="leading-relaxed text-muted">{programme.summary}</p>
              <Link
                to="/academics/$slug"
                params={{ slug: programme.slug }}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-navy"
              >
                Read the note
              </Link>
            </div>
          </article>
        ))}
      </Wrap>
    </SiteShell>
  );
}
