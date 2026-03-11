import Link from "next/link";
import { redirect } from "next/navigation";

import { TableRowsGrid } from "~/components/TableRowsGrid";
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
type TableRow = RouterOutputs["table"]["getAllRows"][number];

export default async function BaseTablePage({ params }: BaseTablePageProps) {
  const resolvedParams = await params;
  const baseId: TableItem["baseId"] = resolvedParams.baseId;
  const tableId: TableItem["id"] = resolvedParams.tableId;

  const [tables, rows]: [TableItem[], TableRow[]] = await Promise.all([
    api.table.getByBase({ baseId }),
    api.table.getAllRows({ tableId }),
  ]);
  const firstTableId = tables[0]?.id;

  if (tables.length > 0) {
    const tableExistsInBase = tables.some((table) => table.id === tableId);

    if (!tableExistsInBase && firstTableId) {
      redirect(`/${baseId}/${firstTableId}`);
    }
  }

  return (
    <main className="flex h-full w-full overflow-hidden">
      <aside className="w-72 shrink-0 overflow-y-auto border-r p-4">
        <div className="mb-4">
          <Button className="w-full" variant="outline">
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
                  "block rounded-md px-2 py-1 text-sm",
                  table.id === tableId ? "bg-muted font-medium" : "hover:bg-muted",
                ].join(" ")}
              >
                {table.name}
              </Link>
            ))
          )}
        </div>
      </aside>

      <section className="flex min-h-0 flex-1 flex-col overflow-hidden p-6">
        <TableRowsGrid rows={rows} />
      </section>
    </main>
  );
}
