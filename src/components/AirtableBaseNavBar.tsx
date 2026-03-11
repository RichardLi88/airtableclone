"use client";

import {
  CaretDown,
  ClockCounterClockwise,
  LinkSimple,
  RocketLaunch,
  Sparkle,
} from "@phosphor-icons/react";
import Link from "next/link";

import { HomeOnlyBrand } from "~/components/HomeOnlyBrand";
import { api } from "~/trpc/react";

const baseNavItems = ["Data", "Automations", "Interfaces", "Forms"] as const;

type AirtableBaseNavBarProps = {
  baseId: string;
};

export function AirtableBaseNavBar({ baseId }: AirtableBaseNavBarProps) {
  const { data: bases } = api.base.getAll.useQuery(undefined, {
    staleTime: 30_000,
  });
  const currentBaseName = bases?.find((base) => base.id === baseId)?.name ?? "Untitled Base";

  return (
    <nav className="flex h-10 w-full items-center px-2.5">
      <HomeOnlyBrand />
      <Link href="/" className="flex min-w-0 items-center gap-2 rounded px-1 py-0.5 hover:bg-[#f1f3f7]">
        <span className="grid h-5 w-5 place-items-center rounded bg-[#7a3f72] text-white">
          <Sparkle size={12} weight="fill" />
        </span>
        <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#1f2530]">
          <span className="truncate">{currentBaseName}</span>
          <CaretDown size={11} className="text-[#6b7485]" />
        </span>
      </Link>
      <div className="mx-auto flex items-center gap-5 text-[12px] text-[#566074]">
        {baseNavItems.map((item, index) => {
          const isActive = index === 0;
          return (
            <button
              key={item}
              className={`relative py-2 font-medium ${isActive ? "text-[#1f2530]" : "hover:text-[#2f3746]"}`}
            >
              {item}
              {isActive ? <span className="absolute inset-x-0 -bottom-[9px] h-0.5 bg-[#5b3f8f]" /> : null}
            </button>
          );
        })}
      </div>
      <div className="ml-3 flex items-center gap-1.5 text-[#5e6777]">
        <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
          <ClockCounterClockwise size={14} />
        </button>
        <span className="rounded border border-[#e0e4eb] bg-[#f8f9fb] px-2 py-1 text-[11px] text-[#556072]">
          Trial: 13 days left
        </span>
        <button className="inline-flex h-7 items-center gap-1 rounded border border-[#d8dde6] bg-[#f8f9fb] px-2 text-[11px] font-medium text-[#283142] hover:bg-[#eff2f7]">
          <RocketLaunch size={12} />
          Launch
        </button>
        <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
          <LinkSimple size={13} />
        </button>
        <button className="inline-flex h-7 items-center rounded bg-[#6a2c68] px-2.5 text-[11px] font-semibold text-white hover:bg-[#5f275d]">
          Share
        </button>
      </div>
    </nav>
  );
}
