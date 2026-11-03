import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDelete, canDraft } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { SchoolEvent } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/events")({
  component: EventsDesk,
  head: () => ({ meta: [{ title: "Events · UNIPRA staff desk" }] }),
});

function empty(): SchoolEvent {
  return {
    id: crypto.randomUUID(),
    title: "",
    summary: "",
    startsOn: new Date().toISOString().slice(0, 10),
    endsOn: "",
    place: "School campus, Cape Coast",
    category: "School calendar",
    visible: true,
  };
}

function EventsDesk() {
  const events = useCms((state) => state.events);
  const save = useCms((state) => state.saveEvent);
  const remove = useCms((state) => state.deleteEvent);
  const { session } = useSession();
  const [draft, setDraft] = useState<SchoolEvent>(empty);
  if (!session) return null;
  if (!canDraft(session.role)) return <Deny>Viewers cannot edit the calendar.</Deny>;

  return (
    <>
      <DeskTitle title="Events" lede="Only dates the school will confirm. Social-media rumours stay off this list." />
      <form
        className="grid gap-3 border border-line bg-paper p-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (!draft.title.trim()) return;
          save(draft);
          toast.success("Event saved.");
          setDraft(empty());
        }}
      >
        <input className="field" placeholder="Title" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
        <textarea className="field min-h-24 py-2" placeholder="What is actually confirmed" value={draft.summary} onChange={(event) => setDraft({ ...draft, summary: event.target.value })} />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-1">
            <span className="lbl">Starts</span>
            <input className="field" type="date" value={draft.startsOn} onChange={(event) => setDraft({ ...draft, startsOn: event.target.value })} />
          </label>
          <label className="space-y-1">
            <span className="lbl">Ends</span>
            <input className="field" type="date" value={draft.endsOn} onChange={(event) => setDraft({ ...draft, endsOn: event.target.value })} />
          </label>
        </div>
        <input className="field" placeholder="Place" value={draft.place} onChange={(event) => setDraft({ ...draft, place: event.target.value })} />
        <Button type="submit">Add event</Button>
      </form>
      <ul className="mt-6 space-y-3">
        {events.map((item) => (
          <li key={item.id} className="flex flex-wrap items-start justify-between gap-3 border border-line bg-paper p-4">
            <div>
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="text-sm text-muted">{item.startsOn} · {item.place}</p>
            </div>
            {canDelete(session.role) ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => remove(item.id)}>Delete</Button>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
