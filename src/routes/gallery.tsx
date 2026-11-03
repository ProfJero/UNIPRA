import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";
import type { Photo } from "@/lib/cms/types";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery · University Practice Senior High School" },
      { name: "description", content: "Photographs published by University Practice Senior High School." },
    ],
  }),
});

function GalleryPage() {
  const albums = useCms((state) => state.albums);
  const [open, setOpen] = useState<Photo | null>(null);
  return (
    <SiteShell>
      <PageIntro
        kicker="Gallery"
        title="Pictures the media team is willing to own."
        lede="Official campus photography should come through Cloudinary, from the staff desk. Until those files arrive, a few studies hold the page. Each one says, in its caption, whether it is the school or only a stand-in."
      />
      <Wrap className="space-y-12 py-14">
        {albums.map((album) => (
          <section key={album.id}>
            <h2 className="text-3xl">{album.title}</h2>
            <p className="mt-2 max-w-2xl text-muted">{album.summary}</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {album.photos.map((photo) => (
                <li key={photo.id}>
                  <button type="button" className="block w-full text-left" onClick={() => setOpen(photo)}>
                    <img src={photo.src} alt={photo.alt} className="aspect-3/2 w-full object-cover" />
                    <span className="mt-2 block text-sm leading-relaxed text-muted">{photo.caption}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Wrap>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-navy-deep/90 p-4" role="dialog" aria-modal="true" aria-label={open.alt}>
          <button type="button" className="absolute inset-0" aria-label="Close" onClick={() => setOpen(null)} />
          <figure className="relative z-10 max-h-full max-w-4xl">
            <img src={open.src} alt={open.alt} className="max-h-[80vh] w-full object-contain" />
            <figcaption className="mt-3 text-sm text-paper">{open.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </SiteShell>
  );
}
