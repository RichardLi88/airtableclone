"use client";

import { useCallback, useMemo, useState } from "react";

import { TableRowsGrid } from "~/components/TableRowsGrid";
import { TablePanelLoading } from "~/components/TablePanelLoading";
import { api } from "~/trpc/react";
import type { RouterInputs, RouterOutputs } from "~/trpc/react";

type TablePanelProps = {
  viewId: string;
  tableId: string;
};
type TableRow = RouterOutputs["view"]["getRowsPage"]["rows"][number];
type TableCellColumn = TableRow["cells"][number]["column"];
const ROWS_PAGE_LIMIT = 800;

export function TablePanel({ viewId, tableId }: TablePanelProps) {
  const utils = api.useUtils();
  const rowsPageInput = useMemo(() => ({ viewId, limit: ROWS_PAGE_LIMIT }), [viewId]);
  const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [newColumnType, setNewColumnType] = useState<RouterInputs["table"]["createColumn"]["type"]>("text");
  const rowsQuery = api.view.getRowsPage.useInfiniteQuery(rowsPageInput, {
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    maxPages: 10,
  });
  const rows = useMemo(
    () => rowsQuery.data?.pages.flatMap((page) => page.rows) ?? [],
    [rowsQuery.data],
  );
  const isLoading = rowsQuery.isLoading;
  const columnsQuery = api.table.getColumns.useQuery({ tableId });
  const inferredColumns = useMemo(() => {
    const deduped = new Map<string, TableCellColumn>();
    for (const row of rows ?? []) {
      for (const cell of row.cells) {
        if (!deduped.has(cell.column.id)) {
          deduped.set(cell.column.id, cell.column);
        }
      }
    }
    return Array.from(deduped.values()).sort((a, b) => a.position - b.position);
  }, [rows]);
  const columns = useMemo(
    () => (columnsQuery.data && columnsQuery.data.length > 0 ? columnsQuery.data : inferredColumns),
    [columnsQuery.data, inferredColumns],
  );
  const updateCell = api.cell.updateValue.useMutation({
    onMutate: async (input) => {
      await utils.view.getRowsPage.cancel(rowsPageInput);

      const previousRows = utils.view.getRowsPage.getInfiniteData(rowsPageInput);
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }

        return {
          ...currentData,
          pages: currentData.pages.map((page) => ({
            ...page,
            rows: page.rows.map((row) => {
              if (row.id !== input.rowId) {
                return row;
              }

              return {
                ...row,
                cells: row.cells.map((cell) =>
                  cell.columnId === input.columnId ? { ...cell, value: input.value } : cell,
                ),
              };
            }),
          })),
        };
      });

      return { previousRows };
    },
    onError: (_error, _input, context) => {
      if (!context?.previousRows) {
        return;
      }
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, context.previousRows);
    },
    onSuccess: (updatedCell) => {
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }

        return {
          ...currentData,
          pages: currentData.pages.map((page) => ({
            ...page,
            rows: page.rows.map((row) => {
              if (row.id !== updatedCell.rowId) {
                return row;
              }

              return {
                ...row,
                cells: row.cells.map((cell) =>
                  cell.columnId === updatedCell.columnId ? { ...cell, value: updatedCell.value ?? "" } : cell,
                ),
              };
            }),
          })),
        };
      });
    },
  });
  const createRow = api.table.createRow.useMutation({
    onMutate: async () => {
      await utils.view.getRowsPage.cancel(rowsPageInput);

      const previousRows = utils.view.getRowsPage.getInfiniteData(rowsPageInput);
      const optimisticRowId = `optimistic-row-${Date.now()}`;
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }

        const now = new Date();
        const optimisticCells = columns.map((column) => ({
          id: `optimistic-cell-${optimisticRowId}-${column.id}`,
          rowId: optimisticRowId,
          columnId: column.id,
          value: null,
          column,
        }));
        const optimisticRow = {
          id: optimisticRowId,
          createdAt: now,
          updatedAt: now,
          tableId,
          cells: optimisticCells,
        };

        return {
          ...currentData,
          pages: currentData.pages.map((page, index) =>
            index === 0 ? { ...page, rows: [optimisticRow, ...page.rows] } : page,
          ),
        };
      });

      return { previousRows, optimisticRowId };
    },
    onSuccess: (createdRow, _input, context) => {
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }

        const rowWithCells = {
          ...createdRow,
          cells: columns.map((column) => ({
            id: `cell-${createdRow.id}-${column.id}`,
            rowId: createdRow.id,
            columnId: column.id,
            value: null,
            column,
          })),
        };

        return {
          ...currentData,
          pages: currentData.pages.map((page) => ({
            ...page,
            rows: page.rows.map((row) => (row.id === context?.optimisticRowId ? rowWithCells : row)),
          })),
        };
      });
    },
    onError: (_error, _input, context) => {
      if (!context?.previousRows) {
        return;
      }
      utils.view.getRowsPage.setInfiniteData(rowsPageInput, context.previousRows);
    },
    onSettled: async () => {
      await utils.view.getRowsPage.invalidate(rowsPageInput);
    },
  });
  const createColumn = api.table.createColumn.useMutation({
    onSuccess: () => {
      setIsCreateColumnModalOpen(false);
      setNewColumnName("");
      setNewColumnType("text");
    },
    onSettled: async () => {
      await Promise.all([
        utils.table.getColumns.invalidate({ tableId }),
        utils.view.getRowsPage.invalidate(rowsPageInput),
      ]);
    },
  });
  const handleCellValueChange = useCallback(
    (rowId: string, columnId: string, value: string) => {
      updateCell.mutate({ rowId, columnId, value });
    },
    [updateCell],
  );
  const handleAddRow = useCallback(() => {
    createRow.mutate({ tableId });
  }, [createRow, tableId]);
  const handleAddColumn = useCallback(() => {
    const trimmedName = newColumnName.trim();
    if (!trimmedName) {
      return;
    }
    createColumn.mutate({
      tableId,
      name: trimmedName,
      type: newColumnType,
    });
  }, [createColumn, newColumnName, newColumnType, tableId]);

  if (isLoading) {
    return <TablePanelLoading />;
  }

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-hidden bg-background">
        <TableRowsGrid
          rows={rows}
          hasMore={Boolean(rowsQuery.hasNextPage)}
          isFetchingMore={rowsQuery.isFetchingNextPage}
          onLoadMore={() => {
            if (!rowsQuery.hasNextPage || rowsQuery.isFetchingNextPage) {
              return;
            }
            void rowsQuery.fetchNextPage();
          }}
          onCellValueChange={handleCellValueChange}
          onAddColumnClick={() => setIsCreateColumnModalOpen(true)}
          onAddRowClick={handleAddRow}
        />
      </div>
      {isCreateColumnModalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="w-[420px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Add field</h2>
            <p className="mt-1 text-[12px] text-[#5d6676]">Choose a name and type for the new column.</p>
            <div className="mt-4 space-y-3">
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#323844]">Field name</label>
                <input
                  type="text"
                  value={newColumnName}
                  onChange={(event) => setNewColumnName(event.target.value)}
                  placeholder="e.g. Status"
                  className="h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#323844]">Field type</label>
                <select
                  value={newColumnType}
                  onChange={(event) =>
                    setNewColumnType(event.target.value as RouterInputs["table"]["createColumn"]["type"])
                  }
                  className="h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </div>
            </div>
            {createColumn.error ? (
              <p className="mt-3 text-[11px] text-red-600">{createColumn.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => setIsCreateColumnModalOpen(false)}
                disabled={createColumn.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleAddColumn}
                disabled={createColumn.isPending || newColumnName.trim().length === 0}
              >
                {createColumn.isPending ? "Adding..." : "Add field"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
