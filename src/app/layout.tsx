import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

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
    <html lang="en" className={cn(geist.variable, "font-mono", jetbrainsMono.variable)}>
      <body>
        <TRPCReactProvider>
          <div className="min-h-screen w-full bg-background text-foreground">
            <div className="flex min-h-screen">
              <SidebarProvider>
                <Sidebar>
                  <SidebarContent>
                    <div className="mb-2 flex items-center justify-end">
                      <SidebarTrigger />
                    </div>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Link href="/" className="inline-flex w-full items-center gap-2">
                            <span className="bg-sidebar-primary text-sidebar-primary-foreground inline-block size-2 shrink-0 rounded-full" />
                            <span className="group-data-[state=collapsed]/sidebar:hidden">
                              Home
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarContent>
                </Sidebar>
                <SidebarInset>{children}</SidebarInset>
              </SidebarProvider>
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
