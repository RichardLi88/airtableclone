import Link from "next/link";
import { redirect } from "next/navigation";

import { TableTabsBar } from "~/components/TableTabsBar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";

type BasePageProps = {
  params: Promise<{
    baseId: string;
  }>;
};

type BaseItem = RouterOutputs["base"]["getAll"][number];
type TableItem = RouterOutputs["table"]["getByBase"][number];

export default async function BasePage({ params }: BasePageProps) {
  const resolvedParams = await params;
  const baseId: TableItem["baseId"] = resolvedParams.baseId;

  const [tables, bases]: [TableItem[], BaseItem[]] = await Promise.all([
    api.table.getByBase({ baseId }),
    api.base.getAll(),
  ]);
  const currentBaseName = bases.find((base) => base.id === baseId)?.name ?? "Unknown base";
  const firstTableId = tables[0]?.id;

  if (firstTableId) {
    redirect(`/${baseId}/${firstTableId}`);
  }

  return (
    <main className="flex h-full w-full flex-col overflow-hidden">
      <TableTabsBar baseId={baseId} tables={tables} />
      <div className="flex min-h-0 flex-1 overflow-hidden">
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
              <CardTitle>{currentBaseName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">No table selected</p>
            </CardContent>
          </Card>
        </section>
        </div>
    </main>
  );
}
