import { z } from "zod";

import {
  BaseModelSchema,
  CellModelSchema,
  ColumnModelSchema,
  RowModelSchema,
  TableModelSchema,
} from "./models";

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

export const TableGetAllRowsInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
});

export const TableGetAllRowsOutputSchema = z.array(
  RowModelSchema.extend({
    cells: z.array(
      CellModelSchema.extend({
        column: ColumnModelSchema.pick({
          id: true,
          name: true,
          type: true,
          position: true,
          tableId: true,
        }),
      }),
    ),
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
