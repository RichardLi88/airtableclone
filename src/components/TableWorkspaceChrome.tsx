"use client";

import debounce from "lodash/debounce";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LuChevronDown,
  LuEyeOff,
  LuFilter,
  LuGrid2X2,
  LuGroup,
  LuMenu,
  LuPalette,
  LuPlus,
  LuSearch,
  LuTrash2,
  LuArrowUpDown,
} from "react-icons/lu";

import { TableFilterPanel } from "~/components/TableFilterPanel";
import { TableViewsSidebar } from "~/components/TableViewsSidebar";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import type { RouterInputs, RouterOutputs } from "~/trpc/react";

type ViewItem = RouterOutputs["view"]["getByTable"][number];
type TableColumn = RouterOutputs["table"]["getColumns"][number];
type ViewFilterInput = RouterInputs["view"]["setFilters"]["filters"][number];
type ViewSortInput = RouterInputs["view"]["setSorts"]["sorts"][number];

type TableWorkspaceChromeProps = {
  baseId: string;
  tableId: string;
  views: ViewItem[];
  currentViewId?: string;
  currentViewName: string;
  children: React.ReactNode;
};

const toolbarButtonClass =
  "inline-flex h-7 items-center gap-1.5 rounded-md border border-transparent px-2 text-[12px] font-medium text-[#5a6474] hover:border-[#dfe3ea] hover:bg-[#f6f7fa]";
