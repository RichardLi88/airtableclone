import { db } from "~/server/db";

type TableBootstrapDbClient = Pick<typeof db, "table" | "view" | "column" | "row" | "cell">;

type CreateTableWithStarterContentArgs = {
  client: TableBootstrapDbClient;
  baseId: string;
  tableName: string;
};

export async function createTableWithStarterContent({
  client,
  baseId,
  tableName,
}: CreateTableWithStarterContentArgs) {
  const table = await client.table.create({
    data: {
      baseId,
      name: tableName.trim(),
    },
    select: {
      id: true,
      name: true,
      baseId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  await client.view.create({
    data: {
      tableId: table.id,
      name: "Grid view",
      type: "grid",
      isDefault: true,
      searchQuery: null,
    },
  });

  const columns = await client.column.createManyAndReturn({
    data: [
      { tableId: table.id, name: "Field 1", type: "text", position: 0 },
      { tableId: table.id, name: "Field 2", type: "text", position: 1 },
      { tableId: table.id, name: "Field 3", type: "text", position: 2 },
    ],
    select: {
      id: true,
    },
  });

  const rows = await client.row.createManyAndReturn({
    data: [{ tableId: table.id }, { tableId: table.id }, { tableId: table.id }],
    select: {
      id: true,
    },
  });

  await client.cell.createMany({
    data: rows.flatMap((row) =>
      columns.map((column) => ({
        rowId: row.id,
        columnId: column.id,
        value: null,
      })),
    ),
  });

  return table;
}
