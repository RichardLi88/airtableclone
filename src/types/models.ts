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

export const BaseModelSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TableModelSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  baseId: z.number().int().positive(),
});

export const ColumnModelSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  type: columnTypeSchema,
  position: z.number().int().nonnegative(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tableId: z.number().int().positive(),
});

export const RowModelSchema = z.object({
  id: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tableId: z.number().int().positive(),
});

export const CellModelSchema = z.object({
  id: z.number().int().positive(),
  value: z.string().nullable(),
  rowId: z.number().int().positive(),
  columnId: z.number().int().positive(),
});

export const ViewModelSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  type: viewTypeSchema,
  tableId: z.number().int().positive(),
  isDefault: z.boolean(),
  searchQuery: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ViewFilterModelSchema = z.object({
  id: z.number().int().positive(),
  viewId: z.number().int().positive(),
  columnId: z.number().int().positive(),
  operator: viewFilterOperatorSchema,
  value: z.string().nullable(),
  position: z.number().int().nonnegative(),
});

export const ViewSortModelSchema = z.object({
  id: z.number().int().positive(),
  viewId: z.number().int().positive(),
  columnId: z.number().int().positive(),
  direction: viewSortDirectionSchema,
  position: z.number().int().nonnegative(),
});

export const ViewColumnVisibilityModelSchema = z.object({
  id: z.number().int().positive(),
  viewId: z.number().int().positive(),
  columnId: z.number().int().positive(),
  isVisible: z.boolean(),
});
