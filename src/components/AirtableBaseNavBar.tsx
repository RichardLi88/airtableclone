"use client";

import {
  CaretDown,
  ClockCounterClockwise,
  LinkSimple,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { api } from "~/trpc/react";

const baseNavItems = [
  { label: "Data", href: (baseId: string) => `/${baseId}` },
  { label: "Automations", href: (baseId: string) => `/${baseId}/automations` },
  { label: "Interfaces", href: (baseId: string) => `/${baseId}/interfaces` },
  { label: "Forms", href: (baseId: string) => `/${baseId}/forms` },
] as const;

type AirtableBaseNavBarProps = {
  baseId: string;
};

export function AirtableBaseNavBar({ baseId }: AirtableBaseNavBarProps) {
  const pathname = usePathname();
  const { data: bases } = api.base.getAll.useQuery(undefined, {
    staleTime: 30_000,
  });
  const currentBaseName = bases?.find((base) => base.id === baseId)?.name ?? "Untitled Base";
  const activeSection = pathname.split("/")[2];

  return (
    <nav className="grid h-10 w-full grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-[#d8dde6] bg-white px-2">
      <div className="flex min-w-0 items-center gap-2 overflow-hidden">
        <Link
          href="/"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[#d5dbe5] bg-[#2f7e6b] text-white"
          aria-label="Back to home"
        >
          <span className="text-[11px] font-semibold">A</span>
        </Link>
        <button
          type="button"
          className="inline-flex min-w-0 max-w-[480px] items-center gap-1 rounded px-1 py-0.5 text-[#1f2530] hover:bg-[#f2f4f8]"
          aria-label="Open base settings menu"
        >
          <span className="truncate text-[14px] font-semibold">{currentBaseName}</span>
          <CaretDown size={12} className="shrink-0 text-[#6b7485]" />
        </button>
      </div>
      <ul className="flex h-full items-stretch gap-5 px-1">
        {baseNavItems.map((item) => {
          const isActive = item.label === "Data" ? activeSection === undefined : activeSection === item.label.toLowerCase();

          return (
            <li key={item.label} className="relative flex h-full items-center">
              <Link
                href={item.href(baseId)}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex h-full items-center text-[13px] font-semibold ${
                  isActive ? "text-[#1f2530]" : "text-[#687386] hover:text-[#2f3746]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#2f7e6b] transition-all ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="ml-auto flex items-center gap-1 text-[#5e6777]">
        <button
          type="button"
          className="grid h-7 w-7 place-items-center rounded-full hover:bg-[#eef1f6]"
          aria-label="Base history"
        >
          <ClockCounterClockwise size={14} />
        </button>
        <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#4f596a] hover:bg-[#eef1f6]">
          Trial: 7 days left
        </span>
        <button
          type="button"
          className="inline-flex h-7 items-center rounded-full border border-[#d8dde6] bg-[#f8f9fb] px-2.5 text-[11px] font-medium text-[#283142] hover:bg-[#eff2f7]"
          aria-label="Nothing published yet"
        >
          <PaperPlaneTilt size={12} className="mr-1" />
          Launch
        </button>
        <button
          type="button"
          className="grid h-7 w-7 place-items-center rounded-full hover:bg-[#eef1f6]"
          aria-label="Copy link"
        >
          <LinkSimple size={13} />
        </button>
        <button
          type="button"
          className="inline-flex h-7 items-center rounded-full bg-[#2f7e6b] px-3 text-[11px] font-semibold text-white hover:bg-[#2a6f5e]"
        >
          Share
        </button>
      </div>
    </nav>
  );
}
