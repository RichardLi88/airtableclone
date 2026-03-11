"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type ViewItem = RouterOutputs["view"]["getByTable"][number];

type TableViewsSidebarProps = {
  baseId: string;
  tableId: string;
  views: ViewItem[];
  currentViewId?: string;
};

export function TableViewsSidebar({
  baseId,
  tableId,
  views,
  currentViewId,
}: TableViewsSidebarProps) {
  const router = useRouter();
  const createView = api.view.create.useMutation({
    onSuccess: (view) => {
      router.push(`/${baseId}/${tableId}?viewId=${view.id}`);
      router.refresh();
    },
  });

  const activeViewId = currentViewId ?? views[0]?.id;

  return (
    <aside className="flex w-[238px] shrink-0 border-r border-[#d8dce4] bg-[#f5f6f8]">
      <div className="flex w-10 flex-col items-center justify-between border-r border-[#d8dce4] py-3">
        <span className="h-5 w-5 rounded-md border border-[#cfd5df] bg-background" />
        <span className="h-5 w-5 rounded-md border border-[#cfd5df] bg-background" />
      </div>
      <div className="min-w-0 flex-1 overflow-y-auto p-2.5">
        <div className="mb-2">
          <Button
            className="h-7 w-full justify-start rounded-md border-[#cfd5de] bg-background px-2 text-[12px] text-[#3b4350]"
            variant="outline"
            onClick={() => createView.mutate({ tableId })}
            disabled={createView.isPending}
          >
            {createView.isPending ? "Creating view..." : "Create new..."}
          </Button>
        </div>

        <div className="mb-2 rounded-md border border-[#dde2ea] bg-background px-2 py-1.5 text-[12px] text-[#7b8493]">
          Find a view
        </div>

        <div className="space-y-0.5">
          {views.length === 0 ? (
            <p className="text-muted-foreground px-2 py-1 text-sm">No views found.</p>
          ) : (
            views.map((view) => (
              <Link
                key={view.id}
                href={`/${baseId}/${tableId}?viewId=${view.id}`}
                aria-current={view.id === activeViewId ? "page" : undefined}
                className={[
                  "block rounded-md px-2 py-1.5 text-[12px] text-[#2f3540]",
                  view.id === activeViewId ? "bg-[#e6ebf3] font-medium" : "hover:bg-[#edf1f6]",
                ].join(" ")}
              >
                {view.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}
