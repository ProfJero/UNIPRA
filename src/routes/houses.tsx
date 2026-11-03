import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/houses")({
  component: HousesPage,
  head: () => ({
    meta: [
      { title: "Houses · University Practice Senior High School" },
      { name: "description", content: "The six houses of University Practice Senior High School: Ackah, Densu, Tano, Nkrumah, Pra and Volta." },
    ],
  }),
});

function HousesPage() {
  const houses = useCms((state) => state.houses);
  return (
    <SiteShell>
      <PageIntro
        kicker="House life"
        title="Six houses."
        lede="The public record names Ackah, Densu, Tano, Nkrumah, Pra and Volta. Colours, songs and founding stories are left blank until the school writes them. Invented house lore does not belong on an official site."
      />
      <Wrap className="grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {houses.map((house) => (
          <article key={house.id} className="border border-line bg-paper p-6">
            <h2 className="text-3xl">{house.name}</h2>
            <p className="mt-3 leading-relaxed text-muted">{house.summary}</p>
          </article>
        ))}
      </Wrap>
    </SiteShell>
  );
}
