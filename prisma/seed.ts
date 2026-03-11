import { PrismaClient, ColumnType } from "../generated/prisma";

const prisma = new PrismaClient();

const TABLE_CONFIG = [
  { name: "Lyra Employees", rows: 300 },
  { name: "Lyra Projects", rows: 260 },
  { name: "Lyra Sales", rows: 320 },
  { name: "Lyra Support Tickets", rows: 280 },
];

const firstNames = [
  "Alice",
  "Brian",
  "Carla",
  "Diego",
  "Emma",
  "Farah",
  "Gavin",
  "Hana",
  "Iris",
  "Julian",
];
const lastNames = [
  "Johnson",
  "Lee",
  "Patel",
  "Khan",
  "Martinez",
  "Nguyen",
  "Brown",
  "Taylor",
  "Davis",
  "Miller",
];
const cities = [
  "San Francisco",
  "New York",
  "Austin",
  "Seattle",
  "Chicago",
  "Denver",
  "Boston",
  "Portland",
];
const teams = ["Engineering", "Design", "Sales", "Support", "Marketing", "Operations"];

function pick<T>(arr: readonly T[], index: number): T {
  if (arr.length === 0) {
    throw new Error("Cannot pick from an empty array");
  }
  return arr[index % arr.length]!;
}

function createRowValues(rowIndex: number, tableName: string) {
  const firstName = pick(firstNames, rowIndex);
  const lastName = pick(lastNames, rowIndex * 3);
  const personName = `${firstName} ${lastName}`;
  const city = pick(cities, rowIndex * 2);
  const team = pick(teams, rowIndex * 5);
  const amount = 500 + ((rowIndex * 173) % 50000);

  return {
    name: `${personName} - ${tableName} #${rowIndex + 1}`,
    metric: String(amount),
    details: `${team} in ${city}`,
  };
}

async function clearDatabase() {
  await prisma.viewColumnVisibility.deleteMany();
  await prisma.viewSort.deleteMany();
  await prisma.viewFilter.deleteMany();
  await prisma.view.deleteMany();
  await prisma.cell.deleteMany();
  await prisma.row.deleteMany();
  await prisma.column.deleteMany();
  await prisma.table.deleteMany();
  await prisma.base.deleteMany();
}

async function seedTable(baseId: string, tableName: string, rowCount: number) {
  const table = await prisma.table.create({
    data: {
      name: tableName,
      baseId,
    },
  });

  const createdColumns = await Promise.all([
    prisma.column.create({
      data: { name: "Name", type: ColumnType.text, position: 0, tableId: table.id },
    }),
    prisma.column.create({
      data: { name: "Metric", type: ColumnType.number, position: 1, tableId: table.id },
    }),
    prisma.column.create({
      data: { name: "Details", type: ColumnType.text, position: 2, tableId: table.id },
    }),
  ]);

  const [nameColumn, metricColumn, detailsColumn] = createdColumns;

  await prisma.row.createMany({
    data: Array.from({ length: rowCount }, () => ({ tableId: table.id })),
  });

  const rows = await prisma.row.findMany({
    where: { tableId: table.id },
    orderBy: { id: "asc" },
    select: { id: true },
  });

  const cells = rows.flatMap((row, index) => {
    const values = createRowValues(index, tableName);
    return [
      { rowId: row.id, columnId: nameColumn.id, value: values.name },
      { rowId: row.id, columnId: metricColumn.id, value: values.metric },
      { rowId: row.id, columnId: detailsColumn.id, value: values.details },
    ];
  });

  await prisma.cell.createMany({ data: cells });
}

async function main() {
  await clearDatabase();

  const base = await prisma.base.create({
    data: {
      name: "Lyra",
    },
  });

  for (const config of TABLE_CONFIG) {
    await seedTable(base.id, config.name, config.rows);
  }

  console.log(
    `Seeded ${TABLE_CONFIG.length} tables with ${TABLE_CONFIG.reduce(
      (sum, config) => sum + config.rows,
      0,
    )} total rows.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

