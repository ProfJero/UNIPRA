import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDraft, canDelete } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { Announcement } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/announcements")({
  component: NoticesDesk,
  head: () => ({ meta: [{ title: "Notices · UNIPRA staff desk" }] }),
});

function NoticesDesk() {
  const items = useCms((state) => state.announcements);
  const save = useCms((state) => state.saveAnnouncement);
  const remove = useCms((state) => state.deleteAnnouncement);
  const { session } = useSession();
  const [draft, setDraft] = useState<Announcement>({
    id: crypto.randomUUID(),
    title: "",
    body: "",
    active: true,
    publishedAt: new Date().toISOString().slice(0, 10),
  });
  if (!session) return null;
  if (!canDraft(session.role)) return <Deny>Viewers cannot edit notices.</Deny>;

  return (
    <>
      <DeskTitle title="Notices" lede="Short lines for the navy band on the home page. Active notices are public." />
      <form
        className="grid gap-3 border border-line bg-paper p-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (!draft.title.trim()) return;
          save(draft);
          toast.success("Notice saved.");
          setDraft({ id: crypto.randomUUID(), title: "", body: "", active: true, publishedAt: new Date().toISOString().slice(0, 10) });
        }}
      >
        <input className="field" placeholder="Title" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
        <textarea className="field min-h-24 py-2" placeholder="Text" value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} />
        <label className="flex min-h-11 items-center gap-2 text-sm font-semibold text-navy">
          <input type="checkbox" checked={draft.active} onChange={(event) => setDraft({ ...draft, active: event.target.checked })} />
          Show on the public site
        </label>
        <Button type="submit">Add notice</Button>
      </form>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.id} className="flex flex-wrap items-start justify-between gap-3 bg-paper px-4 py-4">
            <div>
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="text-sm text-muted">{item.body}</p>
              <p className="text-xs text-gold-deep">{item.active ? "Public" : "Hidden"}</p>
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="line" size="sm" onClick={() => save({ ...item, active: !item.active })}>
                {item.active ? "Hide" : "Show"}
              </Button>
              {canDelete(session.role) ? (
                <Button type="button" variant="ghost" size="sm" onClick={() => remove(item.id)}>
                  Delete
                </Button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
