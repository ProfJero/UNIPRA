import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canReview } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/pages")({
  component: PagesDesk,
  head: () => ({ meta: [{ title: "Pages · UNIPRA staff desk" }] }),
});

function PagesDesk() {
  const pages = useCms((state) => state.pages);
  const setPage = useCms((state) => state.setPage);
  const { session } = useSession();
  if (!session) return null;
  if (!canReview(session.role)) return <Deny>Page text is edited by an editor or an administrator.</Deny>;
  return (
    <>
      <DeskTitle title="Pages" lede="These passages appear on the public site. The dated history and the admissions rules stay in their own desks." />
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.id}>
            <PageForm id={page.id} label={page.label} body={page.body} onSave={setPage} />
          </li>
        ))}
      </ul>
    </>
  );
}

function PageForm({
  id,
  label,
  body,
  onSave,
}: {
  id: string;
  label: string;
  body: string;
  onSave: (id: string, body: string) => void;
}) {
  const [text, setText] = useState(body);
  return (
    <form
      className="grid gap-2 border border-line bg-paper p-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(id, text);
        toast.success("Page saved.");
      }}
    >
      <h2 className="text-xl">{label}</h2>
      <textarea className="field min-h-32 py-2" value={text} onChange={(event) => setText(event.target.value)} />
      <Button type="submit" variant="line">Save</Button>
    </form>
  );
}
