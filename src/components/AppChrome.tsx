"use client";

import {
  LuBell,
  LuBookOpen,
  LuGlobe,
  LuHouse,
  LuList,
  LuPlus,
  LuStar,
  LuInbox,
  LuUsers,
} from "react-icons/lu";
import { Question } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { AirtableNavBar } from "~/components/AirtableNavBar";
import { api } from "~/trpc/react";

type AppChromeProps = {
  children: React.ReactNode;
};

function BaseLeftStatusBar() {
  return (
    <aside className="flex w-14 shrink-0 flex-col justify-between border-r border-[#d8dde6] bg-white px-1 py-2">
      <div className="flex flex-col items-center gap-3">
        <Link
          href="/"
          aria-label="Back to home"
          className="grid h-6 w-6 place-items-center rounded-full text-[#2f3746] hover:bg-[#edf1f7]"
        >
          <span className="text-[11px] font-semibold">A</span>
        </Link>
        <button
          type="button"
          aria-label="Open Omni"
          className="grid h-7 w-7 place-items-center rounded-full text-[#1f6f5f] hover:bg-[#edf6f3]"
        >
          <span className="text-[11px] font-semibold">◎</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <button
          type="button"
          aria-label="Help menu"
          className="grid h-7 w-7 place-items-center rounded-full text-[#536175] hover:bg-[#eef1f6]"
        >
          <Question size={13} />
        </button>
        <button
          type="button"
          aria-label="No unseen notifications"
          className="grid h-7 w-7 place-items-center rounded-full text-[#536175] hover:bg-[#eef1f6]"
        >
          <LuBell size={14} />
        </button>
        <button
          type="button"
          aria-label="Account"
          className="grid h-7 w-7 place-items-center rounded-full border border-white bg-[#e4445e] text-[11px] font-semibold text-white shadow-sm"
        >
          R
        </button>
      </div>
    </aside>
  );
}

function HomeRail() {
  const router = useRouter();
  const utils = api.useUtils();
  const [isCreateBaseModalOpen, setIsCreateBaseModalOpen] = useState(false);
  const [newBaseName, setNewBaseName] = useState("");
  const createBase = api.base.create.useMutation({
    onSuccess: async (base) => {
      await utils.base.getAll.invalidate();
      setIsCreateBaseModalOpen(false);
      setNewBaseName("");
      router.push(`/${base.id}`);
    },
  });
  const handleCreateBase = () => {
    const trimmedName = newBaseName.trim();
    if (!trimmedName) {
      return;
    }
    createBase.mutate({ name: trimmedName });
  };

  return (
    <>
      <aside className="flex w-11 shrink-0 flex-col border-r border-[#d8dde6] bg-[#f6f7f9]">
        <div className="flex flex-col items-center gap-3 py-3">
          <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
            <LuHouse size={15} />
          </button>
          <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
            <LuStar size={15} />
          </button>
          <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
            <LuList size={15} />
          </button>
          <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
            <LuUsers size={15} />
          </button>
          <div className="my-1 h-px w-6 bg-[#dbe0e8]" />
        </div>
        <div className="mt-auto flex flex-col items-center gap-3 py-3">
          <div className="h-px w-6 bg-[#dbe0e8]" />
          <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
            <LuBookOpen size={15} />
          </button>
          <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
            <LuInbox size={15} />
          </button>
          <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
            <LuGlobe size={15} />
          </button>
          <button
            type="button"
            aria-label="Create a new base"
            className="grid h-7 w-7 place-items-center rounded-md border border-[#d8dde6] text-[#5e6777] hover:bg-[#eef1f6]"
            onClick={() => setIsCreateBaseModalOpen(true)}
          >
            <LuPlus size={15} />
          </button>
        </div>
      </aside>
      {isCreateBaseModalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="w-[420px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Create base</h2>
            <p className="mt-1 text-[12px] text-[#5d6676]">Give your new base a name to get started.</p>
            <div className="mt-4">
              <label className="mb-1 block text-[12px] font-medium text-[#323844]">Base name</label>
              <input
                type="text"
                value={newBaseName}
                onChange={(event) => setNewBaseName(event.target.value)}
                placeholder="e.g. Project tracker"
                autoFocus
                className="h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
              />
            </div>
            {createBase.error ? (
              <p className="mt-3 text-[11px] text-red-600">{createBase.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => {
                  setIsCreateBaseModalOpen(false);
                  setNewBaseName("");
                }}
                disabled={createBase.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleCreateBase}
                disabled={createBase.isPending || newBaseName.trim().length === 0}
              >
                {createBase.isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentBaseId = !isHome ? pathSegments[0] : undefined;

  if (!isHome) {
    return (
      <div className="flex h-screen overflow-hidden">
        <BaseLeftStatusBar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <header className="border-b border-[#d8dde6] bg-background">
            <AirtableNavBar isHome={false} baseId={currentBaseId} />
          </header>
          <main className="min-h-0 flex-1 overflow-hidden">{children}</main>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="border-b border-[#d8dde6] bg-background">
        <AirtableNavBar isHome baseId={currentBaseId} />
      </header>
      <div className="flex h-[calc(100vh-2.5rem)] overflow-hidden">
        <HomeRail />
        <main className="min-h-0 flex-1 overflow-auto bg-[#f3f4f7]">{children}</main>
      </div>
    </>
  );
}
