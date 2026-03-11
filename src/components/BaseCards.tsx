"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import type { RouterOutputs } from "~/trpc/react";

type BaseCardItem = RouterOutputs["base"]["getAll"][number];

type BaseCardsProps = {
  bases: BaseCardItem[];
};

export function BaseCards({ bases }: BaseCardsProps) {
  const router = useRouter();

  return (
    <div className="mt-6 space-y-4">
      {bases.map((base) => (
        <Card
          key={base.id}
          role="button"
          tabIndex={0}
          className="hover:border-primary/35 cursor-pointer gap-0 rounded-2xl border border-border/80 bg-card py-0 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
          onClick={() => router.push(`/${base.id}`)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              router.push(`/${base.id}`);
            }
          }}
        >
          <CardContent className="flex items-center gap-6 p-6">
            <div className="grid size-28 place-items-center rounded-3xl border border-[#6f2f69] bg-[#8b3f7f] text-5xl font-medium text-white shadow-inner">
              {base.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate text-4xl leading-tight font-medium tracking-tight">
                {base.name}
              </CardTitle>
              <CardDescription className="mt-2 text-3xl leading-tight">
                Created{" "}
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(base.createdAt)}
              </CardDescription>
              <p className="text-muted-foreground mt-2 text-sm">
                Updated{" "}
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(base.updatedAt)}
              </p>
            </div>
            <span className="text-muted-foreground self-start text-xs">#{base.id}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
