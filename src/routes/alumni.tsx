import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/alumni")({
  component: AlumniPage,
  head: () => ({
    meta: [
      { title: "Alumni · University Practice Senior High School" },
      { name: "description", content: "Old students of University Practice Senior High School — UPOSANS." },
    ],
  }),
});

function AlumniPage() {
  const intro = useCms((state) => state.pages.find((item) => item.id === "alumni-intro")?.body ?? "");
  const settings = useCms((state) => state.settings);
  return (
    <SiteShell>
      <PageIntro
        kicker="Alumni"
        title="UPOSANS, without a public roll."
        lede="A directory of old students would publish people’s names without a good reason. Reunion news, service, and the association’s official contact are enough."
      />
      <Wrap className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Prose text={intro} />
          <section>
            <h2 className="text-2xl">What belongs here</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>Reunion and homecoming notices the school has confirmed.</li>
              <li>Service projects and year-group gifts, once the administration accepts the account.</li>
              <li>The official contact for the old students’ association.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl">What does not</h2>
            <p className="mt-3 text-muted">
              Individual biographies, phone numbers, and a searchable register of old students. If the association later wants a register, it should be a separate system, with consent, not a page on the public site.
            </p>
          </section>
        </div>
        <aside className="border border-line bg-paper p-6">
          <h2 className="text-2xl">Write to the school</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Association officers can send reunion copy through the enquiry form. Mark the audience as alumni. The office will publish what it is willing to own.
          </p>
          <p className="mt-4 text-sm">{settings.email}</p>
          <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper">
            Enquiry form
          </Link>
        </aside>
      </Wrap>
    </SiteShell>
  );
}
