import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { AppChrome } from "~/components/AppChrome";
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
            <AppChrome>{children}</AppChrome>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
