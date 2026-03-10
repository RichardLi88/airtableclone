import { PrismaClient, ColumnType } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Clean up any previous demo data for idempotent runs.
  // Delete children first to avoid FK issues (and be explicit about scope).
  const existingBase = await prisma.base.findFirst({
    where: { name: "Lyra" },
    select: { id: true },
  });

  if (existingBase) {
    const tables = await prisma.table.findMany({
      where: { baseId: existingBase.id },
      select: { id: true },
    });
    const tableIds = tables.map((t) => t.id);

    if (tableIds.length > 0) {
      await prisma.cell.deleteMany({
        where: { row: { tableId: { in: tableIds } } },
      });
      await prisma.row.deleteMany({ where: { tableId: { in: tableIds } } });
      await prisma.column.deleteMany({ where: { tableId: { in: tableIds } } });
      await prisma.table.deleteMany({ where: { id: { in: tableIds } } });
    }

    await prisma.base.delete({ where: { id: existingBase.id } });
  }

  const base = await prisma.base.create({
    data: {
      name: "Lyra",
    },
  });

  const table = await prisma.table.create({
    data: {
      name: "Lyra Employees",
      baseId: base.id,
    },
  });

  // Define fields (columns)
  const nameColumn = await prisma.column.create({
    data: {
      name: "Name",
      type: ColumnType.text,
      position: 0,
      tableId: table.id,
    },
  });

  const ageColumn = await prisma.column.create({
    data: {
      name: "Age",
      type: ColumnType.number,
      position: 1,
      tableId: table.id,
    },
  });

  const addressColumn = await prisma.column.create({
    data: {
      name: "Address",
      type: ColumnType.text,
      position: 2,
      tableId: table.id,
    },
  });

  const hobbiesColumn = await prisma.column.create({
    data: {
      name: "Hobbies",
      type: ColumnType.multiSelect,
      position: 3,
      tableId: table.id,
    },
  });

  const websiteColumn = await prisma.column.create({
    data: {
      name: "Website",
      type: ColumnType.url,
      position: 4,
      tableId: table.id,
    },
  });

  const employees = [
    {
      name: "Alice Johnson",
      age: 29,
      address: "123 Market Street, San Francisco, CA",
      hobbies: ["Climbing", "Yoga", "Reading"],
      website: "https://alice.lyra.dev",
    },
    {
      name: "Brian Lee",
      age: 34,
      address: "48 Mission Street, San Francisco, CA",
      hobbies: ["Cycling", "Cooking"],
      website: "https://brian.lyra.dev",
    },
    {
      name: "Carla Gómez",
      age: 27,
      address: "5 Castro Street, Mountain View, CA",
      hobbies: ["Photography", "Travel", "Chess"],
      website: "https://carla.lyra.dev",
    },
  ] as const;

  for (const employee of employees) {
    const row = await prisma.row.create({
      data: {
        tableId: table.id,
      },
    });

    await prisma.cell.createMany({
      data: [
        {
          rowId: row.id,
          columnId: nameColumn.id,
          value: employee.name,
        },
        {
          rowId: row.id,
          columnId: ageColumn.id,
          value: String(employee.age),
        },
        {
          rowId: row.id,
          columnId: addressColumn.id,
          value: employee.address,
        },
        {
          rowId: row.id,
          columnId: hobbiesColumn.id,
          value: JSON.stringify(employee.hobbies),
        },
        {
          rowId: row.id,
          columnId: websiteColumn.id,
          value: employee.website,
        },
      ],
    });
  }

  console.log("Seeded Lyra Employees table with demo data.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

