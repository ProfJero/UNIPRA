import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDelete, canReview } from "@/lib/cms/access";
import { slugify } from "@/lib/cms/format";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { Programme } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/academics")({
  component: AcademicsDesk,
  head: () => ({ meta: [{ title: "Academics · UNIPRA staff desk" }] }),
});

function AcademicsDesk() {
  const programmes = useCms((state) => state.programmes);
  const save = useCms((state) => state.saveProgramme);
  const remove = useCms((state) => state.deleteProgramme);
  const { session } = useSession();
  const [current, setCurrent] = useState<Programme | null>(null);
  if (!session) return null;
  if (!canReview(session.role)) {
    return <Deny>Programme text is edited by an editor or an administrator.</Deny>;
  }

  return (
    <>
      <DeskTitle title="Academics" lede="Confirm every programme against the current GES register before you describe it as offered." />
      <ul className="divide-y divide-line border-y border-line bg-paper">
        {programmes.map((programme) => (
          <li key={programme.id}>
            <button type="button" className="min-h-11 w-full px-4 py-3 text-left font-semibold text-navy" onClick={() => setCurrent(programme)}>
              {programme.name}
            </button>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        variant="line"
        className="mt-4"
        onClick={() =>
          setCurrent({
            id: crypto.randomUUID(),
            slug: "",
            name: "",
            summary: "",
            body: "",
            subjects: "",
          })
        }
      >
        New programme
      </Button>
      {current ? (
        <form
          className="mt-4 grid gap-3 border border-line bg-paper p-4"
          onSubmit={(event) => {
            event.preventDefault();
            const next = { ...current, slug: current.slug.trim() || slugify(current.name) };
            save(next);
            toast.success("Programme saved.");
            setCurrent(null);
          }}
        >
          <input className="field" value={current.name} placeholder="Name" onChange={(event) => setCurrent({ ...current, name: event.target.value })} />
          <input className="field" value={current.summary} placeholder="One-line summary" onChange={(event) => setCurrent({ ...current, summary: event.target.value })} />
          <textarea className="field min-h-32 py-2" value={current.body} onChange={(event) => setCurrent({ ...current, body: event.target.value })} />
          <textarea className="field min-h-20 py-2" value={current.subjects} onChange={(event) => setCurrent({ ...current, subjects: event.target.value })} />
          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            {canDelete(session.role) ? (
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  remove(current.id);
                  setCurrent(null);
                }}
              >
                Delete
              </Button>
            ) : null}
          </div>
        </form>
      ) : null}
    </>
  );
}
