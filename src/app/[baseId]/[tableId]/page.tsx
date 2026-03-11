import Link from "next/link";
import { redirect } from "next/navigation";

import { TableRowsGrid } from "~/components/TableRowsGrid";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";

type BaseTablePageProps = {
  params: Promise<{
    baseId: string;
    tableId: string;
  }>;
};

type BaseItem = RouterOutputs["base"]["getAll"][number];
type TableItem = RouterOutputs["table"]["getByBase"][number];
type TableRow = RouterOutputs["table"]["getAllRows"][number];

export default async function BaseTablePage({ params }: BaseTablePageProps) {
  const resolvedParams = await params;
  const baseId: TableItem["baseId"] = resolvedParams.baseId;
  const tableId: TableItem["id"] = resolvedParams.tableId;

  const [tables, bases, rows]: [TableItem[], BaseItem[], TableRow[]] = await Promise.all([
    api.table.getByBase({ baseId }),
    api.base.getAll(),
    api.table.getAllRows({ tableId }),
  ]);
  const currentBaseName = bases.find((base) => base.id === baseId)?.name ?? "Unknown base";
  const currentTableName = tables.find((table) => table.id === tableId)?.name ?? "Unknown table";
  const firstTableId = tables[0]?.id;

  if (tables.length > 0) {
    const tableExistsInBase = tables.some((table) => table.id === tableId);

    if (!tableExistsInBase && firstTableId) {
      redirect(`/${baseId}/${firstTableId}`);
    }
  }

  return (
    <main className="flex min-h-screen w-full">
      <aside className="w-72 shrink-0 border-r p-4">
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
                className="hover:bg-muted block rounded-md px-2 py-1 text-sm"
              >
                {table.name}
              </Link>
            ))
          )}
        </div>
      </aside>

      <section className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>{currentTableName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Base: {currentBaseName}</p>
            <div className="mt-4">
              <TableRowsGrid rows={rows} />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
