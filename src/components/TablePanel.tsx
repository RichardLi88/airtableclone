import { TableRowsGrid } from "~/components/TableRowsGrid";
import { api } from "~/trpc/server";

type TablePanelProps = {
  tableId: string;
};

export async function TablePanel({ tableId }: TablePanelProps) {
  const rows = await api.table.getAllRows({ tableId });

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden p-6">
      <TableRowsGrid rows={rows} />
    </section>
  );
}
