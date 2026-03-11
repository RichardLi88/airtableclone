"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type TableItem = RouterOutputs["table"]["getByBase"][number];

type TableTabsBarProps = {
  baseId: string;
  tables: TableItem[];
  currentTableId?: string;
};

export function TableTabsBar({ baseId, tables, currentTableId }: TableTabsBarProps) {
  const router = useRouter();
  const createTable = api.table.create.useMutation({
    onSuccess: (table) => {
      router.push(`/${baseId}/${table.id}`);
      router.refresh();
    },
  });

  const isAddingTable = createTable.isPending;

  return (
    <div className="border-b border-[#d8dce4] bg-[#f2e9f2]">
      <div className="flex h-9 items-end gap-0.5 overflow-x-auto px-3">
        {tables.map((table) => {
          const isCurrentTable = table.id === currentTableId;

          return (
            <Link
              key={table.id}
              href={`/${baseId}/${table.id}`}
              aria-current={isCurrentTable ? "page" : undefined}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "h-8 rounded-t-md rounded-b-none border border-transparent border-b-0 px-3 text-[12px] text-[#2f3540]",
                isCurrentTable
                  ? "border-[#d8dce4] bg-background font-semibold"
                  : "mb-px bg-[#eee2ec] hover:bg-[#e8dbe7]",
              )}
            >
              {table.name}
            </Link>
          );
        })}
        <Button
          variant="outline"
          size="sm"
          className="mb-0.5 h-7 rounded-md border-[#d3d8e1] bg-[#f7f8fb] px-2.5 text-[12px] text-[#3d4654]"
          onClick={() => createTable.mutate({ baseId })}
          disabled={isAddingTable}
        >
          {isAddingTable ? "Adding..." : "+ Add"}
        </Button>
      </div>
    </div>
  );
}
