"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

type HomePageCardProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function HomePageCard({ children, href, className, onClick }: HomePageCardProps) {
  const card = (
    <Card className={cn("rounded-lg border border-[#d8dde6] py-0 shadow-none", className)}>
      {children}
    </Card>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block" onClick={onClick}>
      {card}
    </Link>
  );
}
