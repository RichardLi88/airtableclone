"use client";

import { useState } from "react";

import { TableViewsSidebar } from "~/components/TableViewsSidebar";
import { Button } from "~/components/ui/button";
import type { RouterOutputs } from "~/trpc/react";

type ViewItem = RouterOutputs["view"]["getByTable"][number];

type TableWorkspaceChromeProps = {
  baseId: string;
  tableId: string;
  views: ViewItem[];
  currentViewId?: string;
  currentViewName: string;
  children: React.ReactNode;
};

const toolbarButtonClass =
  "h-7 rounded-md border border-transparent px-2 text-[12px] font-medium text-[#4b5565] hover:border-[#e2e6ed] hover:bg-[#f7f8fa]";

export function TableWorkspaceChrome({
  baseId,
  tableId,
  views,
  currentViewId,
  currentViewName,
  children,
}: TableWorkspaceChromeProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <div className="flex h-9 items-center justify-between border-b border-[#d8dce4] bg-background px-2.5">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 rounded-md border border-transparent px-2 text-[#4b5565] hover:border-[#e2e6ed] hover:bg-[#f2f4f8]"
            onClick={() => setIsSidebarCollapsed((value) => !value)}
            aria-label={isSidebarCollapsed ? "Expand views sidebar" : "Collapse views sidebar"}
          >
            <span className="flex w-3 flex-col gap-0.5">
              <span className="h-0.5 w-3 bg-current" />
              <span className="h-0.5 w-3 bg-current" />
              <span className="h-0.5 w-3 bg-current" />
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 rounded-md border border-[#dbe0e8] bg-[#f8fafc] px-2 text-[12px] font-medium text-[#2f3540]"
          >
            {currentViewName}
            <span className="ml-1 text-[10px] text-[#7a8495]">v</span>
          </Button>
        </div>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            Hide fields
          </Button>
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            Filter
          </Button>
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            Group
          </Button>
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            Sort
          </Button>
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            Color
          </Button>
          <span className="mx-1 h-4 w-px bg-[#dce1e9]" />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 rounded-md border border-transparent px-2 text-[12px] font-medium text-[#4b5565] hover:border-[#e2e6ed] hover:bg-[#f7f8fa]"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {!isSidebarCollapsed ? (
          <TableViewsSidebar
            baseId={baseId}
            tableId={tableId}
            views={views}
            currentViewId={currentViewId}
          />
        ) : null}
        {children}
      </div>
    </>
  );
}
