import { z } from "zod";

import {
  BaseModelSchema,
  CellModelSchema,
  ColumnModelSchema,
  RowModelSchema,
  TableModelSchema,
  ViewFilterModelSchema,
  ViewColumnVisibilityModelSchema,
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

export const BaseCreateInputSchema = z.object({
  name: z.string().trim().min(1).max(100),
});

export const BaseCreateOutputSchema = BaseModelSchema.pick({
  id: true,
  name: true,
  lastOpened: true,
  createdAt: true,
  updatedAt: true,
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
  limit: z.number().int().min(1).max(5000).optional(),
  cursor: RowModelSchema.shape.id.optional(),
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

export const ViewGetRowsPageInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
  limit: z.number().int().min(1).max(5000).default(500),
  cursor: RowModelSchema.shape.id.optional(),
});

export const ViewGetRowsPageOutputSchema = z.object({
  rows: ViewGetAllRowsOutputSchema,
  nextCursor: RowModelSchema.shape.id.nullable(),
});

export const TableCreateInputSchema = TableModelSchema.pick({
  baseId: true,
}).extend({
  name: z.string().trim().min(1).max(100),
});

export const TableCreateOutputSchema = TableModelSchema.pick({
  id: true,
  name: true,
  baseId: true,
  createdAt: true,
  updatedAt: true,
});

export const TableRenameInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
  name: z.string().trim().min(1).max(100),
});

export const TableRenameOutputSchema = TableCreateOutputSchema;

export const TableDeleteInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
});

export const TableDeleteOutputSchema = z.object({
  id: TableModelSchema.shape.id,
  baseId: TableModelSchema.shape.baseId,
  nextTableId: TableModelSchema.shape.id.nullable(),
});

export const TableCreateRowInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
});

export const TableCreateRowOutputSchema = RowModelSchema.pick({
  id: true,
  createdAt: true,
  updatedAt: true,
  tableId: true,
});

export const TableDuplicateRowInputSchema = z.object({
  rowId: RowModelSchema.shape.id,
});

export const TableDuplicateRowOutputSchema = TableCreateRowOutputSchema;

export const TableDeleteRowInputSchema = z.object({
  rowId: RowModelSchema.shape.id,
});

export const TableDeleteRowOutputSchema = z.object({
  id: RowModelSchema.shape.id,
  tableId: RowModelSchema.shape.tableId,
});

export const TableCreateBulkRowsInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
  count: z.number().int().min(1).max(100000),
});

export const TableCreateBulkRowsOutputSchema = z.object({
  tableId: TableModelSchema.shape.id,
  createdCount: z.number().int().min(0),
});

export const TableCreateColumnInputSchema = z.object({
  tableId: TableModelSchema.shape.id,
  name: z.string().trim().min(1).max(100),
  type: ColumnModelSchema.shape.type,
  position: z.number().int().min(0).optional(),
});

export const TableCreateColumnOutputSchema = ColumnModelSchema.pick({
  id: true,
  name: true,
  type: true,
  position: true,
  tableId: true,
});

export const TableUpdateColumnInputSchema = z.object({
  columnId: ColumnModelSchema.shape.id,
  name: z.string().trim().min(1).max(100),
  type: ColumnModelSchema.shape.type,
});

export const TableUpdateColumnOutputSchema = TableCreateColumnOutputSchema;

export const TableDeleteColumnInputSchema = z.object({
  columnId: ColumnModelSchema.shape.id,
});

export const TableDeleteColumnOutputSchema = z.object({
  id: ColumnModelSchema.shape.id,
  tableId: ColumnModelSchema.shape.tableId,
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
  name: z.string().trim().min(1).max(100),
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

export const ViewRenameInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
  name: z.string().trim().min(1).max(100),
});

export const ViewRenameOutputSchema = ViewCreateOutputSchema;

export const ViewDuplicateInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewDuplicateOutputSchema = ViewCreateOutputSchema;

export const ViewDeleteInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewDeleteOutputSchema = z.object({
  id: ViewModelSchema.shape.id,
  tableId: ViewModelSchema.shape.tableId,
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

export const ViewGetColumnVisibilityInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
});

export const ViewGetColumnVisibilityOutputSchema = z.array(
  ViewColumnVisibilityModelSchema.pick({
    id: true,
    viewId: true,
    columnId: true,
    isVisible: true,
  }),
);

export const ViewColumnVisibilityInputSchema = z.object({
  columnId: ViewColumnVisibilityModelSchema.shape.columnId,
  isVisible: ViewColumnVisibilityModelSchema.shape.isVisible,
});

export const ViewSetColumnVisibilityInputSchema = z.object({
  viewId: ViewModelSchema.shape.id,
  columnVisibility: z.array(ViewColumnVisibilityInputSchema),
});

export const ViewSetColumnVisibilityOutputSchema = ViewGetColumnVisibilityOutputSchema;

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
