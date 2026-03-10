import { PrismaClient, FieldType } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Clean up any previous demo data for idempotent runs
  await prisma.project.deleteMany({
    where: { name: "Lyra" },
  });

  const project = await prisma.project.create({
    data: {
      name: "Lyra",
    },
  });

  const table = await prisma.table.create({
    data: {
      name: "Lyra Employees",
      projectId: project.id,
    },
  });

  // Define fields (columns)
  const nameField = await prisma.field.create({
    data: {
      name: "Name",
      type: FieldType.text,
      position: 0,
      tableId: table.id,
    },
  });

  const ageField = await prisma.field.create({
    data: {
      name: "Age",
      type: FieldType.number,
      position: 1,
      tableId: table.id,
    },
  });

  const addressField = await prisma.field.create({
    data: {
      name: "Address",
      type: FieldType.text,
      position: 2,
      tableId: table.id,
    },
  });

  const hobbiesField = await prisma.field.create({
    data: {
      name: "Hobbies",
      type: FieldType.multiSelect,
      position: 3,
      tableId: table.id,
    },
  });

  const websiteField = await prisma.field.create({
    data: {
      name: "Website",
      type: FieldType.url,
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
          fieldId: nameField.id,
          value: employee.name,
        },
        {
          rowId: row.id,
          fieldId: ageField.id,
          value: String(employee.age),
        },
        {
          rowId: row.id,
          fieldId: addressField.id,
          value: employee.address,
        },
        {
          rowId: row.id,
          fieldId: hobbiesField.id,
          value: JSON.stringify(employee.hobbies),
        },
        {
          rowId: row.id,
          fieldId: websiteField.id,
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

