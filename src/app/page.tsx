import { Rows, SquaresFour } from "@phosphor-icons/react/dist/ssr";

import { HomePageCard } from "~/components/HomePageCard";
import { OpenedBaseCard } from "~/components/OpenedBaseCard";
import { CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/server";

type HomePageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

function formatOpenedAgo(openedAt: Date) {
  const elapsedMs = Date.now() - openedAt.getTime();
  const minuteMs = 1000 * 60;
  const hourMs = minuteMs * 60;
  const dayMs = hourMs * 24;

  if (elapsedMs >= dayMs) {
    const days = Math.max(1, Math.floor(elapsedMs / dayMs));
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }

  if (elapsedMs >= hourMs) {
    const hours = Math.max(1, Math.floor(elapsedMs / hourMs));
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const minutes = Math.max(1, Math.floor(elapsedMs / minuteMs));
  return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q?.trim().toLowerCase() ?? "";
  const bases = await api.base.getAll();
  const filteredBases = query
    ? bases.filter((base) => base.name.toLowerCase().includes(query))
    : bases;

  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-7xl px-7 py-6">
        <h1 className="text-[34px] font-semibold tracking-tight text-[#1f2530]">Home</h1>

        <section className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <HomePageCard className="bg-[#f7f8fb]">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-[18px] font-medium text-[#2f3746]">Start with Omni</CardTitle>
              <CardDescription className="text-[13px] text-[#6f7a8d]">
                Use AI to build a custom app tailored to your workflow.
              </CardDescription>
            </CardHeader>
          </HomePageCard>
          <HomePageCard className="bg-[#f7f8fb]">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-[18px] font-medium text-[#2f3746]">Start with templates</CardTitle>
              <CardDescription className="text-[13px] text-[#6f7a8d]">
                Select a template to get started and customize as you go.
              </CardDescription>
            </CardHeader>
          </HomePageCard>
          <HomePageCard className="bg-[#f7f8fb]">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-[18px] font-medium text-[#2f3746]">Quickly upload</CardTitle>
              <CardDescription className="text-[13px] text-[#6f7a8d]">
                Easily migrate your existing projects in just a few minutes.
              </CardDescription>
            </CardHeader>
          </HomePageCard>
          <HomePageCard className="bg-[#f7f8fb]">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-[18px] font-medium text-[#2f3746]">Build an app on your own</CardTitle>
              <CardDescription className="text-[13px] text-[#6f7a8d]">
                Start with a blank app and build your ideal workflow.
              </CardDescription>
            </CardHeader>
          </HomePageCard>
        </section>

        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[18px] font-medium text-[#303847]">Opened anytime</h2>
            <div className="flex items-center gap-1 text-[#7b8493]">
              <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#e9edf3]">
                <Rows size={14} />
              </button>
              <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#e9edf3]">
                <SquaresFour size={14} />
              </button>
            </div>
          </div>
          {filteredBases.length === 0 ? (
            <HomePageCard className="bg-background">
              <CardHeader className="px-4 py-3">
                <CardTitle className="text-[18px] font-medium text-[#2f3746]">
                  {query ? "No matching bases" : "No bases yet"}
                </CardTitle>
                <CardDescription className="text-[13px] text-[#6f7a8d]">
                  {query
                    ? "Try a different search term."
                    : "Create your first base to get started."}
                </CardDescription>
              </CardHeader>
            </HomePageCard>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
              {filteredBases.map((base) => {
                const openedAt = base.lastOpened ?? base.updatedAt;
                return (
                  <OpenedBaseCard
                    key={base.id}
                    baseId={base.id}
                    baseName={base.name}
                    openedAgoLabel={formatOpenedAgo(openedAt)}
                  />
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
