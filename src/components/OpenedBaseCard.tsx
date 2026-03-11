"use client";

import { HomePageCard } from "~/components/HomePageCard";
import { api } from "~/trpc/react";

type OpenedBaseCardProps = {
  baseId: string;
  baseName: string;
  openedAgoLabel: string;
};

export function OpenedBaseCard({ baseId, baseName, openedAgoLabel }: OpenedBaseCardProps) {
  const markOpened = api.base.markOpened.useMutation();

  return (
    <HomePageCard
      href={`/${baseId}`}
      className="bg-background p-3 hover:border-[#c8cfdb]"
      onClick={() => {
        // Fire-and-forget so navigation is never blocked.
        markOpened.mutate({ baseId });
      }}
    >
      <div className="group flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#8b3f7f] text-[20px] font-medium text-white">
          {baseName.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-medium text-[#2f3746]">{baseName}</p>
          <p className="text-[12px] text-[#738093]">Opened {openedAgoLabel}</p>
        </div>
      </div>
    </HomePageCard>
  );
}