const toolbarIconClass = "h-3.5 w-3.5 text-[#7b8697]";
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
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

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
  const [filters, setFilters] = useState<ViewFilterInput[]>([]);
  const [sorts, setSorts] = useState<ViewSortInput[]>([]);
  const canUseViewFilters = Boolean(currentViewId);
  const lastSavedFiltersRef = useRef("[]");
  const lastSavedSortsRef = useRef("[]");
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
    onSuccess: async (_, variables) => {
      await Promise.all([
        utils.view.getFilters.invalidate({ viewId: variables.viewId }),
        utils.view.getAllRows.invalidate({ viewId: variables.viewId }),
      ]);
    },
  });
  const viewSortsQuery = api.view.getSorts.useQuery(
    { viewId: currentViewId ?? "00000000-0000-0000-0000-000000000000" },
    { enabled: canUseViewFilters },
  );
  const setSortsMutation = api.view.setSorts.useMutation({
    onSuccess: async (_, variables) => {
      await Promise.all([
        utils.view.getSorts.invalidate({ viewId: variables.viewId }),
        utils.view.getAllRows.invalidate({ viewId: variables.viewId }),
      ]);
    },
  });

  const createDefaultFilter = useCallback((column: TableColumn, index = 0): ViewFilterInput => {
    const operator = getDefaultOperator(column.type);
    return {
      columnId: column.id,
      conjunction: "and",
      operator,
      value: getDefaultValue(operator),
      position: index,
    };
  }, []);

  const toPersistedFilters = useCallback(
    (candidateFilters: ViewFilterInput[]): ViewFilterInput[] => {
      if (candidateFilters.length === 0) {
        return [];
      }

      const normalizedFilters = candidateFilters.map((filter, index) =>
        normalizeFilter(filter, columnsById, index),
      );

      // If the first clause is blank, treat the whole filter state as "no filters".
      if (!isFilterComplete(normalizedFilters[0]!)) {
        return [];
      }

      return normalizedFilters.filter(isFilterComplete).map((filter, index) => ({
        ...filter,
        conjunction: index === 0 ? "and" : filter.conjunction,
        position: index,
      }));
    },
    [columnsById],
  );

  useEffect(() => {
    if (!canUseViewFilters || !viewFiltersQuery.data) {
      return;
    }

    const hydratedFilters = viewFiltersQuery.data.map((filter, index) =>
      normalizeFilter(
        {
          columnId: filter.columnId,
          conjunction: filter.conjunction,
          operator: filter.operator,
          value: filter.value,
          position: index,
        },
        columnsById,
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
    setFilters(nextFilters);
  }, [canUseViewFilters, columnsById, createDefaultFilter, supportedColumns, viewFiltersQuery.data]);

  const persistFilters = useCallback(
    (candidateFilters: ViewFilterInput[]) => {
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

  const debouncedPersistFilters = useMemo(
    () => debounce((candidateFilters: ViewFilterInput[]) => persistFilters(candidateFilters), 300),
    [persistFilters],
  );

  useEffect(() => {
    debouncedPersistFilters(filters);
  }, [debouncedPersistFilters, filters]);

  useEffect(
    () => () => {
      debouncedPersistFilters.cancel();
    },
    [debouncedPersistFilters],
  );

  const commitFiltersNow = useCallback(() => {
    debouncedPersistFilters.cancel();
    persistFilters(filters);
  }, [debouncedPersistFilters, filters, persistFilters]);

  const upsertFilter = (index: number, patch: Partial<ViewFilterInput>) => {
    setFilters((current) =>
      current.map((filter, candidateIndex) => {
        if (candidateIndex !== index) {
          return normalizeFilter(filter, columnsById, candidateIndex);
        }

        return normalizeFilter(
          {
            ...filter,
            ...patch,
          },
          columnsById,
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
    if (index === 0) {
      return;
    }

    setFilters((current) =>
      current
        .filter((_, candidateIndex) => candidateIndex !== index)
        .map((filter, nextIndex) => normalizeFilter(filter, columnsById, nextIndex)),
    );
  };

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
    const firstSupportedColumn = supportedColumns[0];
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
      <div className="flex h-10 items-center justify-between border-b border-[#dde2ea] bg-[#fbfcfe] px-2.5">
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 rounded-md border border-transparent px-2 text-[#5c6575] hover:border-[#dfe3ea] hover:bg-[#f4f6fa]"
            onClick={() => setIsSidebarCollapsed((value) => !value)}
            aria-label={isSidebarCollapsed ? "Expand views sidebar" : "Collapse views sidebar"}
          >
            <LuMenu className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex h-7 items-center rounded-md border border-[#dce1ea] bg-[#f8fafd] px-2.5 text-[12px] font-medium text-[#2f3a4b] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            <LuGrid2X2 className={toolbarIconClass} />
            {currentViewName}
            <LuChevronDown className="ml-0.5 h-3 w-3 text-[#7b8698]" />
          </Button>
        </div>
        <div className="relative flex items-center gap-0.5">
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            <LuEyeOff className={toolbarIconClass} />
            Hide fields
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={toolbarButtonClass}
            onClick={() => {
              setIsSortPanelOpen(false);
              setIsFilterPanelOpen((value) => !value);
            }}
          >
            <LuFilter className={toolbarIconClass} />
            Filter
          </Button>
          <TableFilterPanel
            isOpen={isFilterPanelOpen}
            supportedColumns={supportedColumns}
            filters={filters}
            columnsById={columnsById}
            errorMessage={setFiltersMutation.error?.message}
            onAddFilter={addFilter}
            onRemoveFilter={removeFilter}
            onUpsertFilter={upsertFilter}
            onCommitFilters={commitFiltersNow}
            getDefaultOperator={getDefaultOperator}
            getDefaultValue={getDefaultValue}
          />
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            <LuGroup className={toolbarIconClass} />
            Group
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={toolbarButtonClass}
            onClick={() => {
              setIsFilterPanelOpen(false);
              setIsSortPanelOpen((value) => !value);
            }}
          >
            <LuArrowUpDown className={toolbarIconClass} />
            Sort
          </Button>
          {isSortPanelOpen ? (
            <div className="absolute right-0 top-10 z-30 w-[860px] max-w-[calc(100vw-1rem)] rounded-md border border-[#d7dbe3] bg-[#f6f7f9] p-3 shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <p className="text-[14px] font-medium text-[#374151]">Sort by</p>
                <span className="text-[13px] text-[#6b7280]">?</span>
              </div>
              {supportedColumns.length === 0 ? (
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
                        <select
                          className="h-12 rounded border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                          value={sort.columnId}
                          onChange={(event) => {
                            upsertSort(index, { columnId: event.target.value, direction: "asc" });
                          }}
                        >
                          {supportedColumns.map((column) => (
                            <option key={column.id} value={column.id}>
                              {column.name}
                            </option>
                          ))}
                        </select>
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
                          <LuTrash2 className="h-4 w-4" />
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
                  disabled={supportedColumns.length === 0}
                >
                  <LuPlus className="mr-1 h-4 w-4" />
                  Add another sort
                </Button>
              </div>
              <div className="mt-3 border-t border-[#d9dde5] bg-[#e9ecf2] px-2 py-2 text-[13px] text-[#374151]">
                Automatically sort records
              </div>
              {setSortsMutation.error ? (
                <p className="mt-2 text-[11px] text-red-600">{setSortsMutation.error.message}</p>
              ) : null}
            </div>
          ) : null}
          <Button variant="ghost" size="sm" className={toolbarButtonClass}>
            <LuPalette className={toolbarIconClass} />
            Color
          </Button>
          <span className="mx-1 h-4 w-px bg-[#d9dee7]" />
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex h-7 items-center gap-1.5 rounded-md border border-transparent px-2 text-[12px] font-medium text-[#5a6474] hover:border-[#dfe3ea] hover:bg-[#f6f7fa]"
          >
            <LuSearch className={toolbarIconClass} />
            Search
          </Button>
        </div>
      </div>
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
