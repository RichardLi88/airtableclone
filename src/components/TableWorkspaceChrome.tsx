"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AirtableIcon } from "~/components/AirtableIcon";
import { TableFilterPanel } from "~/components/TableFilterPanel";
import { TableViewsSidebar } from "~/components/TableViewsSidebar";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import type { RouterInputs, RouterOutputs } from "~/trpc/react";

type ViewItem = RouterOutputs["view"]["getByTable"][number];
type TableColumn = RouterOutputs["table"]["getColumns"][number];
type ViewRow = RouterOutputs["view"]["getAllRows"][number];
type ViewFilterInput = RouterInputs["view"]["setFilters"]["filters"][number];
type ViewSortInput = RouterInputs["view"]["setSorts"]["sorts"][number];
type ViewColumnVisibilityInput = RouterInputs["view"]["setColumnVisibility"]["columnVisibility"][number];
type LocalViewFilterInput = ViewFilterInput & { localId: string };

type TableWorkspaceChromeProps = {
  baseId: string;
  tableId: string;
  views: ViewItem[];
  currentViewId?: string;
  currentViewName: string;
  children: React.ReactNode;
};

const toolbarButtonClass =
  "inline-flex h-7 items-center gap-1.5 rounded px-2 text-[12px] font-medium text-[#5a6474] hover:bg-[#eef2f7]";
const toolbarIconClass = "h-3.5 w-3.5 text-[#6f7d90]";
const textOperatorOptions: Array<{ value: ViewFilterInput["operator"]; label: string }> = [
  { value: "equals", label: "Equals" },
  { value: "contains", label: "Contains" },
  { value: "notContains", label: "Does not contain" },
  { value: "isEmpty", label: "Is empty" },
  { value: "isNotEmpty", label: "Is not empty" },
];
const numberOperatorOptions: Array<{ value: ViewFilterInput["operator"]; label: string }> = [
  { value: "greaterThan", label: "Greater than" },
  { value: "lessThan", label: "Less than" },
];
const textSortDirectionOptions: Array<{ value: ViewSortInput["direction"]; label: string }> = [
  { value: "asc", label: "A -> Z" },
  { value: "desc", label: "Z -> A" },
];
const numberSortDirectionOptions: Array<{ value: ViewSortInput["direction"]; label: string }> = [
  { value: "asc", label: "0 -> 9" },
  { value: "desc", label: "9 -> 0" },
];
const ROWS_PAGE_LIMIT = 800;

function getDefaultOperator(columnType: TableColumn["type"]): ViewFilterInput["operator"] {
  return columnType === "number" ? "greaterThan" : "contains";
}

function getDefaultValue(operator: ViewFilterInput["operator"]): string | null {
  return operator === "isEmpty" || operator === "isNotEmpty" ? null : "";
}

function normalizeFilter(
  filter: ViewFilterInput,
  columnsById: Map<string, TableColumn>,
  index: number,
): ViewFilterInput {
  const column = columnsById.get(filter.columnId);
  const expectedOperator = column ? getDefaultOperator(column.type) : filter.operator;
  const isTextColumn = column?.type === "text";
  const isNumberColumn = column?.type === "number";
  const textOperators = new Set(textOperatorOptions.map((option) => option.value));
  const numberOperators = new Set(numberOperatorOptions.map((option) => option.value));
  const operator =
    isTextColumn && !textOperators.has(filter.operator)
      ? expectedOperator
      : isNumberColumn && !numberOperators.has(filter.operator)
        ? expectedOperator
        : filter.operator;

  const normalizedValue =
    operator === "isEmpty" || operator === "isNotEmpty" ? null : (filter.value ?? "");

  return {
    ...filter,
    conjunction: filter.conjunction ?? "and",
    operator,
    value: normalizedValue,
    position: index,
  };
}

function isValueRequired(operator: ViewFilterInput["operator"]): boolean {
  return operator !== "isEmpty" && operator !== "isNotEmpty";
}

function isFilterComplete(filter: ViewFilterInput): boolean {
  if (!isValueRequired(filter.operator)) {
    return true;
  }

  return (filter.value ?? "").trim().length > 0;
}

function getRowCellValue(row: ViewRow, columnId: string): string | null {
  const cell = row.cells.find((candidateCell) => candidateCell.columnId === columnId);
  return cell?.value ?? null;
}

function getRowColumnType(
  row: ViewRow,
  columnId: string,
  columnsById: Map<string, TableColumn>,
): TableColumn["type"] | undefined {
  const rowColumnType = row.cells.find((cell) => cell.columnId === columnId)?.column.type;
  return rowColumnType ?? columnsById.get(columnId)?.type;
}

