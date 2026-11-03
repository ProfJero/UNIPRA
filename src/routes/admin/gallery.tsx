import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { canDelete, canDraft } from "@/lib/cms/access";
import { slugify } from "@/lib/cms/format";
import { storeImage } from "@/lib/cms/media";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryDesk,
  head: () => ({ meta: [{ title: "Gallery · UNIPRA staff desk" }] }),
});

function GalleryDesk() {
  const albums = useCms((state) => state.albums);
  const saveAlbum = useCms((state) => state.saveAlbum);
  const deleteAlbum = useCms((state) => state.deleteAlbum);
  const addPhoto = useCms((state) => state.addPhoto);
  const deletePhoto = useCms((state) => state.deletePhoto);
  const { session } = useSession();
  const [albumId, setAlbumId] = useState(albums[0]?.id ?? "");
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  if (!session) return null;
  if (!canDraft(session.role)) return <Deny>Viewers cannot change the gallery.</Deny>;

  return (
    <>
      <DeskTitle title="Gallery" lede="Photographs should be the school’s own. Upload them to Cloudinary, and write a caption that does not over-claim." />
      <form
        className="mb-6 flex flex-wrap gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          if (!title.trim()) return;
          const id = crypto.randomUUID();
          saveAlbum({ id, slug: slugify(title), title: title.trim(), summary: "Published by the media team.", photos: [] });
          setAlbumId(id);
          setTitle("");
          toast.success("Album created.");
        }}
      >
        <input className="field max-w-sm" placeholder="New album title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <Button type="submit" variant="line">Create album</Button>
      </form>
      <label className="space-y-1">
        <span className="lbl">Album</span>
        <select className="field max-w-md" value={albumId} onChange={(event) => setAlbumId(event.target.value)}>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>{album.title}</option>
          ))}
        </select>
      </label>
      <div className="mt-4 grid gap-3 border border-line bg-paper p-4">
        <input className="field" placeholder="Caption" value={caption} onChange={(event) => setCaption(event.target.value)} />
        <input className="field" placeholder="Image URL, if you already have one" value={url} onChange={(event) => setUrl(event.target.value)} />
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() => {
              if (!albumId || !url.trim()) return;
              addPhoto(albumId, { id: crypto.randomUUID(), src: url.trim(), alt: caption || "School photograph", caption });
              setUrl("");
              setCaption("");
              toast.success("Photograph added.");
            }}
          >
            Add by address
          </Button>
          <label className="inline-flex min-h-11 cursor-pointer items-center border border-line px-4 text-sm font-semibold text-navy">
            Upload
            <input
              className="sr-only"
              type="file"
              accept="image/*"
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (!file || !albumId) return;
                try {
                  const src = await storeImage(file);
                  addPhoto(albumId, { id: crypto.randomUUID(), src, alt: caption || file.name, caption: caption || file.name });
                  setCaption("");
                  toast.success("Uploaded to Cloudinary.");
                } catch (error) {
                  toast.error(error instanceof Error ? error.message : "Upload failed.");
                }
              }}
            />
          </label>
          {canDelete(session.role) ? (
            <Button type="button" variant="ghost" onClick={() => albumId && deleteAlbum(albumId)}>
              Delete album
            </Button>
          ) : null}
        </div>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {albums.find((album) => album.id === albumId)?.photos.map((photo) => (
          <li key={photo.id} className="border border-line bg-paper">
            <img src={photo.src} alt={photo.alt} className="aspect-video w-full object-cover" />
            <div className="flex items-start justify-between gap-2 p-3">
              <p className="text-sm text-muted">{photo.caption}</p>
              <button type="button" className="text-sm font-semibold text-navy" onClick={() => deletePhoto(albumId, photo.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
