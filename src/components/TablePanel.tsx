"use client";

import { TableRowsGrid } from "~/components/TableRowsGrid";
import { TablePanelLoading } from "~/components/TablePanelLoading";
import { api } from "~/trpc/react";

type TablePanelProps = {
  viewId: string;
};

export function TablePanel({ viewId }: TablePanelProps) {
  const { data: rows, isLoading } = api.view.getAllRows.useQuery({ viewId });

  if (isLoading || !rows) {
    return <TablePanelLoading />;
  }

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-hidden bg-background">
        <TableRowsGrid rows={rows} />
      </div>
    </section>
  );
}
