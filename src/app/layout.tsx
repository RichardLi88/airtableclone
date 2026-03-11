import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

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
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Airtable Clone",
  description: "Airtable Clone built with Next.js, Tailwind CSS, and tRPC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(geist.variable)}>
      <body className="h-screen overflow-hidden">
        <TRPCReactProvider>
          <div className="h-full w-full overflow-hidden bg-[#f7f8fa] text-foreground">
            <header className="border-b bg-background">
              <nav className="mx-auto flex h-12 w-full items-center px-4 md:px-6">
                <Link href="/" className="text-sm font-semibold tracking-tight text-[#2b2f38]">
                  airtable clone
                </Link>
              </nav>
            </header>
            <div className="flex h-[calc(100vh-3rem)] overflow-hidden">
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
                            <span className="group-data-[state=collapsed]/sidebar:hidden">
                              Home
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarContent>
                </Sidebar>
                <SidebarInset className="min-h-0 overflow-hidden">{children}</SidebarInset>
              </SidebarProvider>
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
