"use client";

import { useEffect, useState } from "react";
import { LuGripVertical, LuPlus, LuTrash2 } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import type { RouterInputs, RouterOutputs } from "~/trpc/react";

type TableColumn = RouterOutputs["table"]["getColumns"][number];
type ViewFilterInput = RouterInputs["view"]["setFilters"]["filters"][number];

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
const conjunctionOptions: Array<{ value: ViewFilterInput["conjunction"]; label: string }> = [
  { value: "and", label: "and" },
  { value: "or", label: "or" },
];

type FilterValueInputProps = {
  value: string;
  disabled: boolean;
  placeholder: string;
  onValueChange: (nextValue: string) => void;
  onCommit: () => void;
};

function FilterValueInput({
  value,
  disabled,
  placeholder,
  onValueChange,
  onCommit,
}: FilterValueInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <input
      className="h-12 rounded border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none disabled:bg-[#f8fafc]"
      value={localValue}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(event) => {
        const nextValue = event.target.value;
        setLocalValue(nextValue);
        onValueChange(nextValue);
      }}
      onBlur={onCommit}
    />
  );
}

type TableFilterPanelProps = {
  isOpen: boolean;
  supportedColumns: TableColumn[];
  filters: ViewFilterInput[];
  columnsById: Map<string, TableColumn>;
  errorMessage?: string;
  onAddFilter: () => void;
  onRemoveFilter: (index: number) => void;
  onUpsertFilter: (index: number, patch: Partial<ViewFilterInput>) => void;
  onCommitFilters: () => void;
  getDefaultOperator: (columnType: TableColumn["type"]) => ViewFilterInput["operator"];
  getDefaultValue: (operator: ViewFilterInput["operator"]) => string | null;
};

export function TableFilterPanel({
  isOpen,
  supportedColumns,
  filters,
  columnsById,
  errorMessage,
  onAddFilter,
  onRemoveFilter,
  onUpsertFilter,
  onCommitFilters,
  getDefaultOperator,
  getDefaultValue,
}: TableFilterPanelProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute right-0 top-10 z-30 w-[980px] max-w-[calc(100vw-1rem)] rounded-md border border-[#d7dbe3] bg-[#f6f7f9] p-3 shadow-lg">
      <p className="mb-3 text-[14px] font-medium text-[#374151]">Filter</p>
      <p className="mb-3 text-[13px] text-[#4b5563]">In this view, show records</p>
      {supportedColumns.length === 0 ? (
        <p className="text-[12px] text-[#6b7280]">No text or number columns available.</p>
      ) : filters.length === 0 ? (
        <p className="text-[12px] text-[#6b7280]">No filters applied.</p>
      ) : (
        <div className="space-y-2">
          {filters.map((filter, index) => {
            const filterColumn = columnsById.get(filter.columnId);
            const operatorOptions =
              filterColumn?.type === "number" ? numberOperatorOptions : textOperatorOptions;
            const needsValue = filter.operator !== "isEmpty" && filter.operator !== "isNotEmpty";

            return (
              <div
                key={`${filter.columnId}-${index}`}
                className="grid grid-cols-[120px_1fr_1fr_1fr_auto_auto] gap-1.5"
              >
                {index === 0 ? (
                  <div className="flex h-12 items-center rounded border border-[#d0d5de] bg-background px-3 text-[12px] font-medium text-[#374151]">
                    Where
                  </div>
                ) : (
                  <select
                    className="h-12 rounded border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                    value={filter.conjunction}
                    onChange={(event) =>
                      onUpsertFilter(index, {
                        conjunction: event.target.value as ViewFilterInput["conjunction"],
                      })
                    }
                  >
                    {conjunctionOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                <select
                  className="h-12 rounded border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
                  value={filter.columnId}
                  onChange={(event) => {
                    const nextColumn = columnsById.get(event.target.value);
                    const nextOperator = getDefaultOperator(nextColumn?.type ?? "text");
                    onUpsertFilter(index, {
                      columnId: event.target.value,
                      operator: nextOperator,
                      value: getDefaultValue(nextOperator),
                    });
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
                  value={filter.operator}
                  onChange={(event) =>
                    onUpsertFilter(index, {
                      operator: event.target.value as ViewFilterInput["operator"],
                    })
                  }
                >
                  {operatorOptions.map((operatorOption) => (
                    <option key={operatorOption.value} value={operatorOption.value}>
                      {operatorOption.label}
                    </option>
                  ))}
                </select>
                <FilterValueInput
                  value={filter.value ?? ""}
                  disabled={!needsValue}
                  placeholder={needsValue ? "Enter a value" : "No value needed"}
                  onValueChange={(nextValue) => onUpsertFilter(index, { value: nextValue })}
                  onCommit={onCommitFilters}
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="h-12 border-[#d0d5de] bg-background px-3 text-[11px] text-[#4b5563]"
                  onClick={() => onRemoveFilter(index)}
                  disabled={index === 0}
                  aria-label="Delete filter condition"
                >
                  <LuTrash2 className="h-4 w-4" />
                </Button>
                <button
                  type="button"
                  className="flex h-12 items-center justify-center rounded border border-[#d0d5de] bg-background px-3 text-[#6b7280]"
                  aria-label="Reorder filter condition"
                >
                  <LuGripVertical className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-3 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          className="h-10 border-[#d0d5de] bg-background px-3 text-[18px] font-normal text-[#4b5563]"
          onClick={onAddFilter}
          disabled={supportedColumns.length === 0}
        >
          <LuPlus className="mr-1 h-4 w-4" />
          Add condition
        </Button>
        <span className="text-[13px] text-[#6b7280]">Copy from another view</span>
      </div>
      {errorMessage ? <p className="mt-2 text-[11px] text-red-600">{errorMessage}</p> : null}
    </div>
  );
}
