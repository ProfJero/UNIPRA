import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
  head: () => ({
    meta: [
      { title: "Leadership · University Practice Senior High School" },
      { name: "description", content: "School leadership of University Practice Senior High School, as the administration publishes it." },
    ],
  }),
});

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function LeadershipPage() {
  const leaders = useCms((state) => state.leaders);
  return (
    <SiteShell>
      <PageIntro
        kicker="Leadership"
        title="The people the school is prepared to name."
        lede="Only offices the administration has confirmed, or that the public record already names, appear here. Portraits are added when the school supplies them. No likeness is invented."
      />
      <Wrap className="grid gap-6 py-14">
        {leaders.map((leader) => (
          <article key={leader.id} className="grid gap-5 border border-line bg-paper p-6 sm:grid-cols-[auto_1fr]">
            <span className="grid size-16 place-items-center bg-navy font-display text-xl text-paper" aria-hidden>
              {initials(leader.name)}
            </span>
            <div>
              <h2 className="text-3xl">{leader.name}</h2>
              <p className="mt-1 text-sm font-semibold tracking-widest text-gold-deep uppercase">{leader.role}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{leader.note}</p>
            </div>
          </article>
        ))}
        <p className="text-sm text-muted">
          Assistant headmasters, senior housemasters and chaplains are omitted until the school adds them from the staff desk. An incomplete list is better than a decorative one.
        </p>
      </Wrap>
    </SiteShell>
  );
}
