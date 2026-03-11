"use client";

import {
  Bell,
  BookOpen,
  CaretDown,
  ClockCounterClockwise,
  GlobeHemisphereWest,
  House,
  LinkSimple,
  List,
  MagnifyingGlass,
  Plus,
  Question,
  RocketLaunch,
  Sparkle,
  Star,
  Tray,
  UsersThree,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { HomeOnlyBrand } from "~/components/HomeOnlyBrand";
import { api } from "~/trpc/react";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";

type AppChromeProps = {
  children: React.ReactNode;
};

const baseNavItems = ["Data", "Automations", "Interfaces", "Forms"] as const;

function HomeRail() {
  return (
    <aside className="flex w-11 shrink-0 flex-col border-r border-[#d8dde6] bg-[#f6f7f9]">
      <div className="flex flex-col items-center gap-3 py-3">
        <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
          <House size={15} weight="regular" />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
          <Star size={15} weight="regular" />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
          <List size={15} weight="regular" />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded text-[#222733] hover:bg-[#e9edf3]">
          <UsersThree size={15} weight="regular" />
        </button>
        <div className="my-1 h-px w-6 bg-[#dbe0e8]" />
      </div>
      <div className="mt-auto flex flex-col items-center gap-3 py-3">
        <div className="h-px w-6 bg-[#dbe0e8]" />
        <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
          <BookOpen size={15} weight="regular" />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
          <Tray size={15} weight="regular" />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded text-[#5e6777] hover:bg-[#e9edf3]">
          <GlobeHemisphereWest size={15} weight="regular" />
        </button>
        <button className="grid h-7 w-7 place-items-center rounded-md border border-[#d8dde6] text-[#5e6777] hover:bg-[#eef1f6]">
          <Plus size={15} weight="regular" />
        </button>
      </div>
    </aside>
  );
}

export function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isHome = pathname === "/";
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentBaseId = !isHome ? pathSegments[0] : undefined;
  const { data: bases } = api.base.getAll.useQuery(undefined, {
    enabled: !isHome,
    staleTime: 30_000,
  });
  const currentBaseName = currentBaseId
    ? (bases?.find((base) => base.id === currentBaseId)?.name ?? "Untitled Base")
    : "Untitled Base";
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [homeSearch, setHomeSearch] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    if (!isHome) {
      return;
    }

    setHomeSearch(searchParams.get("q") ?? "");
  }, [isHome, searchParams]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHome]);

  const updateHomeSearch = (nextValue: string) => {
    setHomeSearch(nextValue);

    const params = new URLSearchParams(searchParams.toString());
    if (nextValue.trim()) {
      params.set("q", nextValue.trim());
    } else {
      params.delete("q");
    }

    const query = params.toString();
    router.replace(query ? `/?${query}` : "/");
  };

  return (
    <>
      <header className="border-b border-[#d8dde6] bg-background">
        <nav className="flex h-10 w-full items-center px-2.5">
          {isHome ? (
            <button className="mr-3 grid h-6 w-6 place-items-center rounded text-[#646f80] hover:bg-[#eef1f6]">
              <List size={15} />
            </button>
          ) : null}
          <HomeOnlyBrand />
          {isHome ? (
            <>
              <div className="mx-auto flex h-8 w-full max-w-[360px] items-center rounded-full border border-[#d8dde6] bg-[#f7f8fa] px-3">
                <MagnifyingGlass size={14} className="text-[#768094]" />
                <input
                  ref={searchInputRef}
                  value={homeSearch}
                  onChange={(event) => updateHomeSearch(event.target.value)}
                  placeholder="Search..."
                  className="ml-2 w-full bg-transparent text-[12px] text-[#4f5867] placeholder:text-[#7b8493] outline-none"
                  aria-label="Search bases"
                />
                <span className="ml-auto text-[11px] text-[#9aa3b2]">Ctrl K</span>
              </div>
              <div className="ml-3 flex items-center gap-2 text-[#5e6777]">
                <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
                  <Question size={14} />
                </button>
                <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
                  <Bell size={14} />
                </button>
                <button className="grid h-6 w-6 place-items-center rounded-full bg-[#e03a7b] text-[11px] font-semibold text-white">
                  R
                </button>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </header>
      <div className="flex h-[calc(100vh-2.5rem)] overflow-hidden">
        {isHome ? (
          <>
            <HomeRail />
            <main className="min-h-0 flex-1 overflow-auto bg-[#f3f4f7]">{children}</main>
          </>
        ) : (
          <SidebarProvider>
            <Sidebar className="border-r border-border/70 bg-[#f1f3f6]">
              <SidebarContent className="gap-3 p-3">
                <div className="mb-1 flex items-center justify-end">
                  <SidebarTrigger />
                </div>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-9 rounded-lg bg-[#e7ebf2] text-[#1f2937] hover:bg-[#dfe5ee]">
                      <Link href="/" className="inline-flex w-full items-center gap-2.5">
                        <span className="inline-block size-2 shrink-0 rounded-full bg-[#7d8ba3]" />
                        <span className="group-data-[state=collapsed]/sidebar:hidden">Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <SidebarInset className="min-h-0 overflow-hidden">{children}</SidebarInset>
          </SidebarProvider>
        )}
      </div>
    </>
  );
}
