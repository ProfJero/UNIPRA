import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({
    meta: [
      { title: "Admissions · University Practice Senior High School" },
      {
        name: "description",
        content: "How placement to University Practice Senior High School works. CSSPS and Free SHS. No payments on this site.",
      },
    ],
  }),
});

const FAQS = [
  {
    q: "Can I apply on this website?",
    a: "No. Placement into public senior high schools is through the Computerised School Selection and Placement System. This site explains the school. It does not take an application.",
  },
  {
    q: "Is there a form fee or a ‘protocol’ fee?",
    a: "Not from the school, and not on this website. Anyone asking you to send mobile money for a place at UNIPRA should be refused and reported.",
  },
  {
    q: "What is the school code?",
    a: "Public directories list 0030105. Check the code on the current Ghana Education Service register for your placement year before you write it on a form.",
  },
  {
    q: "Is the school day, boarding, or both?",
    a: "It is publicly listed as mixed, day and boarding, Category B, in the Cape Coast Metropolis. Track arrangements follow the current GES calendar.",
  },
  {
    q: "Which documents should a parent prepare?",
    a: "Follow the checklist published with CSSPS for that year: typically the placement slip, BECE results, and the identification the portal asks for. The school office will say if it needs anything further after placement. Do not send certificates to a private number.",
  },
  {
    q: "Who do I call?",
    a: "Use the telephone and email on the contact page. Those details are taken from the school’s public listings and can be corrected by the administration.",
  },
];

function AdmissionsPage() {
  const intro = useCms((state) => state.pages.find((item) => item.id === "admissions-intro")?.body ?? "");
  const settings = useCms((state) => state.settings);
  return (
    <SiteShell>
      <PageIntro
        kicker="Admissions"
        title="Placement is national. It is not for sale."
        lede="Free Senior High School. The Computerised School Selection and Placement System. No cashier on this website."
      />
      <Wrap className="grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Prose text={intro} />
          <ol className="mt-8 space-y-5">
            {[
              "Choose UNIPRA on the CSSPS form only if the programme you want is on that year’s GES list for this school.",
              "Wait for the official placement. The school does not announce private lists in advance.",
              "When placed, follow the reporting date the GES and the school publish. Bring what the checklist asks for.",
              "If anything about a fee is unclear, telephone the office before you pay anyone.",
            ].map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="font-display text-2xl text-gold-deep">0{index + 1}</span>
                <p className="leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="border border-navy bg-navy p-6 text-paper">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Office</p>
          <p className="mt-3 font-display text-2xl text-paper">Speak to the school, not a broker.</p>
          <p className="mt-4 text-sm leading-relaxed text-cream">{settings.phone}</p>
          <p className="text-sm text-cream">{settings.email}</p>
          <p className="mt-4 text-sm leading-relaxed text-cream">{settings.poBox}</p>
          <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-navy">
            Write to the office
          </Link>
        </aside>
      </Wrap>
      <section className="border-t border-line bg-paper">
        <Wrap className="py-14">
          <h2 className="text-3xl">Questions parents actually ask</h2>
          <div className="mt-6 divide-y divide-line">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
                  <span className="mr-2 text-gold-deep" aria-hidden>
                    +
                  </span>
                  {item.q}
                </summary>
                <p className="mt-2 max-w-3xl pl-5 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
