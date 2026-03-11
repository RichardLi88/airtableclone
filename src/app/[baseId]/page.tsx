import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";

type BasePageProps = {
  params: Promise<{
    baseId: string;
  }>;
};

type TableItem = RouterOutputs["table"]["getByBase"][number];

export default async function BasePage({ params }: BasePageProps) {
  const resolvedParams = await params;
  const baseId = Number(resolvedParams.baseId);

  if (!Number.isInteger(baseId) || baseId <= 0) {
    return (
      <main className="w-full">
        <div className="p-6">
          <Card>
            <CardHeader>
              <CardTitle>Invalid base id</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </main>
    );
  }

  const tables: TableItem[] = await api.table.getByBase({ baseId });
  const firstTableId = tables[0]?.id;

  if (firstTableId) {
    redirect(`/${baseId}/${firstTableId}`);
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
            <CardTitle>Table placeholder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">tableId: N/A</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
