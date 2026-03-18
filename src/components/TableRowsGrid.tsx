"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LuChevronDown, LuPlus } from "react-icons/lu";

import { AirtableIcon } from "~/components/AirtableIcon";
import type { RouterOutputs } from "~/trpc/react";

type TableRow = RouterOutputs["view"]["getAllRows"][number];

type TableRowsGridProps = {
  rows: TableRow[];
  columns?: Array<{
    id: string;
    name: string;
    position: number;
    type: TableRow["cells"][number]["column"]["type"];
  }>;
  hasMore?: boolean;
  isFetchingMore?: boolean;
  onLoadMore?: () => void;
  onCellValueChange?: (rowId: string, columnId: string, value: string) => void;
  onAddColumnClick?: () => void;
  onAddRowClick?: () => void;
  onEditColumn?: (columnId: string, nextName: string) => void;
  onInsertColumnLeft?: (columnId: string) => void;
  onInsertColumnRight?: (columnId: string) => void;
  onHideColumn?: (columnId: string) => void;
  onDeleteColumn?: (columnId: string) => void;
  onDuplicateRow?: (rowId: string) => void;
  onDeleteRow?: (rowId: string) => void;
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

const LOAD_MORE_THRESHOLD_ROWS = 200;
const ESTIMATED_ROW_HEIGHT_PX = 31;
const SCROLL_COMPENSATION_DURATION_MS = 160;

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

const MemoizedEditableCellInput = memo(
  EditableCellInput,
  (previousProps, nextProps) =>
    previousProps.rowId === nextProps.rowId &&
    previousProps.columnId === nextProps.columnId &&
    previousProps.value === nextProps.value &&
    previousProps.columnType === nextProps.columnType &&
    previousProps.onCommit === nextProps.onCommit,
);

export function TableRowsGrid({
  rows,
  columns: providedColumns,
  hasMore = false,
  isFetchingMore = false,
  onLoadMore,
  onCellValueChange,
  onAddColumnClick,
  onAddRowClick,
  onEditColumn,
  onInsertColumnLeft,
  onInsertColumnRight,
  onHideColumn,
  onDeleteColumn,
  onDuplicateRow,
  onDeleteRow,
}: TableRowsGridProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuPopoverRef = useRef<HTMLDivElement>(null);
  const rowMenuPopoverRef = useRef<HTMLUListElement>(null);
  const onCellValueChangeRef = useRef(onCellValueChange);
  const previousRowsRemainingRef = useRef<number | null>(null);
  const previousWindowRef = useRef<{ ids: string[]; length: number } | null>(null);
  const anchorSnapshotRef = useRef<{ rowId: string; offsetFromViewportTop: number } | null>(null);
  const scrollAnimationFrameRef = useRef<number | null>(null);
  const [openMenuColumnId, setOpenMenuColumnId] = useState<string | null>(null);
  const [openMenuButton, setOpenMenuButton] = useState<HTMLElement | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
  const [editFieldName, setEditFieldName] = useState("");
  const [deleteColumnId, setDeleteColumnId] = useState<string | null>(null);
  const [rowContextMenu, setRowContextMenu] = useState<{
    rowId: string;
    top: number;
    left: number;
  } | null>(null);

  useEffect(() => {
    onCellValueChangeRef.current = onCellValueChange;
  }, [onCellValueChange]);
  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (menuPopoverRef.current && event.target instanceof Node && menuPopoverRef.current.contains(event.target)) {
        return;
      }
      if (openMenuButton && event.target instanceof Node && openMenuButton.contains(event.target)) {
        return;
      }
      if (!menuContainerRef.current) {
        return;
      }
      if (event.target instanceof Node && !menuContainerRef.current.contains(event.target)) {
        setOpenMenuColumnId(null);
        setMenuPosition(null);
        setOpenMenuButton(null);
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [openMenuButton]);
  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!rowContextMenu) {
        return;
      }
      if (rowMenuPopoverRef.current && event.target instanceof Node && rowMenuPopoverRef.current.contains(event.target)) {
        return;
      }
      setRowContextMenu(null);
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [rowContextMenu]);
  useEffect(() => {
    if (!openMenuColumnId && !rowContextMenu) {
      return;
    }
    const onViewportChange = () => {
      setOpenMenuColumnId(null);
      setMenuPosition(null);
      setOpenMenuButton(null);
      setRowContextMenu(null);
    };
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("scroll", onViewportChange, true);
    return () => {
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("scroll", onViewportChange, true);
    };
  }, [openMenuColumnId, rowContextMenu]);

  const sortedProvidedColumns = useMemo<GridColumn[] | null>(() => {
    if (!providedColumns || providedColumns.length === 0) {
      return null;
    }
    return [...providedColumns].sort((a, b) => a.position - b.position);
  }, [providedColumns]);
  const inferredColumns = useMemo<GridColumn[]>(() => {
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
  const gridColumns = sortedProvidedColumns ?? inferredColumns;
  const editingColumn = useMemo(
    () => gridColumns.find((column) => column.id === editingColumnId) ?? null,
    [editingColumnId, gridColumns],
  );
  const deletingColumn = useMemo(
    () => gridColumns.find((column) => column.id === deleteColumnId) ?? null,
    [deleteColumnId, gridColumns],
  );

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

  const handleCellCommit = useCallback((rowId: string, columnId: string, value: string) => {
    onCellValueChangeRef.current?.(rowId, columnId, value);
  }, []);

  const columns = useMemo<ColumnDef<GridRow>[]>(
    () =>
      gridColumns.map((column) => ({
        id: column.id,
        accessorFn: (row) => row.values[column.id] ?? "",
        header: column.name,
        cell: (ctx) => (
          <MemoizedEditableCellInput
            rowId={ctx.row.original.id}
            columnId={column.id}
            value={ctx.getValue<string>()}
            columnType={column.type}
            onCommit={handleCellCommit}
          />
        ),
      })),
    [gridColumns, handleCellCommit],
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
    return () => {
      if (scrollAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollAnimationFrameRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const scrollContainer = parentRef.current;
    const firstVisibleRealRow = virtualRows.find((virtualRow) => virtualRow.index < tableRows.length);
    if (!scrollContainer || !firstVisibleRealRow) {
      return;
    }

    const anchorRow = tableRows[firstVisibleRealRow.index];
    if (!anchorRow) {
      return;
    }

    anchorSnapshotRef.current = {
      rowId: anchorRow.original.id,
      offsetFromViewportTop: firstVisibleRealRow.start - scrollContainer.scrollTop,
    };
  }, [tableRows, virtualRows]);
  useLayoutEffect(() => {
    const previousWindow = previousWindowRef.current;
    const currentWindow = { ids: rows.map((row) => row.id), length: rows.length };
    const scrollContainer = parentRef.current;

    if (!previousWindow || !scrollContainer) {
      previousWindowRef.current = currentWindow;
      return;
    }

    const didWindowShiftFromTop =
      previousWindow.length === currentWindow.length &&
      currentWindow.length > 0 &&
      previousWindow.ids[0] !== currentWindow.ids[0];
    if (!didWindowShiftFromTop) {
      previousWindowRef.current = currentWindow;
      return;
    }

    const firstCurrentId = currentWindow.ids[0];
    const previousIndexOfFirstCurrent = firstCurrentId ? previousWindow.ids.indexOf(firstCurrentId) : -1;
    if (previousIndexOfFirstCurrent <= 0) {
      previousWindowRef.current = currentWindow;
      return;
    }

    const anchorSnapshot = anchorSnapshotRef.current;
    if (!anchorSnapshot) {
      previousWindowRef.current = currentWindow;
      return;
    }
    const nextAnchorIndex = currentWindow.ids.indexOf(anchorSnapshot.rowId);
    if (nextAnchorIndex < 0) {
      previousWindowRef.current = currentWindow;
      return;
    }

    const targetScrollTop = Math.max(
      0,
      nextAnchorIndex * ESTIMATED_ROW_HEIGHT_PX - anchorSnapshot.offsetFromViewportTop,
    );
    const startScrollTop = scrollContainer.scrollTop;
    const delta = targetScrollTop - startScrollTop;

    if (Math.abs(delta) < 1) {
      previousWindowRef.current = currentWindow;
      return;
    }
    if (scrollAnimationFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollAnimationFrameRef.current);
      scrollAnimationFrameRef.current = null;
    }

    let animationStartTime: number | null = null;
    const step = (timestamp: number) => {
      if (animationStartTime === null) {
        animationStartTime = timestamp;
      }
      const elapsed = timestamp - animationStartTime;
      const progress = Math.min(1, elapsed / SCROLL_COMPENSATION_DURATION_MS);
      const easedProgress = 1 - (1 - progress) ** 3;
      scrollContainer.scrollTop = startScrollTop + delta * easedProgress;

      if (progress < 1) {
        scrollAnimationFrameRef.current = window.requestAnimationFrame(step);
      } else {
        scrollAnimationFrameRef.current = null;
      }
    };

    scrollAnimationFrameRef.current = window.requestAnimationFrame(step);
    previousWindowRef.current = currentWindow;
  }, [rows]);

  useEffect(() => {
    const lastVisibleRealRow = [...virtualRows]
      .reverse()
      .find((virtualRow) => virtualRow.index < tableRows.length);
    const cursorRowIndex = lastVisibleRealRow?.index ?? -1;
    const rowsRemaining = tableRows.length - 1 - cursorRowIndex;
    const isWithinThreshold = rowsRemaining <= LOAD_MORE_THRESHOLD_ROWS;
    const wasWithinThreshold =
      previousRowsRemainingRef.current !== null &&
      previousRowsRemainingRef.current <= LOAD_MORE_THRESHOLD_ROWS;
    const shouldLoadMore = isWithinThreshold && !wasWithinThreshold && hasMore && !isFetchingMore && !!onLoadMore;

    if (shouldLoadMore) {
      onLoadMore();
    }
    previousRowsRemainingRef.current = rowsRemaining;
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
    <div ref={menuContainerRef} className="relative h-full w-full">
      <div ref={parentRef} className="relative h-full w-full overflow-auto bg-[#f1f3f6]">
      <table className="w-full border-collapse bg-white text-[12px]">
        <thead className="bg-[#f7f8fa]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-[#dde2ea]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="relative border-r border-[#e5e9f0] px-3 py-1.5 text-left text-[12px] font-medium text-[#323844] last:border-r-0"
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex items-center gap-1">
                      <span className="min-w-0 flex-1 truncate">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </span>
                      <button
                        type="button"
                        aria-label="Open field menu"
                        className="inline-flex h-5 w-5 items-center justify-center rounded text-[#667085] transition hover:bg-[#edf1f7] hover:text-[#323844]"
                        onClick={(event) => {
                          const trigger = event.currentTarget;
                          const triggerRect = trigger.getBoundingClientRect();
                          setOpenMenuColumnId((current) => {
                            if (current === header.column.id) {
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                              return null;
                            }
                            setMenuPosition({
                              top: triggerRect.bottom + 4,
                              left: triggerRect.right - 224,
                            });
                            setOpenMenuButton(trigger);
                            return header.column.id;
                          });
                        }}
                      >
                        <LuChevronDown className="h-3.5 w-3.5" />
                      </button>
                      {openMenuColumnId === header.column.id && menuPosition
                        ? createPortal(
                            <div
                              ref={menuPopoverRef}
                              className="fixed z-[2000] w-56 rounded-md border border-[#d7dbe3] bg-white p-1 shadow-lg"
                              style={{
                                top: `${Math.max(8, menuPosition.top)}px`,
                                left: `${Math.max(8, menuPosition.left)}px`,
                              }}
                            >
                          <button
                            type="button"
                            className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                            onClick={() => {
                              const column = gridColumns.find((candidate) => candidate.id === header.column.id);
                              if (!column || !onEditColumn) {
                                return;
                              }
                              setEditFieldName(column.name);
                              setEditingColumnId(column.id);
                              setOpenMenuColumnId(null);
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                            }}
                          >
                            Edit field
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Duplicate field
                          </button>
                          <button
                            type="button"
                            className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                            onClick={() => {
                              onInsertColumnLeft?.(header.column.id);
                              setOpenMenuColumnId(null);
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                            }}
                          >
                            Insert left
                          </button>
                          <button
                            type="button"
                            className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                            onClick={() => {
                              onInsertColumnRight?.(header.column.id);
                              setOpenMenuColumnId(null);
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                            }}
                          >
                            Insert right
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Summarize field
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Write headline for field
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Copy field URL
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Edit field description
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Edit field permissions
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Sort A - Z
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Sort Z - A
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Filter by this field
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Group by this field
                          </button>
                          <button
                            type="button"
                            className="w-full cursor-not-allowed rounded px-2 py-1.5 text-left text-[12px] text-[#9aa3b2]"
                            disabled
                          >
                            Show dependencies
                          </button>
                          <div className="my-1 border-t border-[#e4e7ec]" />
                          <button
                            type="button"
                            className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                            onClick={() => {
                              onHideColumn?.(header.column.id);
                              setOpenMenuColumnId(null);
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                            }}
                          >
                            Hide field
                          </button>
                          <button
                            type="button"
                            className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-red-600 hover:bg-[#fff1f2]"
                            onClick={() => {
                              setDeleteColumnId(header.column.id);
                              setOpenMenuColumnId(null);
                              setMenuPosition(null);
                              setOpenMenuButton(null);
                            }}
                          >
                            Delete field
                          </button>
                            </div>,
                            document.body,
                          )
                        : null}
                    </div>
                  )}
                </th>
              ))}
              <th className="w-10 min-w-10 max-w-10 border-l border-[#cfd6df] border-r-0 bg-[#f7f8fa] p-0">
                <button
                  type="button"
                  title="Add field"
                  aria-label="add a field"
                  onClick={onAddColumnClick}
                  className="flex h-8 w-full items-center justify-center text-[#667085] transition hover:bg-[#eef2f7] hover:text-[#323844]"
                >
                  <LuPlus className="h-4 w-4" />
                </button>
              </th>
            </tr>
          ))}
        </thead>
        <tbody>
          {paddingTop > 0 ? (
            <tr>
              <td colSpan={gridColumns.length + 1} style={{ height: `${paddingTop}px` }} />
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
                    className="border-r border-[#edf0f5] px-3 py-1.5 align-top text-[12px] text-[#414a59] focus-within:relative focus-within:z-10 focus-within:shadow-[inset_0_0_0_2px_#1d6feb]"
                    onContextMenu={(event) => {
                      event.preventDefault();
                      setOpenMenuColumnId(null);
                      setMenuPosition(null);
                      setOpenMenuButton(null);
                      setRowContextMenu({
                        rowId: row.original.id,
                        top: event.clientY,
                        left: event.clientX,
                      });
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="w-10 min-w-10 max-w-10 border-l border-[#cfd6df] bg-[#eceff4]" />
              </tr>
            );
          })}
          {paddingBottom > 0 ? (
            <tr>
              <td colSpan={gridColumns.length + 1} style={{ height: `${paddingBottom}px` }} />
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className="flex h-8 border-t border-[#cfd6df] bg-[#eceff4]">
        <button
          type="button"
          title="Add row"
          aria-label="add a row"
          onClick={onAddRowClick}
          className="flex w-10 items-center justify-center text-[#667085] transition hover:bg-[#eef2f7] hover:text-[#323844]"
        >
          <LuPlus className="h-4 w-4" />
        </button>
        <div className="flex-1" />
        <div className="w-10" />
      </div>
      </div>
      {rowContextMenu
        ? createPortal(
            <ul
              ref={rowMenuPopoverRef}
              role="menu"
              tabIndex={-1}
              className="fixed z-[2100] w-[220px] rounded-md border border-[#d7dbe3] bg-white p-1.5 shadow-lg"
              style={{
                top: `${Math.max(8, rowContextMenu.top)}px`,
                left: `${Math.max(8, rowContextMenu.left)}px`,
              }}
            >
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="Omni" className="mr-2 h-4 w-4" />
                <span>Ask Omni</span>
              </li>
              <li role="presentation" className="my-1 h-px bg-[#e4e7ec]" />
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="ArrowDown" className="mr-2 h-4 w-4" />
                <span>Insert record</span>
              </li>
              <li role="presentation" className="my-1 h-px bg-[#e4e7ec]" />
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  onDuplicateRow?.(rowContextMenu.rowId);
                  setRowContextMenu(null);
                }}
              >
                <AirtableIcon name="Copy" className="mr-2 h-4 w-4" />
                <span>Duplicate record</span>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="PaintBucket" className="mr-2 h-4 w-4" />
                <span>Apply template</span>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="ArrowsOutSimple" className="mr-2 h-4 w-4" />
                <span>Expand record</span>
              </li>
              <li role="presentation" className="my-1 h-px bg-[#e4e7ec]" />
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="Chat" className="mr-2 h-4 w-4" />
                <span>Add comment</span>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="Link" className="mr-2 h-4 w-4" />
                <span>Copy cell URL</span>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full cursor-not-allowed items-center rounded px-2 py-1.5 text-[12px] text-[#9aa3b2]"
                aria-disabled
              >
                <AirtableIcon name="EnvelopeSimple" className="mr-2 h-4 w-4" />
                <span>Send record</span>
              </li>
              <li role="presentation" className="my-1 h-px bg-[#e4e7ec]" />
              <li
                role="menuitem"
                tabIndex={-1}
                className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-red-600 hover:bg-[#fff1f2]"
                onClick={() => {
                  onDeleteRow?.(rowContextMenu.rowId);
                  setRowContextMenu(null);
                }}
              >
                <AirtableIcon name="Trash" className="mr-2 h-4 w-4" />
                <span>Delete record</span>
              </li>
            </ul>,
            document.body,
          )
        : null}
      {editingColumn ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[520px] max-w-[calc(100vw-1.5rem)] rounded-xl border border-[#d7dbe3] bg-white shadow-xl">
            <div className="px-4 pb-2 pt-4">
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#323844]">Field name (optional)</label>
                <input
                  type="text"
                  value={editFieldName}
                  onChange={(event) => setEditFieldName(event.target.value)}
                  placeholder="Field name (optional)"
                  className="h-9 w-full rounded-md border border-[#cfd7e3] bg-white px-3 text-[12px] text-[#334155] outline-none focus:border-[#1d6feb] focus:shadow-[0_0_0_1px_#1d6feb]"
                />
              </div>
            </div>
            <div className="px-4 pb-3">
              <div className="rounded-xl border border-[#dbe2ec] bg-[#f8fafc] p-3">
                <div className="mb-1 text-[12px] font-medium text-[#334155]">Field type</div>
                <div className="flex items-center justify-between rounded-lg border border-[#d7dbe3] bg-white px-3 py-2 text-[12px] text-[#4b5563]">
                  <span>{editingColumn.type === "number" ? "Number" : "Long text"}</span>
                  <span className="text-[#9aa3b2]">Type cannot be changed</span>
                </div>
                <p className="mt-2 text-[11px] text-[#7b8493]">
                  {editingColumn.type === "number"
                    ? "Accepts numeric values only."
                    : "Enter multiple lines of text."}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e4e7ec] px-4 py-3">
              <button
                type="button"
                className="rounded-md px-2.5 py-1.5 text-[12px] text-[#475467] transition hover:bg-[#eef2f7]"
                disabled
              >
                Add description
              </button>
              <div className="flex items-center gap-2">
              <button
                type="button"
                  className="rounded-md px-3 py-1.5 text-[12px] text-[#3d4654] transition hover:bg-[#eef2f7]"
                onClick={() => {
                  setEditingColumnId(null);
                  setEditFieldName("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                  className="rounded-md bg-[#1d6feb] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-[#185ec9] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={editFieldName.trim().length === 0}
                onClick={() => {
                  if (!editingColumnId) {
                    return;
                  }
                    onEditColumn?.(editingColumnId, editFieldName.trim());
                  setEditingColumnId(null);
                  setEditFieldName("");
                }}
              >
                  Save
              </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {deletingColumn ? (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/30">
          <div className="w-[420px] max-w-[calc(100vw-1.5rem)] rounded-xl border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Delete field?</h2>
            <p className="mt-2 text-[12px] text-[#5d6676]">
              This will permanently delete <span className="font-semibold text-[#323844]">{deletingColumn.name}</span>{" "}
              and all values in this column.
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md px-3 py-1.5 text-[12px] text-[#3d4654] transition hover:bg-[#eef2f7]"
                onClick={() => setDeleteColumnId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-[#c62929] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-[#a81f1f]"
                onClick={() => {
                  onDeleteColumn?.(deletingColumn.id);
                  setDeleteColumnId(null);
                }}
              >
                Delete field
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
