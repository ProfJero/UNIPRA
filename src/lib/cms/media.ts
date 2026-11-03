import { useCms } from "./store";

export async function storeImage(file: File): Promise<string> {
  const settings = useCms.getState().settings;
  const sessionRaw = sessionStorage.getItem("upshs-session");
  const token = sessionRaw ? (JSON.parse(sessionRaw) as { token?: string }).token : undefined;

  if (settings.workerUrl.trim() && token && settings.cloudName.trim()) {
    const signed = await fetch(`${settings.workerUrl.replace(/\/$/, "")}/v1/media/signature`, {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
    });
    if (!signed.ok) throw new Error("The desk could not sign this upload.");
    const payload = (await signed.json()) as {
      cloudName: string;
      apiKey: string;
      timestamp: number;
      signature: string;
      folder: string;
    };
    const body = new FormData();
    body.append("file", file);
    body.append("api_key", payload.apiKey);
    body.append("timestamp", String(payload.timestamp));
    body.append("signature", payload.signature);
    body.append("folder", payload.folder);
    const uploaded = await fetch(`https://api.cloudinary.com/v1_1/${payload.cloudName}/image/upload`, {
      method: "POST",
      body,
    });
    if (!uploaded.ok) throw new Error("Cloudinary refused the signed upload.");
    const json = (await uploaded.json()) as { secure_url: string };
    return json.secure_url;
  }

  if (settings.cloudName.trim() && settings.uploadPreset.trim()) {
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", settings.uploadPreset.trim());
    const uploaded = await fetch(
      `https://api.cloudinary.com/v1_1/${settings.cloudName.trim()}/image/upload`,
      { method: "POST", body },
    );
    if (!uploaded.ok) throw new Error("Cloudinary refused this upload. Check the cloud name and unsigned preset.");
    const json = (await uploaded.json()) as { secure_url: string };
    return json.secure_url;
  }

  throw new Error("Add a Cloudinary cloud name and unsigned upload preset in Settings, or connect the Cloudflare Worker for signed uploads.");
}