function matchesSingleFilter(
  row: ViewRow,
  filter: ViewFilterInput,
  columnsById: Map<string, TableColumn>,
): boolean {
  const columnType = getRowColumnType(row, filter.columnId, columnsById);
  const rawValue = getRowCellValue(row, filter.columnId);
  const cellValue = rawValue ?? "";
  const normalizedFilterValue = filter.value?.trim() ?? "";

  if (columnType === "number") {
    const numericFilterValue = Number(normalizedFilterValue);
    if (!Number.isFinite(numericFilterValue)) {
      return false;
    }

    const numericCellValue = Number(cellValue);
    if (!Number.isFinite(numericCellValue)) {
      return false;
    }

    if (filter.operator === "greaterThan") {
      return numericCellValue > numericFilterValue;
    }
    if (filter.operator === "lessThan") {
      return numericCellValue < numericFilterValue;
    }
  }

  const lowerCellValue = cellValue.toLowerCase();
  const lowerFilterValue = normalizedFilterValue.toLowerCase();

  switch (filter.operator) {
    case "equals":
      return lowerCellValue === lowerFilterValue;
    case "contains":
      return lowerCellValue.includes(lowerFilterValue);
    case "notContains":
      return rawValue === null || !lowerCellValue.includes(lowerFilterValue);
    case "isEmpty":
      return rawValue === null || cellValue === "";
    case "isNotEmpty":
      return rawValue !== null && cellValue !== "";
    default:
      return false;
  }
}

function applyFiltersToRows(
  rows: ViewRow[],
  filters: ViewFilterInput[],
  columnsById: Map<string, TableColumn>,
): ViewRow[] {
  if (filters.length === 0) {
    return rows;
  }

  return rows.filter((row) => {
    let matches = matchesSingleFilter(row, filters[0]!, columnsById);
    for (let index = 1; index < filters.length; index += 1) {
      const filter = filters[index]!;
      const nextMatch = matchesSingleFilter(row, filter, columnsById);
      matches = filter.conjunction === "or" ? matches || nextMatch : matches && nextMatch;
    }
    return matches;
  });
}

type SortColumnPickerProps = {
  columns: TableColumn[];
  value: string;
  onSelect: (columnId: string) => void;
};

