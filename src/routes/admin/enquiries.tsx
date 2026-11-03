import { createFileRoute } from "@tanstack/react-router";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canReadEnquiries } from "@/lib/cms/access";
import { formatDay } from "@/lib/cms/format";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/enquiries")({
  component: EnquiriesDesk,
  head: () => ({ meta: [{ title: "Enquiries · UNIPRA staff desk" }] }),
});

function EnquiriesDesk() {
  const enquiries = useCms((state) => state.enquiries);
  const setStatus = useCms((state) => state.setEnquiryStatus);
  const { session } = useSession();
  if (!session) return null;
  if (!canReadEnquiries(session.role)) return <Deny>Enquiries are visible to the school administrator.</Deny>;
  return (
    <>
      <DeskTitle
        title="Enquiries"
        lede="In preview, these are messages saved in this browser. Once the Cloudflare Worker is connected, they are stored in Supabase for the office."
      />
      {enquiries.length === 0 ? <p className="text-muted">No messages yet.</p> : null}
      <ul className="space-y-3">
        {enquiries.map((item) => (
          <li key={item.id} className="border border-line bg-paper p-4">
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
              {item.status} · {item.audience} · {formatDay(item.createdAt)}
            </p>
            <h2 className="mt-1 text-xl">{item.subject}</h2>
            <p className="text-sm text-muted">{item.name} · {item.email} {item.phone ? `· ${item.phone}` : ""}</p>
            <p className="mt-2 leading-relaxed">{item.message}</p>
            <div className="mt-3 flex gap-2">
              <Button type="button" variant="line" size="sm" onClick={() => setStatus(item.id, "read")}>Mark read</Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => setStatus(item.id, "archived")}>Archive</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
