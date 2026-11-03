import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/academics/$slug")({
  component: ProgrammePage,
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} · Academics · UNIPRA` }],
  }),
});

function ProgrammePage() {
  const { slug } = Route.useParams();
  const programme = useCms((state) => state.programmes.find((item) => item.slug === slug));
  if (!programme) {
    return (
      <SiteShell>
        <PageIntro kicker="Academics" title="This programme is not listed." lede="It may have been renamed. Return to the academic list." />
        <Wrap className="py-8">
          <Link to="/academics" className="font-semibold text-navy">All programmes</Link>
        </Wrap>
      </SiteShell>
    );
  }
  return (
    <SiteShell>
      <PageIntro kicker="Academics" title={programme.name} lede={programme.summary} />
      <Wrap className="max-w-3xl py-14">
        <Prose text={programme.body} />
        <p className="mt-8 border border-line bg-paper p-4 text-sm leading-relaxed text-muted">{programme.subjects}</p>
        <Link to="/admissions" className="mt-8 inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper">
          Admissions guidance
        </Link>
      </Wrap>
    </SiteShell>
  );
}
