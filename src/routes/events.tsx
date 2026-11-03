import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";
import { formatDay, isUpcoming } from "@/lib/cms/format";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events · University Practice Senior High School" },
      { name: "description", content: "School calendar for University Practice Senior High School." },
    ],
  }),
});

function EventsPage() {
  const events = useCms((state) => state.events.filter((item) => item.visible));
  const upcoming = events.filter((item) => isUpcoming(item.startsOn));
  const earlier = events.filter((item) => !isUpcoming(item.startsOn));
  return (
    <SiteShell>
      <PageIntro
        kicker="Calendar"
        title="Dates the school will stand behind."
        lede="If a ceremony is only being discussed on social media, it is not listed here as a confirmed programme. Founders’ Day is 13 October, the date of the opening in 1976."
      />
      <Wrap className="grid gap-12 py-14 lg:grid-cols-2">
        <section>
          <h2 className="text-2xl">Ahead</h2>
          <EventList items={upcoming} empty="Nothing further is dated." />
        </section>
        <section>
          <h2 className="text-2xl">Already observed</h2>
          <EventList items={earlier} empty="No earlier entries." />
        </section>
      </Wrap>
    </SiteShell>
  );
}

function EventList({ items, empty }: { items: { id: string; title: string; summary: string; startsOn: string; endsOn: string; place: string; category: string }[]; empty: string }) {
  if (items.length === 0) return <p className="mt-4 text-muted">{empty}</p>;
  return (
    <ul className="mt-4 divide-y divide-line border-y border-line">
      {items.map((event) => (
        <li key={event.id} className="py-5">
          <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
            {formatDay(event.startsOn)}
            {event.endsOn && event.endsOn !== event.startsOn ? ` – ${formatDay(event.endsOn)}` : ""} · {event.place}
          </p>
          <h3 className="mt-1 text-2xl">{event.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
        </li>
      ))}
    </ul>
  );
}
