"use client";

import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import type { RouterOutputs } from "~/trpc/react";

type TableRow = RouterOutputs["table"]["getAllRows"][number];

type TableRowsGridProps = {
  rows: TableRow[];
};

type GridRow = {
  id: string;
  values: Record<string, string>;
};

type GridColumn = {
  id: string;
  name: string;
  position: number;
};

export function TableRowsGrid({ rows }: TableRowsGridProps) {
  const gridColumns = useMemo<GridColumn[]>(() => {
    const deduped = new Map<string, GridColumn>();
    for (const row of rows) {
      for (const cell of row.cells) {
        if (!deduped.has(cell.column.id)) {
          deduped.set(cell.column.id, {
            id: cell.column.id,
            name: cell.column.name,
            position: cell.column.position,
          });
        }
      }
    }
    return Array.from(deduped.values()).sort((a, b) => a.position - b.position);
  }, [rows]);

  const data = useMemo<GridRow[]>(
    () =>
      rows.map((row) => {
        const values: Record<string, string> = {};
        for (const cell of row.cells) {
          values[cell.column.id] = cell.value ?? "";
        }
        return { id: row.id, values };
      }),
    [rows],
  );

  const columns = useMemo<ColumnDef<GridRow>[]>(
    () =>
      gridColumns.map((column) => ({
        id: column.id,
        accessorFn: (row) => row.values[column.id] ?? "",
        header: column.name,
        cell: (ctx) => ctx.getValue<string>(),
      })),
    [gridColumns],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (gridColumns.length === 0) {
    return <p className="text-muted-foreground p-6 text-sm">No rows found for this table.</p>;
  }

  return (
    <div className="h-full w-full overflow-auto">
      <table className="w-full border-collapse text-[12px]">
        <thead className="bg-[#f7f8fa]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-[#dde2ea]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-r border-[#e5e9f0] px-3 py-1.5 text-left text-[12px] font-medium text-[#323844] last:border-r-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-[#e3e7ee] last:border-b-0">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-r border-[#edf0f5] px-3 py-1.5 align-top text-[12px] text-[#414a59] last:border-r-0"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
