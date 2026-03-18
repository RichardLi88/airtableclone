"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";

import type { RouterOutputs } from "~/trpc/react";

type TableRow = RouterOutputs["view"]["getAllRows"][number];

type TableRowsGridProps = {
  rows: TableRow[];
  hasMore?: boolean;
  isFetchingMore?: boolean;
  onLoadMore?: () => void;
  onCellValueChange?: (rowId: string, columnId: string, value: string) => void;
  onAddColumnClick?: () => void;
  onAddRowClick?: () => void;
};

type GridRow = {
  id: string;
  values: Record<string, string>;
};

type GridColumn = {
  id: string;
  name: string;
  position: number;
  type: TableRow["cells"][number]["column"]["type"];
};

const LOAD_MORE_THRESHOLD_ROWS = 100;

type EditableCellInputProps = {
  rowId: string;
  columnId: string;
  value: string;
  columnType: TableRow["cells"][number]["column"]["type"];
  onCommit?: (rowId: string, columnId: string, value: string) => void;
};

function EditableCellInput({
  rowId,
  columnId,
  value,
  columnType,
  onCommit,
}: EditableCellInputProps) {
  const [draftValue, setDraftValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const warningTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDraftValue(value);
  }, [value]);
  useEffect(() => {
    return () => {
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, []);

  const commit = () => {
    if (draftValue === value) {
      return;
    }
    onCommit?.(rowId, columnId, draftValue);
  };

  return (
    <input
      type="text"
      value={draftValue}
      onChange={(event) => {
        const nextValue = event.target.value;

        if (columnType === "number") {
          const isAllowedNumberInput = /^-?\d*(\.\d*)?$/.test(nextValue);
          if (!isAllowedNumberInput) {
            const input = inputRef.current;
            if (input) {
              input.setCustomValidity("Please enter a number");
              input.reportValidity();
              if (warningTimeoutRef.current) {
                clearTimeout(warningTimeoutRef.current);
              }
              warningTimeoutRef.current = setTimeout(() => {
                input.setCustomValidity("");
                warningTimeoutRef.current = null;
              }, 1200);
            }
            return;
          }
        }

        setDraftValue(nextValue);
      }}
      onBlur={commit}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.currentTarget.blur();
        }
        if (event.key === "Escape") {
          setDraftValue(value);
          event.currentTarget.blur();
        }
      }}
      className="w-full min-w-[90px] bg-transparent text-[12px] text-[#414a59] outline-none"
      ref={inputRef}
    />
  );
}

export function TableRowsGrid({
  rows,
  hasMore = false,
  isFetchingMore = false,
  onLoadMore,
  onCellValueChange,
  onAddColumnClick,
  onAddRowClick,
}: TableRowsGridProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const onCellValueChangeRef = useRef(onCellValueChange);

  useEffect(() => {
    onCellValueChangeRef.current = onCellValueChange;
  }, [onCellValueChange]);

  const gridColumns = useMemo<GridColumn[]>(() => {
    const deduped = new Map<string, GridColumn>();
    for (const row of rows) {
      for (const cell of row.cells) {
        if (!deduped.has(cell.column.id)) {
          deduped.set(cell.column.id, {
            id: cell.column.id,
            name: cell.column.name,
            position: cell.column.position,
            type: cell.column.type,
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
        cell: (ctx) => (
          <EditableCellInput
            rowId={ctx.row.original.id}
            columnId={column.id}
            value={ctx.getValue<string>()}
            columnType={column.type}
            onCommit={(rowId, columnId, value) => onCellValueChangeRef.current?.(rowId, columnId, value)}
          />
        ),
      })),
    [gridColumns],
  );

  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
  });

  const tableRows = table.getRowModel().rows;
  const rowVirtualizer = useVirtualizer({
    count: tableRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 31,
    overscan: 12,
    useFlushSync: false,
    measureElement: (element) => element.getBoundingClientRect().height,
  });
  const virtualRows = rowVirtualizer.getVirtualItems();

  useEffect(() => {
    const lastVisibleRealRow = [...virtualRows]
      .reverse()
      .find((virtualRow) => virtualRow.index < tableRows.length);
    const cursorRowIndex = lastVisibleRealRow?.index ?? -1;
    const rowsRemaining = tableRows.length - 1 - cursorRowIndex;
    const shouldLoadMore =
      rowsRemaining <= LOAD_MORE_THRESHOLD_ROWS &&
      hasMore &&
      !isFetchingMore &&
      !!onLoadMore;

    if (shouldLoadMore) {
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
    <div ref={parentRef} className="relative h-full w-full overflow-auto bg-[#f1f3f6]">
      <table className="w-full border-collapse bg-white text-[12px]">
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
                key={row.original.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                className="border-b border-[#e3e7ee] bg-white transition-colors hover:bg-[#f5f7fb] last:border-b-0"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-r border-[#edf0f5] px-3 py-1.5 align-top text-[12px] text-[#414a59] last:border-r-0 focus-within:relative focus-within:z-10 focus-within:shadow-[inset_0_0_0_2px_#1d6feb]"
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
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 border-l border-[#cfd6df] bg-[#eceff4]">
        <div className="flex h-8 items-center justify-center border-b border-[#dde2ea] bg-[#f7f8fa]">
          <button
            type="button"
            title="Add field"
            aria-label="add a field"
            onClick={onAddColumnClick}
            className="pointer-events-auto flex h-full w-full items-center justify-center text-[#667085] transition hover:bg-[#eef2f7] hover:text-[#323844]"
          >
            <LuPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex h-8 border-t border-[#cfd6df] bg-[#eceff4]">
        <button
          type="button"
          title="Add row"
          aria-label="add a row"
          onClick={onAddRowClick}
          className="flex w-10 items-center justify-center border-r border-[#cfd6df] text-[#667085] transition hover:bg-[#eef2f7] hover:text-[#323844]"
        >
          <LuPlus className="h-4 w-4" />
        </button>
        <div className="flex-1" />
        <div className="w-10 border-l border-[#cfd6df]" />
      </div>
    </div>
  );
}
