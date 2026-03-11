"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
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
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {bases.map((base) => (
        <Card
          key={base.id}
          role="button"
          tabIndex={0}
          className="cursor-pointer transition hover:border-primary/40 hover:shadow-md"
          onClick={() => router.push(`/${base.id}`)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              router.push(`/${base.id}`);
            }
          }}
        >
          <CardHeader>
            <CardAction>
              <span className="text-muted-foreground text-xs">#{base.id}</span>
            </CardAction>
            <CardTitle>{base.name}</CardTitle>
            <CardDescription>
              Created {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(base.createdAt)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-xs">
              Updated {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(base.updatedAt)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
