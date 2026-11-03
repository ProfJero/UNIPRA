import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canEditSettings } from "@/lib/cms/access";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { SiteSettings } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsDesk,
  head: () => ({ meta: [{ title: "Settings · UNIPRA staff desk" }] }),
});

function SettingsDesk() {
  const settings = useCms((state) => state.settings);
  const update = useCms((state) => state.updateSettings);
  const resetContent = useCms((state) => state.resetContent);
  const { session } = useSession();
  const [draft, setDraft] = useState<SiteSettings>(settings);
  const [health, setHealth] = useState("");
  useEffect(() => {
    const apply = () => setDraft(useCms.getState().settings);
    if (useCms.persist.hasHydrated()) apply();
    return useCms.persist.onFinishHydration(apply);
  }, []);
  if (!session) return null;
  if (!canEditSettings(session.role)) return <Deny>Settings are kept by the school administrator.</Deny>;

  function set<K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <DeskTitle
        title="Settings"
        lede="Telephone, email and address are public. The worker address and Cloudinary names connect this desk to Supabase and to photograph storage. Secrets stay on the worker, never in the browser."
      />
      <form
        className="grid gap-3 border border-line bg-paper p-4"
        onSubmit={(event) => {
          event.preventDefault();
          update(draft);
          toast.success("Settings saved on this browser.");
        }}
      >
        <Field label="Telephone" value={draft.phone} onChange={(value) => set("phone", value)} />
        <Field label="Email" value={draft.email} onChange={(value) => set("email", value)} />
        <Field label="Postal address" value={draft.poBox} onChange={(value) => set("poBox", value)} />
        <Field label="Campus address" value={draft.address} onChange={(value) => set("address", value)} />
        <Field label="Office hours" value={draft.officeHours} onChange={(value) => set("officeHours", value)} />
        <Field label="Facebook" value={draft.facebook} onChange={(value) => set("facebook", value)} />
        <Field label="YouTube" value={draft.youtube} onChange={(value) => set("youtube", value)} />
        <Field label="Cloudflare Worker URL" value={draft.workerUrl} onChange={(value) => set("workerUrl", value)} />
        <Field label="Cloudinary cloud name" value={draft.cloudName} onChange={(value) => set("cloudName", value)} />
        <Field label="Cloudinary unsigned preset" value={draft.uploadPreset} onChange={(value) => set("uploadPreset", value)} />
        <label className="flex min-h-11 items-center gap-2 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            checked={draft.useRemotePublic}
            onChange={(event) => set("useRemotePublic", event.target.checked)}
          />
          Load the public site from Supabase through the worker
        </label>
        <div className="flex flex-wrap gap-2">
          <Button type="submit">Save settings</Button>
          <Button
            type="button"
            variant="line"
            onClick={async () => {
              if (!draft.workerUrl.trim()) {
                setHealth("Add the worker address first.");
                return;
              }
              try {
                const response = await fetch(`${draft.workerUrl.replace(/\/$/, "")}/v1/health`);
                setHealth(response.ok ? "The worker answered." : `The worker replied ${response.status}.`);
              } catch {
                setHealth("The worker could not be reached.");
              }
            }}
          >
            Test worker
          </Button>
        </div>
        {health ? <p className="text-sm text-navy">{health}</p> : null}
      </form>
      <div className="mt-8 border border-line bg-paper p-4">
        <h2 className="text-xl">Starter text</h2>
        <p className="mt-2 text-sm text-muted">
          Restores the researched pages. Your worker address and Cloudinary settings are kept.
        </p>
        <Button
          type="button"
          variant="ghost"
          className="mt-3"
          onClick={() => {
            resetContent();
            toast.success("Starter text restored.");
          }}
        >
          Restore starter content
        </Button>
      </div>
    </>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="space-y-1">
      <span className="lbl">{label}</span>
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