function SortColumnPicker({ columns, value, onSelect }: SortColumnPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const selectedColumnName = columns.find((column) => column.id === value)?.name ?? "Select field";

  const filteredColumns = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return columns;
    }
    return columns.filter((column) => column.name.toLowerCase().includes(normalizedQuery));
  }, [columns, searchQuery]);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!panelRef.current) {
        return;
      }
      if (event.target instanceof Node && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        className="flex h-12 w-full items-center rounded border border-[#d0d5de] bg-background px-3 text-left text-[12px] text-[#334155]"
        onClick={() => setIsOpen((current) => !current)}
      >
        {selectedColumnName}
      </button>
      {isOpen ? (
        <div className="absolute left-0 top-12 z-40 mt-1 w-[300px] rounded-md border border-[#d7dbe3] bg-white p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <p className="text-[13px] font-semibold text-[#4b5563]">Sort by</p>
              <button
                type="button"
                className="text-[#8a94a6] hover:text-[#6b7280]"
                aria-label="Learn more about sorting"
              >
                <AirtableIcon name="Question" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          <div className="mb-2 border-t border-[#e4e7ec]" />
          <div className="mb-2 flex items-center rounded px-1.5 py-1">
            <AirtableIcon name="MagnifyingGlass" className="h-3.5 w-3.5 text-[#8a94a6]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find a field"
              className="h-7 w-full border-none bg-transparent px-2 text-[12px] text-[#334155] outline-none"
            />
          </div>
          <div className="max-h-56 min-h-[100px] overflow-auto">
            {filteredColumns.map((column) => (
              <button
                key={column.id}
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-left text-[12px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  onSelect(column.id);
                  setIsOpen(false);
                  setSearchQuery("");
                }}
              >
                {column.type === "number" ? (
                  <AirtableIcon name="HashStraight" className="mr-2 h-3.5 w-3.5 text-[#8a94a6]" />
                ) : (
                  <AirtableIcon name="TextAa" className="mr-2 h-3.5 w-3.5 text-[#8a94a6]" />
                )}
                {column.name}
              </button>
            ))}
            {filteredColumns.length === 0 ? (
              <p className="px-2 py-2 text-[12px] text-[#8a94a6]">No matching fields.</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function TableWorkspaceChrome({
  baseId,
  tableId,
  views,
  currentViewId,
  currentViewName,
  children,
}: TableWorkspaceChromeProps) {
  const utils = api.useUtils();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isSortPanelOpen, setIsSortPanelOpen] = useState(false);
  const [isHideFieldsPanelOpen, setIsHideFieldsPanelOpen] = useState(false);
  const [hideFieldsSearchQuery, setHideFieldsSearchQuery] = useState("");
  const [filters, setFilters] = useState<LocalViewFilterInput[]>([]);
  const [sorts, setSorts] = useState<ViewSortInput[]>([]);
  const canUseViewFilters = Boolean(currentViewId);
  const lastSavedFiltersRef = useRef("[]");
  const lastSavedSortsRef = useRef("[]");
  const filterIdCounterRef = useRef(0);
  const hydratedFiltersViewIdRef = useRef<string | null>(null);
  const columnsQuery = api.table.getColumns.useQuery({ tableId });
  const supportedColumns = useMemo(
    () =>
      (columnsQuery.data ?? []).filter((column) => column.type === "text" || column.type === "number"),
    [columnsQuery.data],
  );
  const columnsById = useMemo(
    () => new Map(supportedColumns.map((column) => [column.id, column])),
    [supportedColumns],
  );
  const viewFiltersQuery = api.view.getFilters.useQuery(
    { viewId: currentViewId ?? "00000000-0000-0000-0000-000000000000" },
    { enabled: canUseViewFilters },
  );
  const setFiltersMutation = api.view.setFilters.useMutation({
    onMutate: async (variables) => {
      await Promise.all([
        utils.view.getFilters.cancel({ viewId: variables.viewId }),
        utils.view.getRowsPage.cancel({ viewId: variables.viewId, limit: ROWS_PAGE_LIMIT }),
      ]);

      const previousFilters = utils.view.getFilters.getData({ viewId: variables.viewId });
      utils.view.getFilters.setData(
        { viewId: variables.viewId },
        variables.filters.map((filter, index) => ({
          id: previousFilters?.[index]?.id ?? `optimistic-filter-${index}`,
          viewId: variables.viewId,
          columnId: filter.columnId,
          conjunction: filter.conjunction,
          operator: filter.operator,
          value: filter.value,
          position: index,
        })),
      );

      return { previousFilters };
    },
    onError: (_error, variables, context) => {
      if (context?.previousFilters) {
        utils.view.getFilters.setData({ viewId: variables.viewId }, context.previousFilters);
      }
    },
    onSettled: async (_, __, variables) => {
      await Promise.all([
        utils.view.getFilters.invalidate({ viewId: variables.viewId }),
        utils.view.getRowsPage.invalidate({ viewId: variables.viewId, limit: ROWS_PAGE_LIMIT }),
      ]);
    },
  });
  const viewSortsQuery = api.view.getSorts.useQuery(
    { viewId: currentViewId ?? "00000000-0000-0000-0000-000000000000" },
    { enabled: canUseViewFilters },
  );
  const viewColumnVisibilityQuery = api.view.getColumnVisibility.useQuery(
    { viewId: currentViewId ?? "00000000-0000-0000-0000-000000000000" },
    { enabled: canUseViewFilters },
  );
  const setColumnVisibilityMutation = api.view.setColumnVisibility.useMutation({
    onMutate: async (variables) => {
      await Promise.all([
        utils.view.getColumnVisibility.cancel({ viewId: variables.viewId }),
        utils.view.getAllRows.cancel({ viewId: variables.viewId }),
      ]);

      const previousColumnVisibility = utils.view.getColumnVisibility.getData({ viewId: variables.viewId });
      const previousRows = utils.view.getAllRows.getData({ viewId: variables.viewId });

      const existingVisibilityByColumn = new Map(
        (previousColumnVisibility ?? []).map((entry) => [entry.columnId, entry]),
      );
      const nextVisibilityByColumn = new Map(
        variables.columnVisibility.map((entry) => [entry.columnId, entry.isVisible]),
      );

      utils.view.getColumnVisibility.setData(
        { viewId: variables.viewId },
        variables.columnVisibility.map((entry) => {
          const existingEntry = existingVisibilityByColumn.get(entry.columnId);
          return {
            id: existingEntry?.id ?? `optimistic-column-visibility-${entry.columnId}`,
            viewId: variables.viewId,
            columnId: entry.columnId,
            isVisible: entry.isVisible,
          };
        }),
      );

      utils.view.getAllRows.setData({ viewId: variables.viewId }, (currentRows) => {
        if (!currentRows) {
          return currentRows;
        }

        return currentRows.map((row) => ({
          ...row,
          cells: row.cells.filter((cell) => nextVisibilityByColumn.get(cell.columnId) !== false),
        }));
      });

      return { previousColumnVisibility, previousRows };
    },
    onError: (_error, variables, context) => {
      if (context?.previousColumnVisibility) {
        utils.view.getColumnVisibility.setData(
          { viewId: variables.viewId },
          context.previousColumnVisibility,
        );
      }
      if (context?.previousRows) {
        utils.view.getAllRows.setData({ viewId: variables.viewId }, context.previousRows);
      }
    },
    onSettled: async (_, __, variables) => {
      await Promise.all([
        utils.view.getColumnVisibility.invalidate({ viewId: variables.viewId }),
        utils.view.getAllRows.invalidate({ viewId: variables.viewId }),
        utils.view.getRowsPage.invalidate({ viewId: variables.viewId, limit: ROWS_PAGE_LIMIT }),
      ]);
    },
  });
  const setSortsMutation = api.view.setSorts.useMutation({
    onSettled: async (_, __, variables) => {
      await Promise.all([
        utils.table.getColumns.invalidate({ tableId }),
        utils.view.getSorts.invalidate({ viewId: variables.viewId }),
        utils.view.getAllRows.invalidate({ viewId: variables.viewId }),
        utils.view.getRowsPage.invalidate({ viewId: variables.viewId, limit: ROWS_PAGE_LIMIT }),
      ]);
    },
  });
  const createBulkRowsMutation = api.table.createBulkRows.useMutation({
    onSettled: async () => {
      if (!currentViewId) {
        return;
      }
      await Promise.all([
        utils.view.getAllRows.invalidate({ viewId: currentViewId }),
        utils.view.getRowsPage.invalidate({ viewId: currentViewId, limit: ROWS_PAGE_LIMIT }),
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
  const visibleColumns = useMemo(
    () => supportedColumns.filter((column) => columnVisibilityById.get(column.id) !== false),
    [columnVisibilityById, supportedColumns],
  );
  const visibleColumnCount = visibleColumns.length;
  const hiddenColumnCount = Math.max(0, supportedColumns.length - visibleColumnCount);
  const hideFieldsFilteredColumns = useMemo(() => {
    const normalizedQuery = hideFieldsSearchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return supportedColumns;
    }
    return supportedColumns.filter((column) => column.name.toLowerCase().includes(normalizedQuery));
  }, [hideFieldsSearchQuery, supportedColumns]);
  const primaryColumnId = supportedColumns[0]?.id;
  const persistColumnVisibility = useCallback(
    (nextVisibility: Map<string, boolean>) => {
      if (!currentViewId) {
        return;
      }
      if (primaryColumnId) {
        nextVisibility.set(primaryColumnId, true);
      }
      const payload: ViewColumnVisibilityInput[] = supportedColumns.map((column) => ({
        columnId: column.id,
        isVisible: column.id === primaryColumnId ? true : nextVisibility.get(column.id) !== false,
      }));
      setColumnVisibilityMutation.mutate({
        viewId: currentViewId,
        columnVisibility: payload,
      });
    },
    [currentViewId, primaryColumnId, setColumnVisibilityMutation, supportedColumns],
  );

  const nextFilterId = useCallback(() => {
    const id = `filter-${filterIdCounterRef.current}`;
    filterIdCounterRef.current += 1;
    return id;
  }, []);

  const normalizeLocalFilter = useCallback(
    (filter: LocalViewFilterInput, index: number): LocalViewFilterInput => {
      const normalized = normalizeFilter(filter, columnsById, index);
      return { ...normalized, localId: filter.localId };
    },
    [columnsById],
  );

  const createDefaultFilter = useCallback(
    (column: TableColumn, index = 0): LocalViewFilterInput => {
      const operator = getDefaultOperator(column.type);
      return {
        localId: nextFilterId(),
        columnId: column.id,
        conjunction: "and",
        operator,
        value: getDefaultValue(operator),
        position: index,
      };
    },
    [nextFilterId],
  );

  const toPersistedFilters = useCallback(
    (candidateFilters: LocalViewFilterInput[]): ViewFilterInput[] => {
      if (candidateFilters.length === 0) {
        return [];
      }

      const normalizedFilters = candidateFilters.map((filter, index) => normalizeLocalFilter(filter, index));

      // If the first clause is blank, treat the whole filter state as "no filters".
      if (!isFilterComplete(normalizedFilters[0]!)) {
        return [];
      }

      return normalizedFilters.filter(isFilterComplete).map(({ localId: _localId, ...filter }, index) => ({
        ...filter,
        conjunction: index === 0 ? "and" : filter.conjunction,
        position: index,
      }));
    },
    [normalizeLocalFilter],
  );

  useEffect(() => {
    if (!canUseViewFilters || !viewFiltersQuery.data || !currentViewId) {
      return;
    }
    const shouldHydrateFilters =
      hydratedFiltersViewIdRef.current !== currentViewId || filters.length === 0;
    if (!shouldHydrateFilters) {
      return;
    }

    const hydratedFilters = viewFiltersQuery.data.map((filter, index) =>
      normalizeLocalFilter(
        {
          localId: nextFilterId(),
          columnId: filter.columnId,
          conjunction: filter.conjunction,
          operator: filter.operator,
          value: filter.value,
          position: index,
        },
        index,
      ),
    );
    const nextFilters =
      hydratedFilters.length > 0
        ? hydratedFilters
        : supportedColumns.length > 0
          ? [createDefaultFilter(supportedColumns[0]!)]
          : [];
    lastSavedFiltersRef.current = JSON.stringify(hydratedFilters);
    hydratedFiltersViewIdRef.current = currentViewId;
    setFilters(nextFilters);
  }, [
    canUseViewFilters,
    createDefaultFilter,
    currentViewId,
    filters.length,
    nextFilterId,
    normalizeLocalFilter,
    supportedColumns,
    viewFiltersQuery.data,
  ]);

  const persistFilters = useCallback(
    (candidateFilters: LocalViewFilterInput[]) => {
      if (!canUseViewFilters || !currentViewId) {
        return;
      }

      const filtersForPersistence = toPersistedFilters(candidateFilters);
      const serializedFilters = JSON.stringify(filtersForPersistence);
      if (serializedFilters === lastSavedFiltersRef.current) {
        return;
      }

      lastSavedFiltersRef.current = serializedFilters;
      setFiltersMutation.mutate({ viewId: currentViewId, filters: filtersForPersistence });
    },
    [canUseViewFilters, currentViewId, setFiltersMutation, toPersistedFilters],
  );

  useEffect(() => {
    persistFilters(filters);
  }, [filters, persistFilters]);

  const commitFiltersNow = useCallback(() => {
    persistFilters(filters);
  }, [filters, persistFilters]);

  const upsertFilter = (index: number, patch: Partial<ViewFilterInput>) => {
    setFilters((current) =>
      current.map((filter, candidateIndex) => {
        if (candidateIndex !== index) {
          return normalizeLocalFilter(filter, candidateIndex);
        }

        return normalizeLocalFilter(
          {
            ...filter,
            ...patch,
          },
          candidateIndex,
        );
      }),
    );
  };

  const addFilter = () => {
    const firstSupportedColumn = supportedColumns[0];
    if (!firstSupportedColumn) {
      return;
    }

    setFilters((current) => [
      ...current,
      createDefaultFilter(firstSupportedColumn, current.length),
    ]);
  };

  const removeFilter = (index: number) => {
    setFilters((current) => {
      if (current.length === 1) {
        const onlyFilter = current[0];
        if (!onlyFilter) {
          return current;
        }
        return [
          normalizeLocalFilter(
            {
              ...onlyFilter,
              value: "",
            },
            0,
          ),
        ];
      }

      if (index === 0) {
        return current;
      }

      return current
        .filter((_, candidateIndex) => candidateIndex !== index)
        .map((filter, nextIndex) => normalizeLocalFilter(filter, nextIndex));
    });
  };

  const reorderFilters = (fromIndex: number, toIndex: number) => {
    setFilters((current) => {
      if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= current.length ||
        toIndex >= current.length ||
        fromIndex === toIndex
      ) {
        return current;
      }

      const next = [...current];
      const [movedFilter] = next.splice(fromIndex, 1);
      if (!movedFilter) {
        return current;
      }
      next.splice(toIndex, 0, movedFilter);
      return next.map((filter, index) => normalizeLocalFilter(filter, index));
    });
  };
  const appliedFilters = useMemo(() => toPersistedFilters(filters), [filters, toPersistedFilters]);
  const appliedFilterColumnNames = useMemo(() => {
    const uniqueNames = new Set<string>();
    for (const filter of appliedFilters) {
      const columnName = columnsById.get(filter.columnId)?.name;
      if (columnName) {
        uniqueNames.add(columnName);
      }
    }
    return Array.from(uniqueNames);
  }, [appliedFilters, columnsById]);
  const filterButtonLabel =
    appliedFilterColumnNames.length === 0
      ? "Filter"
      : appliedFilterColumnNames.length === 1
        ? `Filtered by ${appliedFilterColumnNames[0]}`
        : `Filtered by ${appliedFilterColumnNames.join(", ")}`;

  const createDefaultSort = useCallback((column: TableColumn, index = 0): ViewSortInput => {
    return {
      columnId: column.id,
      direction: "asc",
      position: index,
    };
  }, []);

  useEffect(() => {
    if (!canUseViewFilters || !viewSortsQuery.data) {
      return;
    }

    const hydratedSorts = viewSortsQuery.data.map((sort, index) => ({
      columnId: sort.columnId,
      direction: sort.direction,
      position: index,
    }));
    const nextSorts =
      hydratedSorts.length > 0
        ? hydratedSorts
        : supportedColumns.length > 0
          ? [createDefaultSort(supportedColumns[0]!)]
          : [];
    lastSavedSortsRef.current = JSON.stringify(nextSorts);
    setSorts(nextSorts);
  }, [canUseViewFilters, createDefaultSort, supportedColumns, viewSortsQuery.data]);

  useEffect(() => {
    if (!canUseViewFilters || !currentViewId) {
      return;
    }

    const normalizedSorts = sorts.map((sort, index) => ({
      ...sort,
      position: index,
    }));
    const serializedSorts = JSON.stringify(normalizedSorts);
    if (serializedSorts === lastSavedSortsRef.current) {
      return;
    }

    lastSavedSortsRef.current = serializedSorts;
    setSortsMutation.mutate({ viewId: currentViewId, sorts: normalizedSorts });
  }, [canUseViewFilters, currentViewId, setSortsMutation, sorts]);

  const upsertSort = (index: number, patch: Partial<ViewSortInput>) => {
    setSorts((current) =>
      current.map((sort, candidateIndex) =>
        candidateIndex === index ? { ...sort, ...patch, position: candidateIndex } : sort,
      ),
    );
  };

  const addSort = () => {
    const firstSupportedColumn = visibleColumns[0];
    if (!firstSupportedColumn) {
      return;
    }

    setSorts((current) => [...current, createDefaultSort(firstSupportedColumn, current.length)]);
  };

  const removeSort = (index: number) => {
    setSorts((current) =>
      current
        .filter((_, candidateIndex) => candidateIndex !== index)
        .map((sort, nextIndex) => ({ ...sort, position: nextIndex })),
    );
  };

  return (
    <>
      <div className="flex h-12 items-center border-b border-[#dde2ea] bg-white px-1.5">
        <div className="flex flex-1 items-center pl-1 pr-1">
          <Button
            variant="ghost"
            size="sm"
            className="mr-1 h-7 rounded p-0 text-[#5c6575] hover:bg-[#eef2f7]"
            onClick={() => setIsSidebarCollapsed((value) => !value)}
            aria-label={isSidebarCollapsed ? "Expand views sidebar" : "Collapse views sidebar"}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.64775 2.22725C5.86742 2.44692 5.86742 2.80308 5.64775 3.02275L3.233 5.4375H10.125C10.4357 5.4375 10.6875 5.68934 10.6875 6C10.6875 6.31066 10.4357 6.5625 10.125 6.5625H3.233L5.64775 8.97725C5.86742 9.19692 5.86742 9.55308 5.64775 9.77275C5.42808 9.99242 5.07192 9.99242 4.85225 9.77275L1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225L4.85225 2.22725C5.07192 2.00758 5.42808 2.00758 5.64775 2.22725Z"
                fill="currentColor"
              />
            </svg>
          </Button>
          <h2 className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex h-7 items-center rounded px-2 text-[13px] font-semibold text-[#2f3a4b] hover:bg-[#eef2f7]"
            >
              <AirtableIcon name="GridFeature" className="h-3.5 w-3.5 text-[#166ee1]" />
              <span className="mx-1 max-w-[200px] truncate">{currentViewName}</span>
              <AirtableIcon name="ChevronDown" className="h-3 w-3 text-[#7b8698]" />
            </Button>
          </h2>
        </div>
        <div className="relative flex flex-1 items-center justify-end pr-1">
          <Button
            variant="ghost"
            size="sm"
            className={[
              toolbarButtonClass,
              hiddenColumnCount > 0 ? "bg-[#dbefff] text-[#0f4c81] hover:bg-[#cde6fc]" : "",
            ].join(" ")}
            onClick={() => {
              setIsSortPanelOpen(false);
              setIsFilterPanelOpen(false);
              setIsHideFieldsPanelOpen((value) => !value);
            }}
            aria-label={hiddenColumnCount > 0 ? `${hiddenColumnCount} hidden fields` : "Hide fields"}
          >
            <AirtableIcon name="EyeSlash" className={toolbarIconClass} />
            {hiddenColumnCount > 0
              ? `${hiddenColumnCount} hidden field${hiddenColumnCount === 1 ? "" : "s"}`
              : "Hide fields"}
          </Button>
          {isHideFieldsPanelOpen ? (
            <div className="absolute right-0 top-10 z-30 w-[340px] max-w-[calc(100vw-1rem)] rounded-md border border-[#d7dbe3] bg-white p-3 shadow-lg">
              <div className="mb-2 flex items-center border-b border-[#e4e7ec] pb-2">
                <input
                  type="text"
                  value={hideFieldsSearchQuery}
                  onChange={(event) => setHideFieldsSearchQuery(event.target.value)}
                  placeholder="Find a field"
                  className="h-8 w-full border-none bg-transparent px-1 text-[12px] text-[#334155] outline-none"
                />
                <button
                  type="button"
                  className="text-[#8a94a6] hover:text-[#6b7280]"
                  aria-label="Learn more about hiding fields"
                >
                  <AirtableIcon name="Question" className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="max-h-64 min-h-[100px] overflow-auto pr-1">
                {hideFieldsFilteredColumns.map((column) => {
                  const isPrimaryColumn = column.id === primaryColumnId;
                  const isVisible = columnVisibilityById.get(column.id) !== false;
                  return (
                    <div key={column.id} className="mb-1 flex items-center rounded px-1 py-1 hover:bg-[#f2f5fa]">
                      <button
                        type="button"
                        className="flex flex-1 items-center text-left disabled:cursor-not-allowed disabled:opacity-70"
                        onClick={() => {
                          if (isPrimaryColumn) {
                            return;
                          }
                          if (isVisible && visibleColumnCount <= 1) {
                            return;
                          }
                          const nextVisibility = new Map(columnVisibilityById);
                          nextVisibility.set(column.id, !isVisible);
                          persistColumnVisibility(nextVisibility);
                        }}
                        disabled={isPrimaryColumn}
                        title={isPrimaryColumn ? "Primary field cannot be hidden." : undefined}
                      >
                        <span
                          className={[
                            "mr-2 inline-flex h-3.5 w-6 items-center rounded-full p-[2px] transition",
                            isVisible ? "justify-end bg-[#1f7aff]" : "justify-start bg-[#c6ceda]",
                          ].join(" ")}
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                        {column.type === "number" ? (
                          <AirtableIcon name="HashStraight" className="mr-2 h-3.5 w-3.5 text-[#7b8493]" />
                        ) : (
                          <AirtableIcon name="TextAa" className="mr-2 h-3.5 w-3.5 text-[#7b8493]" />
                        )}
                        <span className="truncate text-[12px] text-[#334155]">{column.name}</span>
                      </button>
                      <AirtableIcon name="DotsSixVertical" className="h-4 w-4 text-[#9aa3b2]" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex items-center gap-2 border-t border-[#e4e7ec] pt-2">
                <button
                  type="button"
                  className="flex-1 rounded px-2 py-1 text-[12px] text-[#4b5563] hover:bg-[#eef2f7] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => {
                    const nextVisibility = new Map<string, boolean>();
                    for (const column of supportedColumns) {
                      nextVisibility.set(column.id, column.id === primaryColumnId);
                    }
                    persistColumnVisibility(nextVisibility);
                  }}
                  disabled={visibleColumnCount <= 1}
                >
                  Hide all
                </button>
                <button
                  type="button"
                  className="flex-1 rounded px-2 py-1 text-[12px] text-[#4b5563] hover:bg-[#eef2f7]"
                  onClick={() => {
                    const nextVisibility = new Map<string, boolean>();
                    for (const column of supportedColumns) {
                      nextVisibility.set(column.id, true);
                    }
                    persistColumnVisibility(nextVisibility);
                  }}
                >
                  Show all
                </button>
              </div>
              {setColumnVisibilityMutation.error ? (
                <p className="mt-2 text-[11px] text-red-600">{setColumnVisibilityMutation.error.message}</p>
              ) : null}
            </div>
          ) : null}
          <Button
            variant="ghost"
            size="sm"
            className={[
              toolbarButtonClass,
              appliedFilterColumnNames.length > 0 ? "bg-[#def7e8] text-[#14532d] hover:bg-[#d1f1df]" : "",
            ].join(" ")}
            onClick={() => {
              setIsHideFieldsPanelOpen(false);
              setIsSortPanelOpen(false);
              setIsFilterPanelOpen((value) => !value);
            }}
            aria-label={filterButtonLabel}
          >
            <AirtableIcon name="Filter" className={toolbarIconClass} />
            {filterButtonLabel}
          </Button>
          <TableFilterPanel
            isOpen={isFilterPanelOpen}
            supportedColumns={supportedColumns}
            filters={filters}
            columnsById={columnsById}
            errorMessage={setFiltersMutation.error?.message}
            onAddFilter={addFilter}
            onRemoveFilter={removeFilter}
            onReorderFilters={reorderFilters}
            onUpsertFilter={upsertFilter}
            onCommitFilters={commitFiltersNow}
            getDefaultOperator={getDefaultOperator}
            getDefaultValue={getDefaultValue}
          />
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            <AirtableIcon name="Group" className={toolbarIconClass} />
            Group
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={toolbarButtonClass}
            onClick={() => {
              setIsHideFieldsPanelOpen(false);
              setIsFilterPanelOpen(false);
              setIsSortPanelOpen((value) => !value);
            }}
          >
            <AirtableIcon name="ArrowsDownUp" className={toolbarIconClass} />
            Sort
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={toolbarButtonClass}
            onClick={() => createBulkRowsMutation.mutate({ tableId, count: 100000 })}
            disabled={createBulkRowsMutation.isPending}
          >
            <AirtableIcon name="Plus" className={toolbarIconClass} />
            {createBulkRowsMutation.isPending ? "Adding 100,000..." : "Add 100,000 rows"}
          </Button>
          {isSortPanelOpen ? (
            <div className="absolute right-0 top-10 z-30 w-[760px] max-w-[calc(100vw-1rem)] rounded-md border border-[#d7dbe3] bg-white p-3 shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <p className="text-[14px] font-medium text-[#374151]">Sort by</p>
                <AirtableIcon name="Question" className="h-3.5 w-3.5 text-[#8a94a6]" />
              </div>
              <div className="mb-3 border-t border-[#e4e7ec]" />
              {visibleColumns.length === 0 ? (
                <p className="text-[12px] text-[#6b7280]">No text or number columns available.</p>
              ) : (
                <div className="space-y-2">
                  {sorts.map((sort, index) => {
                    const sortColumn = columnsById.get(sort.columnId);
                    const directionOptions =
                      sortColumn?.type === "number"
                        ? numberSortDirectionOptions
                        : textSortDirectionOptions;

                    return (
                      <div
                        key={`${sort.columnId}-${index}`}
                        className="grid grid-cols-[1fr_240px_auto] gap-1.5"
                      >
                        <SortColumnPicker
                          columns={visibleColumns}
                          value={sort.columnId}
                          onSelect={(columnId) => {
                            upsertSort(index, { columnId, direction: "asc" });
                          }}
                        />
                        <select
                          className="h-12 rounded border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                          value={sort.direction}
                          onChange={(event) =>
                            upsertSort(index, {
                              direction: event.target.value as ViewSortInput["direction"],
                            })
                          }
                        >
                          {directionOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-12 border-[#d0d5de] bg-background px-3 text-[11px] text-[#4b5563]"
                          onClick={() => removeSort(index)}
                          aria-label="Delete sort condition"
                        >
                          <AirtableIcon name="Trash" className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="mt-3 border-t border-[#d9dde5] pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 border-[#d0d5de] bg-background px-3 text-[18px] font-normal text-[#4b5563]"
                  onClick={addSort}
                  disabled={visibleColumns.length === 0}
                >
                  <AirtableIcon name="Plus" className="mr-1 h-4 w-4" />
                  Add another sort
                </Button>
              </div>
              {setSortsMutation.error ? (
                <p className="mt-2 text-[11px] text-red-600">{setSortsMutation.error.message}</p>
              ) : null}
            </div>
          ) : null}
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            <AirtableIcon name="Palette" className={toolbarIconClass} />
            Color
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex h-7 items-center rounded px-2 text-[#5a6474] hover:bg-[#eef2f7]"
            aria-label="Row height"
          >
            <AirtableIcon name="ArrowsInLineVertical" className={toolbarIconClass} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={toolbarButtonClass}
          >
            <AirtableIcon name="MagnifyingGlass" className={toolbarIconClass} />
            Share and sync
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex h-7 items-center rounded p-0 text-[#5a6474] hover:bg-[#eef2f7]"
            aria-label="Find in view"
          >
            <AirtableIcon name="MagnifyingGlass" className={toolbarIconClass} />
          </Button>
        </div>
      </div>
      {createBulkRowsMutation.error ? (
        <div className="border-b border-[#f3d7d7] bg-[#fff7f7] px-3 py-1.5 text-[11px] text-red-700">
          {createBulkRowsMutation.error.message}
        </div>
      ) : null}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {!isSidebarCollapsed ? (
          <TableViewsSidebar
            baseId={baseId}
            tableId={tableId}
            views={views}
            currentViewId={currentViewId}
          />
        ) : null}
        {children}
      </div>
    </>
  );
}
