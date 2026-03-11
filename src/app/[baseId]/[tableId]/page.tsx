import { redirect } from "next/navigation";

import { TablePanel } from "~/components/TablePanel";
import { TableTabsBar } from "~/components/TableTabsBar";
import { TableWorkspaceChrome } from "~/components/TableWorkspaceChrome";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";

type BaseTablePageProps = {
  params: Promise<{
    baseId: string;
    tableId: string;
  }>;
  searchParams: Promise<{
    viewId?: string;
  }>;
};

type TableItem = RouterOutputs["table"]["getByBase"][number];
type ViewItem = RouterOutputs["view"]["getByTable"][number];

export default async function BaseTablePage({ params, searchParams }: BaseTablePageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const baseId: TableItem["baseId"] = resolvedParams.baseId;
  const tableId: TableItem["id"] = resolvedParams.tableId;
  const requestedViewId = resolvedSearchParams.viewId;

  const [tables, views]: [TableItem[], ViewItem[]] = await Promise.all([
    api.table.getByBase({ baseId }),
    api.view.getByTable({ tableId }),
  ]);
  const firstTableId = tables[0]?.id;
  const firstViewId = views[0]?.id;

  if (tables.length > 0) {
    const tableExistsInBase = tables.some((table) => table.id === tableId);

    if (!tableExistsInBase && firstTableId) {
      redirect(`/${baseId}/${firstTableId}`);
    }
  }

  const currentViewId =
    requestedViewId && views.some((view) => view.id === requestedViewId) ? requestedViewId : firstViewId;

  if (!currentViewId) {
    throw new Error("Expected at least one view for this table.");
  }

  const currentViewName = views.find((view) => view.id === currentViewId)?.name ?? "Grid view";

  return (
    <main className="flex h-full w-full flex-col overflow-hidden bg-[#f3f4f7]">
      <TableTabsBar baseId={baseId} tables={tables} currentTableId={tableId} />
      <TableWorkspaceChrome
        baseId={baseId}
        tableId={tableId}
        views={views}
        currentViewId={currentViewId}
        currentViewName={currentViewName}
      >
        <TablePanel viewId={currentViewId} />
      </TableWorkspaceChrome>
    </main>
  );
}
