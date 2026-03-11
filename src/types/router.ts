import { z } from "zod";

import { BaseModelSchema, CellModelSchema, TableModelSchema } from "./models";

export const BaseGetAllOutputSchema = z.array(
  BaseModelSchema.pick({
    id: true,
    name: true,
    createdAt: true,
    updatedAt: true,
  }),
);

export const TableGetByBaseInputSchema = TableModelSchema.pick({
  baseId: true,
});

export const TableGetByBaseOutputSchema = z.array(
  TableModelSchema.pick({
    id: true,
    name: true,
    baseId: true,
    createdAt: true,
    updatedAt: true,
  }),
);

export const CellUpdateValueInputSchema = CellModelSchema.pick({
  rowId: true,
  columnId: true,
  value: true,
});

export const CellUpdateValueOutputSchema = CellModelSchema.pick({
  id: true,
  rowId: true,
  columnId: true,
  value: true,
});
