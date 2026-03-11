import { z } from "zod";

export const columnTypeSchema = z.enum([
  "text",
  "number",
  "date",
  "singleSelect",
  "multiSelect",
  "checkbox",
  "url",
  "email",
]);

export const viewTypeSchema = z.enum(["grid", "kanban"]);

export const viewFilterOperatorSchema = z.enum([
  "equals",
  "contains",
  "notContains",
  "isEmpty",
  "isNotEmpty",
  "greaterThan",
  "lessThan",
]);

export const viewSortDirectionSchema = z.enum(["asc", "desc"]);
const uuidSchema = z.string().uuid();

export const BaseModelSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TableModelSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  baseId: uuidSchema,
});

export const ColumnModelSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  type: columnTypeSchema,
  position: z.number().int().nonnegative(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tableId: uuidSchema,
});

export const RowModelSchema = z.object({
  id: uuidSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  tableId: uuidSchema,
});

export const CellModelSchema = z.object({
  id: uuidSchema,
  value: z.string().nullable(),
  rowId: uuidSchema,
  columnId: uuidSchema,
});

export const ViewModelSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  type: viewTypeSchema,
  tableId: uuidSchema,
  isDefault: z.boolean(),
  searchQuery: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ViewFilterModelSchema = z.object({
  id: uuidSchema,
  viewId: uuidSchema,
  columnId: uuidSchema,
  operator: viewFilterOperatorSchema,
  value: z.string().nullable(),
  position: z.number().int().nonnegative(),
});

export const ViewSortModelSchema = z.object({
  id: uuidSchema,
  viewId: uuidSchema,
  columnId: uuidSchema,
  direction: viewSortDirectionSchema,
  position: z.number().int().nonnegative(),
});

export const ViewColumnVisibilityModelSchema = z.object({
  id: uuidSchema,
  viewId: uuidSchema,
  columnId: uuidSchema,
  isVisible: z.boolean(),
});
