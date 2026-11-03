import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · University Practice Senior High School" },
      { name: "description", content: "Address, telephone and enquiry form for University Practice Senior High School, Cape Coast." },
    ],
  }),
});

function ContactPage() {
  const settings = useCms((state) => state.settings);
  const addEnquiry = useCms((state) => state.addEnquiry);
  const [sent, setSent] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("company") ?? "").trim()) return;
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (name.length < 2 || !email.includes("@") || message.length < 10) {
      toast.error("Add your name, a real email, and a message of at least a short sentence.");
      return;
    }
    const enquiry = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: String(form.get("phone") ?? "").trim(),
      audience: String(form.get("audience") ?? "Other"),
      subject: String(form.get("subject") ?? "").trim() || "Enquiry",
      message: message.slice(0, 4000),
      createdAt: new Date().toISOString(),
      status: "new" as const,
    };
    setPending(true);
    const worker = settings.workerUrl.trim();
    if (worker) {
      try {
        const response = await fetch(`${worker.replace(/\/$/, "")}/v1/enquiries`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...enquiry, company: "" }),
        });
        if (!response.ok) throw new Error("refused");
        setSent("The office has the message. It will be read from the staff desk.");
        event.currentTarget.reset();
      } catch {
        addEnquiry(enquiry);
        setSent("We could not reach the school desk. The message is kept on this browser only. Please telephone the office.");
      }
    } else {
      addEnquiry(enquiry);
      setSent(
        "This preview keeps your message in the staff desk on this browser. It is not emailed. When the school connects its Cloudflare Worker, messages go to the office.",
      );
      event.currentTarget.reset();
    }
    setPending(false);
  }

  return (
    <SiteShell>
      <PageIntro
        kicker="Contact"
        title="The office, plainly."
        lede="These details come from the school’s public Facebook listing and national directories. The administration can correct them. If a number disagrees with a flyer in your hand, trust the one published here only after you have heard it from the school."
      />
      <Wrap className="grid gap-12 py-14 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="font-display text-3xl text-navy">University Practice Senior High School</p>
          <p className="leading-relaxed">
            {settings.poBox}
            <br />
            {settings.address}
          </p>
          <p>
            <a className="font-semibold text-navy" href={`tel:${settings.phone.replace(/\s/g, "")}`}>
              {settings.phone}
            </a>
          </p>
          <p>
            <a className="font-semibold text-navy" href={`mailto:${settings.email}`}>
              {settings.email}
            </a>
          </p>
          <p className="text-sm text-muted">{settings.officeHours}</p>
          <p className="text-sm">
            <a className="font-semibold text-navy" href={settings.facebook}>
              Facebook
            </a>
            {settings.youtube ? (
              <>
                {" · "}
                <a className="font-semibold text-navy" href={settings.youtube}>
                  YouTube
                </a>
              </>
            ) : null}
          </p>
          <iframe
            title="Map of University Practice Senior High School on the University of Cape Coast campus"
            className="mt-4 h-72 w-full border border-line"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.300%2C5.114%2C-1.272%2C5.135&layer=mapnik&marker=5.1245%2C-1.286"
          />
          <p className="text-xs text-muted">
            Marker at 5.1245° N, 1.2860° W, the coordinate published for the school.{" "}
            <a className="underline" href="https://www.openstreetmap.org/?mlat=5.1245&mlon=-1.286#map=16/5.1245/-1.286">
              Open the map
            </a>
            .
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 border border-line bg-paper p-6">
          <h2 className="text-2xl">Enquiry</h2>
          <label className="block space-y-1">
            <span className="lbl">Name</span>
            <input className="field" name="name" autoComplete="name" required />
          </label>
          <label className="block space-y-1">
            <span className="lbl">Email</span>
            <input className="field" name="email" type="email" autoComplete="email" required />
          </label>
          <label className="block space-y-1">
            <span className="lbl">Telephone</span>
            <input className="field" name="phone" autoComplete="tel" />
          </label>
          <label className="block space-y-1">
            <span className="lbl">I am writing as</span>
            <select className="field" name="audience" defaultValue="Parent or guardian">
              <option>Prospective student</option>
              <option>Parent or guardian</option>
              <option>Current student</option>
              <option>Old student</option>
              <option>Partner</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block space-y-1">
            <span className="lbl">Subject</span>
            <input className="field" name="subject" />
          </label>
          <label className="block space-y-1">
            <span className="lbl">Message</span>
            <textarea className="field min-h-36 py-2" name="message" required />
          </label>
          <label className="sr-only">
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
          <Button type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send to the office"}
          </Button>
          {sent ? <p className="text-sm leading-relaxed text-navy">{sent}</p> : null}
        </form>
      </Wrap>
    </SiteShell>
  );
}
