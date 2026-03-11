import { TableRowsGrid } from "~/components/TableRowsGrid";
import { api } from "~/trpc/server";

type TablePanelProps = {
  tableId: string;
};

export async function TablePanel({ tableId }: TablePanelProps) {
  const rows = await api.table.getAllRows({ tableId });

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="h-11 border-b border-[#d9dde4] bg-[#f4f2f8]" />
      <div className="h-10 border-b border-[#d9dde4] bg-[#f7f8fa]" />
      <div className="min-h-0 flex-1 overflow-hidden bg-background">
        <TableRowsGrid rows={rows} />
      </div>
    </section>
  );
}
