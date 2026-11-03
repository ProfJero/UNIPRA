import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDelete, canReview } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { Milestone } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/history")({
  component: HistoryDesk,
  head: () => ({ meta: [{ title: "History · UNIPRA staff desk" }] }),
});

function HistoryDesk() {
  const milestones = useCms((state) => state.milestones);
  const save = useCms((state) => state.saveMilestone);
  const remove = useCms((state) => state.deleteMilestone);
  const { session } = useSession();
  const [draft, setDraft] = useState<Milestone>({ id: "", year: "", title: "", body: "" });
  if (!session) return null;
  if (!canReview(session.role)) return <Deny>History is edited by an editor or an administrator.</Deny>;

  return (
    <>
      <DeskTitle title="History" lede="Keep what can be sourced. Mark oral history as oral history." />
      <ul className="space-y-4">
        {milestones.map((item) => (
          <li key={item.id}>
            <MilestoneForm
              item={item}
              onSave={(next) => {
                save(next);
                toast.success("Saved.");
              }}
              onDelete={canDelete(session.role) ? () => remove(item.id) : undefined}
            />
          </li>
        ))}
      </ul>
      <form
        className="mt-6 grid gap-3 border border-line bg-paper p-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (!draft.title.trim()) return;
          save({ ...draft, id: crypto.randomUUID() });
          setDraft({ id: "", year: "", title: "", body: "" });
          toast.success("Milestone added.");
        }}
      >
        <h2 className="text-xl">Add a milestone</h2>
        <input className="field" placeholder="Year or date" value={draft.year} onChange={(event) => setDraft({ ...draft, year: event.target.value })} />
        <input className="field" placeholder="Title" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
        <textarea className="field min-h-24 py-2" value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
}

function MilestoneForm({
  item,
  onSave,
  onDelete,
}: {
  item: Milestone;
  onSave: (item: Milestone) => void;
  onDelete?: () => void;
}) {
  const [draft, setDraft] = useState(item);
  return (
    <form
      className="grid gap-2 border border-line bg-paper p-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(draft);
      }}
    >
      <input className="field" value={draft.year} onChange={(event) => setDraft({ ...draft, year: event.target.value })} />
      <input className="field" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
      <textarea className="field min-h-28 py-2" value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} />
      <div className="flex gap-2">
        <Button type="submit" variant="line">Save</Button>
        {onDelete ? (
          <Button type="button" variant="ghost" onClick={onDelete}>
            Delete
          </Button>
        ) : null}
      </div>
    </form>
  );
}
