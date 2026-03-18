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
const ROWS_PAGE_LIMIT = 300;

export function TablePanel({ viewId, tableId }: TablePanelProps) {
  const utils = api.useUtils();
  const rowsPageInput = useMemo(() => ({ viewId, limit: ROWS_PAGE_LIMIT }), [viewId]);
  const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [newColumnType, setNewColumnType] = useState<RouterInputs["table"]["createColumn"]["type"]>("text");
  const rowsQuery = api.view.getRowsPage.useInfiniteQuery(rowsPageInput, {
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });
  const rows = useMemo(
    () => rowsQuery.data?.pages.flatMap((page) => page.rows) ?? [],
    [rowsQuery.data],
  );
  const isLoading = rowsQuery.isLoading;
  const columnsQuery = api.table.getColumns.useQuery({ tableId });
  const viewColumnVisibilityQuery = api.view.getColumnVisibility.useQuery({ viewId });
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
  const duplicateRow = api.table.duplicateRow.useMutation({
    onSuccess: (duplicatedRow, input) => {
      const sourceRowFromPage =
        utils.view
          .getRowsPage.getInfiniteData(rowsPageInput)
          ?.pages.flatMap((page) => page.rows)
          .find((row) => row.id === input.rowId) ?? null;

      if (!sourceRowFromPage) {
        void Promise.all([
          utils.view.getRowsPage.invalidate(rowsPageInput),
          utils.view.getAllRows.invalidate({ viewId }),
        ]);
        return;
      }

      const duplicatedRowWithCells = {
        ...duplicatedRow,
        cells: sourceRowFromPage.cells.map((cell) => ({
          ...cell,
          id: `cell-${duplicatedRow.id}-${cell.columnId}`,
          rowId: duplicatedRow.id,
        })),
      };

      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }

        return {
          ...currentData,
          pages: currentData.pages.map((page) => {
            const sourceRowIndex = page.rows.findIndex((row) => row.id === input.rowId);
            if (sourceRowIndex < 0) {
              return page;
            }

            const nextRows = [...page.rows];
            nextRows.splice(sourceRowIndex + 1, 0, duplicatedRowWithCells);
            return { ...page, rows: nextRows };
          }),
        };
      });

      utils.view.getAllRows.setData({ viewId }, (currentRows) => {
        if (!currentRows) {
          return currentRows;
        }
        const sourceRowIndex = currentRows.findIndex((row) => row.id === input.rowId);
        if (sourceRowIndex < 0) {
          return currentRows;
        }

        const nextRows = [...currentRows];
        nextRows.splice(sourceRowIndex + 1, 0, duplicatedRowWithCells);
        return nextRows;
      });
    },
    onError: async () => {
      await Promise.all([
        utils.view.getRowsPage.invalidate(rowsPageInput),
        utils.view.getAllRows.invalidate({ viewId }),
      ]);
    },
  });
  const deleteRow = api.table.deleteRow.useMutation({
    onSettled: async () => {
      await Promise.all([
        utils.view.getRowsPage.invalidate(rowsPageInput),
        utils.view.getAllRows.invalidate({ viewId }),
      ]);
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
  const updateColumn = api.table.updateColumn.useMutation({
    onMutate: async (input) => {
      await Promise.all([
        utils.table.getColumns.cancel({ tableId }),
        utils.view.getRowsPage.cancel(rowsPageInput),
        utils.view.getAllRows.cancel({ viewId }),
      ]);

      const previousColumns = utils.table.getColumns.getData({ tableId });
      const previousRowsPage = utils.view.getRowsPage.getInfiniteData(rowsPageInput);
      const previousAllRows = utils.view.getAllRows.getData({ viewId });

      utils.table.getColumns.setData({ tableId }, (currentColumns) => {
        if (!currentColumns) {
          return currentColumns;
        }
        return currentColumns.map((column) =>
          column.id === input.columnId ? { ...column, name: input.name, type: input.type } : column,
        );
      });

      utils.view.getRowsPage.setInfiniteData(rowsPageInput, (currentData) => {
        if (!currentData) {
          return currentData;
        }
        return {
          ...currentData,
          pages: currentData.pages.map((page) => ({
            ...page,
            rows: page.rows.map((row) => ({
              ...row,
              cells: row.cells.map((cell) =>
                cell.columnId === input.columnId
                  ? {
                      ...cell,
                      column: {
                        ...cell.column,
                        name: input.name,
                        type: input.type,
                      },
                    }
                  : cell,
              ),
            })),
          })),
        };
      });

      utils.view.getAllRows.setData({ viewId }, (currentRows) => {
        if (!currentRows) {
          return currentRows;
        }
        return currentRows.map((row) => ({
          ...row,
          cells: row.cells.map((cell) =>
            cell.columnId === input.columnId
              ? {
                  ...cell,
                  column: {
                    ...cell.column,
                    name: input.name,
                    type: input.type,
                  },
                }
              : cell,
          ),
        }));
      });

      return { previousColumns, previousRowsPage, previousAllRows };
    },
    onError: (_error, _input, context) => {
      if (context?.previousColumns) {
        utils.table.getColumns.setData({ tableId }, context.previousColumns);
      }
      if (context?.previousRowsPage) {
        utils.view.getRowsPage.setInfiniteData(rowsPageInput, context.previousRowsPage);
      }
      if (context?.previousAllRows) {
        utils.view.getAllRows.setData({ viewId }, context.previousAllRows);
      }
    },
    onSettled: async () => {
      await Promise.all([
        utils.table.getColumns.invalidate({ tableId }),
        utils.view.getRowsPage.invalidate(rowsPageInput),
        utils.view.getAllRows.invalidate({ viewId }),
      ]);
    },
  });
  const deleteColumn = api.table.deleteColumn.useMutation({
    onSettled: async () => {
      await Promise.all([
        utils.table.getColumns.invalidate({ tableId }),
        utils.view.getRowsPage.invalidate(rowsPageInput),
        utils.view.getColumnVisibility.invalidate({ viewId }),
        utils.view.getAllRows.invalidate({ viewId }),
      ]);
    },
  });
  const setColumnVisibilityMutation = api.view.setColumnVisibility.useMutation({
    onSettled: async () => {
      await Promise.all([
        utils.view.getColumnVisibility.invalidate({ viewId }),
        utils.view.getRowsPage.invalidate(rowsPageInput),
        utils.view.getAllRows.invalidate({ viewId }),
      ]);
    },
  });
  const columnVisibilityById = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const entry of viewColumnVisibilityQuery.data ?? []) {
      map.set(entry.columnId, entry.isVisible);
    }
    return map;
  }, [viewColumnVisibilityQuery.data]);
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
  const persistColumnVisibility = useCallback(
    (nextVisibilityByColumn: Map<string, boolean>) => {
      const primaryColumnId = columns[0]?.id;
      if (primaryColumnId) {
        nextVisibilityByColumn.set(primaryColumnId, true);
      }
      const payload = columns.map((column) => ({
        columnId: column.id,
        isVisible: column.id === primaryColumnId ? true : nextVisibilityByColumn.get(column.id) !== false,
      }));
      setColumnVisibilityMutation.mutate({
        viewId,
        columnVisibility: payload,
      });
    },
    [columns, setColumnVisibilityMutation, viewId],
  );
  const handleHideColumn = useCallback(
    (columnId: string) => {
      const primaryColumnId = columns[0]?.id;
      if (columnId === primaryColumnId) {
        return;
      }
      const visibleCount = columns.filter((column) => columnVisibilityById.get(column.id) !== false).length;
      if (visibleCount <= 1) {
        return;
      }
      const nextVisibility = new Map(columnVisibilityById);
      nextVisibility.set(columnId, false);
      persistColumnVisibility(nextVisibility);
    },
    [columnVisibilityById, columns, persistColumnVisibility],
  );
  const handleInsertColumnAt = useCallback(
    (position: number) => {
      const targetPosition = Math.max(0, Math.min(position, columns.length));
      createColumn.mutate({
        tableId,
        name: `Field ${columns.length + 1}`,
        type: "text",
        position: targetPosition,
      });
    },
    [columns.length, createColumn, tableId],
  );
  const handleInsertColumnLeft = useCallback(
    (columnId: string) => {
      const column = columns.find((candidate) => candidate.id === columnId);
      if (!column) {
        return;
      }
      handleInsertColumnAt(column.position);
    },
    [columns, handleInsertColumnAt],
  );
  const handleInsertColumnRight = useCallback(
    (columnId: string) => {
      const column = columns.find((candidate) => candidate.id === columnId);
      if (!column) {
        return;
      }
      handleInsertColumnAt(column.position + 1);
    },
    [columns, handleInsertColumnAt],
  );

  if (isLoading) {
    return <TablePanelLoading />;
  }

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-hidden bg-background">
        <TableRowsGrid
          rows={rows}
          columns={columns}
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
          onEditColumn={(columnId, nextName) => {
            const existingColumn = columns.find((column) => column.id === columnId);
            if (!existingColumn) {
              return;
            }
            updateColumn.mutate({
              columnId,
              name: nextName,
              type: existingColumn.type,
            });
          }}
          onInsertColumnLeft={handleInsertColumnLeft}
          onInsertColumnRight={handleInsertColumnRight}
          onHideColumn={handleHideColumn}
          onDeleteColumn={(columnId) => {
            deleteColumn.mutate({ columnId });
          }}
          onDuplicateRow={(rowId) => {
            duplicateRow.mutate({ rowId });
          }}
          onDeleteRow={(rowId) => {
            deleteRow.mutate({ rowId });
          }}
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
      {updateColumn.error ? (
        <div className="border-t border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {updateColumn.error.message}
        </div>
      ) : null}
      {deleteColumn.error ? (
        <div className="border-t border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {deleteColumn.error.message}
        </div>
      ) : null}
      {setColumnVisibilityMutation.error ? (
        <div className="border-t border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {setColumnVisibilityMutation.error.message}
        </div>
      ) : null}
      {duplicateRow.error ? (
        <div className="border-t border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {duplicateRow.error.message}
        </div>
      ) : null}
      {deleteRow.error ? (
        <div className="border-t border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {deleteRow.error.message}
        </div>
      ) : null}
    </section>
  );
}
