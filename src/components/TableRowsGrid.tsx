"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useRef } from "react";

import type { RouterOutputs } from "~/trpc/react";

type TableRow = RouterOutputs["view"]["getAllRows"][number];

type TableRowsGridProps = {
  rows: TableRow[];
  hasMore?: boolean;
  isFetchingMore?: boolean;
  onLoadMore?: () => void;
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

export function TableRowsGrid({
  rows,
  hasMore = false,
  isFetchingMore = false,
  onLoadMore,
}: TableRowsGridProps) {
  const parentRef = useRef<HTMLDivElement>(null);

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

  const tableRows = table.getRowModel().rows;
  const rowVirtualizer = useVirtualizer({
    count: tableRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 31,
    overscan: 12,
    measureElement: (element) => element.getBoundingClientRect().height,
  });
  const virtualRows = rowVirtualizer.getVirtualItems();

  useEffect(() => {
    const lastVirtualRow = virtualRows.at(-1);
    if (!lastVirtualRow) {
      return;
    }

    const prefetchThreshold = 20;
    const shouldLoadMore = lastVirtualRow.index >= tableRows.length - 1 - prefetchThreshold;
    if (shouldLoadMore && hasMore && !isFetchingMore && onLoadMore) {
      onLoadMore();
    }
  }, [hasMore, isFetchingMore, onLoadMore, tableRows.length, virtualRows]);

  if (gridColumns.length === 0) {
    return <p className="text-muted-foreground p-6 text-sm">No rows found for this table.</p>;
  }

  const paddingTop = virtualRows.length > 0 ? virtualRows[0]!.start : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1]!.end
      : 0;

  return (
    <div ref={parentRef} className="h-full w-full overflow-auto">
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
          {paddingTop > 0 ? (
            <tr>
              <td colSpan={gridColumns.length} style={{ height: `${paddingTop}px` }} />
            </tr>
          ) : null}
          {virtualRows.map((virtualRow) => {
            const row = tableRows[virtualRow.index];
            if (!row) {
              return null;
            }

            return (
              <tr
                key={row.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                className="border-b border-[#e3e7ee] last:border-b-0"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-r border-[#edf0f5] px-3 py-1.5 align-top text-[12px] text-[#414a59] last:border-r-0"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
          {paddingBottom > 0 ? (
            <tr>
              <td colSpan={gridColumns.length} style={{ height: `${paddingBottom}px` }} />
            </tr>
          ) : null}
        </tbody>
      </table>
      {isFetchingMore ? (
        <div className="border-t border-[#e3e7ee] px-3 py-2 text-[12px] text-[#5d6676]">Loading more rows...</div>
      ) : null}
      {!hasMore && tableRows.length > 0 ? (
        <div className="border-t border-[#e3e7ee] px-3 py-2 text-[12px] text-[#5d6676]">End of rows</div>
      ) : null}
    </div>
  );
}
