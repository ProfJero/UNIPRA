import { useEffect, type ReactNode } from "react";
import { useCms } from "./store";

export function CmsHydrator({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      await useCms.persist.rehydrate();
      const settings = useCms.getState().settings;
      if (!settings.useRemotePublic || !settings.workerUrl.trim()) return;
      try {
        const response = await fetch(`${settings.workerUrl.replace(/\/$/, "")}/v1/public`);
        if (!response.ok) return;
        const bundle = await response.json();
        if (!cancelled) useCms.getState().replacePublic(bundle);
      } catch {
        // Keep the copy already on this browser.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return children;
}
