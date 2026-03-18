"use client";

import { useEffect, useState } from "react";
import { DndContext, PointerSensor, type DragEndEvent, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LuGripVertical, LuPlus, LuTrash2 } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import type { RouterInputs, RouterOutputs } from "~/trpc/react";

type TableColumn = RouterOutputs["table"]["getColumns"][number];
type ViewFilterInput = RouterInputs["view"]["setFilters"]["filters"][number];
type LocalViewFilterInput = ViewFilterInput & { localId: string };

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
      className="h-10 w-full border-r border-[#d7dde8] bg-white px-3 text-[12px] text-[#334155] outline-none disabled:bg-[#f8fafc]"
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
  filters: LocalViewFilterInput[];
  columnsById: Map<string, TableColumn>;
  errorMessage?: string;
  onAddFilter: () => void;
  onRemoveFilter: (index: number) => void;
  onReorderFilters: (fromIndex: number, toIndex: number) => void;
  onUpsertFilter: (index: number, patch: Partial<ViewFilterInput>) => void;
  onCommitFilters: () => void;
  getDefaultOperator: (columnType: TableColumn["type"]) => ViewFilterInput["operator"];
  getDefaultValue: (operator: ViewFilterInput["operator"]) => string | null;
};

type SortableFilterConditionRowProps = {
  itemId: string;
  totalFilters: number;
  index: number;
  filter: LocalViewFilterInput;
  filterColumn?: TableColumn;
  supportedColumns: TableColumn[];
  columnsById: Map<string, TableColumn>;
  onUpsertFilter: (index: number, patch: Partial<ViewFilterInput>) => void;
  onRemoveFilter: (index: number) => void;
  onCommitFilters: () => void;
  getDefaultOperator: (columnType: TableColumn["type"]) => ViewFilterInput["operator"];
  getDefaultValue: (operator: ViewFilterInput["operator"]) => string | null;
};

function SortableFilterConditionRow({
  itemId,
  totalFilters,
  index,
  filter,
  filterColumn,
  supportedColumns,
  columnsById,
  onUpsertFilter,
  onRemoveFilter,
  onCommitFilters,
  getDefaultOperator,
  getDefaultValue,
}: SortableFilterConditionRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: itemId,
  });
  const operatorOptions =
    filterColumn?.type === "number" ? numberOperatorOptions : textOperatorOptions;
  const needsValue = filter.operator !== "isEmpty" && filter.operator !== "isNotEmpty";

  const canDeleteThisFilter = totalFilters === 1 || index > 0;

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`grid grid-cols-[96px_1fr_1fr_1.25fr_40px_40px] items-center rounded-md border border-[#d7dde8] bg-white ${
        isDragging ? "z-10 opacity-80 shadow-md" : ""
      }`}
    >
      {index === 0 ? (
        <div className="flex h-10 items-center border-r border-[#d7dde8] px-3 text-[12px] font-medium text-[#334155]">
          Where
        </div>
      ) : (
        <select
          className="h-10 border-r border-[#d7dde8] bg-white px-3 text-[12px] text-[#334155] outline-none"
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
        className="h-10 border-r border-[#d7dde8] bg-white px-3 text-[12px] text-[#334155] outline-none"
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
        className="h-10 border-r border-[#d7dde8] bg-white px-3 text-[12px] text-[#334155] outline-none"
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
        variant="ghost"
        size="sm"
        className="h-10 rounded-none border-r border-[#d7dde8] px-0 text-[11px] text-[#64748b] hover:bg-[#f8fafc]"
        onClick={() => onRemoveFilter(index)}
        disabled={!canDeleteThisFilter}
        aria-label="Delete filter condition"
      >
        <LuTrash2 className="h-4 w-4" />
      </Button>
      <button
        type="button"
        className="flex h-10 items-center justify-center text-[#94a3b8] hover:bg-[#f8fafc] active:cursor-grabbing"
        aria-label="Drag to reorder filter condition"
        {...attributes}
        {...listeners}
      >
        <LuGripVertical className="h-4 w-4 cursor-grab" />
      </button>
    </div>
  );
}

export function TableFilterPanel({
  isOpen,
  supportedColumns,
  filters,
  columnsById,
  errorMessage,
  onAddFilter,
  onRemoveFilter,
  onReorderFilters,
  onUpsertFilter,
  onCommitFilters,
  getDefaultOperator,
  getDefaultValue,
}: TableFilterPanelProps) {
  if (!isOpen) {
    return null;
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 4 },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }

    const fromIndex = filters.findIndex((filter) => filter.localId === String(active.id));
    const toIndex = filters.findIndex((filter) => filter.localId === String(over.id));
    if (fromIndex < 0 || toIndex < 0) {
      return;
    }

    onReorderFilters(fromIndex, toIndex);
  };

  return (
    <div className="absolute right-0 top-10 z-30 w-[760px] max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border border-[#d9dee8] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.18)]">
      <div className="border-b border-[#edf0f5] px-4 py-3">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[#475569]">Filter</p>
      </div>
      <div className="px-4 pb-4 pt-3">
        <p className="mb-3 text-[13px] text-[#4b5563]">In this view, show records</p>
      {supportedColumns.length === 0 ? (
        <p className="text-[12px] text-[#6b7280]">No text or number columns available.</p>
      ) : filters.length === 0 ? (
        <p className="text-[12px] text-[#6b7280]">No filters applied.</p>
      ) : (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext
            items={filters.map((filter) => filter.localId)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {filters.map((filter, index) => (
                <SortableFilterConditionRow
                  key={filter.localId}
                  itemId={filter.localId}
                  totalFilters={filters.length}
                  index={index}
                  filter={filter}
                  filterColumn={columnsById.get(filter.columnId)}
                  supportedColumns={supportedColumns}
                  columnsById={columnsById}
                  onUpsertFilter={onUpsertFilter}
                  onRemoveFilter={onRemoveFilter}
                  onCommitFilters={onCommitFilters}
                  getDefaultOperator={getDefaultOperator}
                  getDefaultValue={getDefaultValue}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
        <div className="mt-3 flex items-center gap-4 text-[13px]">
          <button
            type="button"
            className="inline-flex items-center font-medium text-[#2563eb] hover:text-[#1d4ed8] disabled:cursor-not-allowed disabled:text-[#94a3b8]"
            onClick={onAddFilter}
            disabled={supportedColumns.length === 0}
          >
            <LuPlus className="mr-1 h-3.5 w-3.5" />
            Add condition
          </button>
          <button
            type="button"
            className="inline-flex items-center font-medium text-[#64748b] hover:text-[#475569]"
          >
            <LuPlus className="mr-1 h-3.5 w-3.5" />
            Add condition group
          </button>
        </div>
        {errorMessage ? <p className="mt-2 text-[11px] text-red-600">{errorMessage}</p> : null}
      </div>
    </div>
  );
}
