import { z } from "zod";

import {
  BaseModelSchema,
  CellModelSchema,
  ColumnModelSchema,
  RowModelSchema,
  TableModelSchema,
  ViewFilterModelSchema,
  ViewSortModelSchema,
  ViewModelSchema,
} from "./models";

export const BaseGetAllOutputSchema = z.array(
  BaseModelSchema.pick({
    id: true,
    name: true,
    lastOpened: true,
    createdAt: true,
    updatedAt: true,
  }),
);

export const BaseMarkOpenedInputSchema = z.object({
  baseId: BaseModelSchema.shape.id,
});

export const BaseMarkOpenedOutputSchema = BaseModelSchema.pick({
  id: true,
  lastOpened: true,
});

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

export const TableGetColumnsInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
});

export const TableGetColumnsOutputSchema = z.array(
  ColumnModelSchema.pick({
    id: true,
    name: true,
    type: true,
    position: true,
    tableId: true,
  }),
);

export const ViewGetAllRowsInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewGetAllRowsOutputSchema = z.array(
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

export const TableCreateInputSchema = TableModelSchema.pick({
  baseId: true,
});

export const TableCreateOutputSchema = TableModelSchema.pick({
  id: true,
  name: true,
  baseId: true,
  createdAt: true,
  updatedAt: true,
});

export const ViewGetByTableInputSchema = z.object({
  tableId: ViewModelSchema.shape.tableId,
});

export const ViewGetByTableOutputSchema = z.array(
  ViewModelSchema.pick({
    id: true,
    name: true,
    type: true,
    tableId: true,
    isDefault: true,
    searchQuery: true,
    createdAt: true,
    updatedAt: true,
  }),
);

export const ViewCreateInputSchema = z.object({
  tableId: ViewModelSchema.shape.tableId,
});

export const ViewCreateOutputSchema = ViewModelSchema.pick({
  id: true,
  name: true,
  type: true,
  tableId: true,
  isDefault: true,
  searchQuery: true,
  createdAt: true,
  updatedAt: true,
});

export const ViewFilterInputSchema = z.object({
  columnId: ViewFilterModelSchema.shape.columnId,
  conjunction: ViewFilterModelSchema.shape.conjunction,
  operator: ViewFilterModelSchema.shape.operator,
  value: ViewFilterModelSchema.shape.value,
  position: ViewFilterModelSchema.shape.position,
});

export const ViewSetFiltersInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
  filters: z.array(ViewFilterInputSchema),
});

export const ViewSetFiltersOutputSchema = z.array(
  ViewFilterModelSchema.pick({
    id: true,
    viewId: true,
    columnId: true,
    conjunction: true,
    operator: true,
    value: true,
    position: true,
  }),
);

export const ViewGetFiltersInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewGetFiltersOutputSchema = ViewSetFiltersOutputSchema;

export const ViewSortInputSchema = z.object({
  columnId: ViewSortModelSchema.shape.columnId,
  direction: ViewSortModelSchema.shape.direction,
  position: ViewSortModelSchema.shape.position,
});

export const ViewSetSortsInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
  sorts: z.array(ViewSortInputSchema),
});

export const ViewSetSortsOutputSchema = z.array(
  ViewSortModelSchema.pick({
    id: true,
    viewId: true,
    columnId: true,
    direction: true,
    position: true,
  }),
);

export const ViewGetSortsInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewGetSortsOutputSchema = ViewSetSortsOutputSchema;

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
