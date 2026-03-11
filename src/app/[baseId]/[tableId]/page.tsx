import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { TablePanel } from "~/components/TablePanel";
import { TablePanelLoading } from "~/components/TablePanelLoading";
import { Button } from "~/components/ui/button";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";

type BaseTablePageProps = {
  params: Promise<{
    baseId: string;
    tableId: string;
  }>;
};

type TableItem = RouterOutputs["table"]["getByBase"][number];

export default async function BaseTablePage({ params }: BaseTablePageProps) {
  const resolvedParams = await params;
  const baseId: TableItem["baseId"] = resolvedParams.baseId;
  const tableId: TableItem["id"] = resolvedParams.tableId;

  const tables: TableItem[] = await api.table.getByBase({ baseId });
  const firstTableId = tables[0]?.id;

  if (tables.length > 0) {
    const tableExistsInBase = tables.some((table) => table.id === tableId);

    if (!tableExistsInBase && firstTableId) {
      redirect(`/${baseId}/${firstTableId}`);
    }
  }

  return (
    <main className="flex h-full w-full overflow-hidden bg-[#f3f4f7]">
      <aside className="flex w-72 shrink-0 border-r border-[#d9dde4] bg-[#eef1f5]">
        <div className="flex w-10 flex-col items-center justify-between border-r border-[#d9dde4] py-3">
          <span className="h-5 w-5 rounded-full border border-[#c3c9d3] bg-background" />
          <span className="h-5 w-5 rounded-full border border-[#c3c9d3] bg-background" />
        </div>
        <div className="min-w-0 flex-1 overflow-y-auto p-3">
          <div className="mb-3">
            <Button className="w-full justify-start rounded-lg border-[#cfd5de] bg-background" variant="outline">
              Create new...
            </Button>
          </div>

          <div className="space-y-1">
            {tables.length === 0 ? (
              <p className="text-muted-foreground px-2 py-1 text-sm">No tables found.</p>
            ) : (
              tables.map((table) => (
                <Link
                  key={table.id}
                  href={`/${baseId}/${table.id}`}
                  aria-current={table.id === tableId ? "page" : undefined}
                  className={[
                    "block rounded-md px-2 py-1.5 text-sm text-[#2f3540]",
                    table.id === tableId ? "bg-[#dfe5ee] font-medium" : "hover:bg-[#e6ebf3]",
                  ].join(" ")}
                >
                  {table.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </aside>

      <Suspense key={tableId} fallback={<TablePanelLoading />}>
        <TablePanel tableId={tableId} />
      </Suspense>
    </main>
  );
}
