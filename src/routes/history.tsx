import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
  head: () => ({
    meta: [
      { title: "History · University Practice Senior High School" },
      { name: "description", content: "How University Practice Senior High School opened on 13 October 1976." },
    ],
  }),
});

function HistoryPage() {
  const intro = useCms((state) => state.pages.find((item) => item.id === "history-intro")?.body ?? "");
  const milestones = useCms((state) => state.milestones);
  return (
    <SiteShell>
      <PageIntro
        kicker="Our history"
        title="Thirteen October, nineteen seventy-six."
        lede="One hundred and twelve pioneers. Twelve classrooms. One laboratory. A school planted between the Faculty of Education and the Ghana Education Service."
      />
      <Wrap className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Prose text={intro} />
          <img
            src="/media/coast.jpg"
            alt="The coast at Cape Coast in late-afternoon light"
            className="mt-8 w-full object-cover"
          />
          <p className="mt-2 text-sm text-muted">Cape Coast, the school’s home city. An atmospheric study, not a campus photograph.</p>
        </div>
        <ol className="border-l border-gold">
          {milestones.map((item) => (
            <li key={item.id} className="py-5 pl-6">
              <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{item.year}</p>
              <h2 className="mt-1 text-2xl">{item.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    </SiteShell>
  );
}
