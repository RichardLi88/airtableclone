"use client";

import {
  BookOpen,
  GlobeHemisphereWest,
  House,
  List,
  Plus,
  Star,
  Tray,
  UsersThree,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AirtableNavBar } from "~/components/AirtableNavBar";
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
  const isHome = pathname === "/";
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentBaseId = !isHome ? pathSegments[0] : undefined;

  return (
    <>
      <header className="border-b border-[#d8dde6] bg-background">
        <AirtableNavBar isHome={isHome} baseId={currentBaseId} />
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
