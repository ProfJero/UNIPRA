import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDelete, canReview } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/leadership")({
  component: LeadershipDesk,
  head: () => ({ meta: [{ title: "Leadership · UNIPRA staff desk" }] }),
});

function LeadershipDesk() {
  const leaders = useCms((state) => state.leaders);
  const houses = useCms((state) => state.houses);
  const saveLeader = useCms((state) => state.saveLeader);
  const deleteLeader = useCms((state) => state.deleteLeader);
  const saveHouse = useCms((state) => state.saveHouse);
  const { session } = useSession();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [note, setNote] = useState("");
  if (!session) return null;
  if (!canReview(session.role)) return <Deny>Leadership text is edited by an editor or an administrator.</Deny>;

  return (
    <>
      <DeskTitle title="Leadership and houses" lede="Add a person only when the school is willing to name them. Do not invent portraits." />
      <form
        className="grid gap-3 border border-line bg-paper p-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (!name.trim() || !role.trim()) return;
          saveLeader({ id: crypto.randomUUID(), name: name.trim(), role: role.trim(), note: note.trim() });
          setName("");
          setRole("");
          setNote("");
          toast.success("Added.");
        }}
      >
        <input className="field" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <input className="field" placeholder="Office" value={role} onChange={(event) => setRole(event.target.value)} />
        <textarea className="field min-h-24 py-2" placeholder="Note visitors should read" value={note} onChange={(event) => setNote(event.target.value)} />
        <Button type="submit">Add person</Button>
      </form>
      <ul className="mt-4 divide-y divide-line border-y border-line bg-paper">
        {leaders.map((leader) => (
          <li key={leader.id} className="flex items-start justify-between gap-3 px-4 py-3">
            <span>
              <span className="block font-semibold text-navy">{leader.name}</span>
              <span className="text-sm text-muted">{leader.role}</span>
            </span>
            {canDelete(session.role) ? (
              <button type="button" className="text-sm font-semibold" onClick={() => deleteLeader(leader.id)}>
                Remove
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      <h2 className="mt-10 text-2xl">Houses</h2>
      <ul className="mt-4 space-y-3">
        {houses.map((house) => (
          <li key={house.id}>
            <HouseRow id={house.id} name={house.name} summary={house.summary} onSave={saveHouse} />
          </li>
        ))}
      </ul>
    </>
  );
}

function HouseRow({
  id,
  name,
  summary,
  onSave,
}: {
  id: string;
  name: string;
  summary: string;
  onSave: (house: { id: string; name: string; summary: string }) => void;
}) {
  const [text, setText] = useState(summary);
  return (
    <form
      className="grid gap-2 border border-line bg-paper p-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave({ id, name, summary: text });
        toast.success(`${name} saved.`);
      }}
    >
      <p className="font-display text-xl">{name}</p>
      <textarea className="field min-h-20 py-2" value={text} onChange={(event) => setText(event.target.value)} />
      <Button type="submit" variant="line">Save house note</Button>
    </form>
  );
}
