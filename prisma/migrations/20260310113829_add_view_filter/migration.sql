-- CreateEnum
CREATE TYPE "ViewType" AS ENUM ('grid', 'kanban');

-- CreateEnum
CREATE TYPE "ViewFilterOperator" AS ENUM ('equals', 'contains', 'notContains', 'isEmpty', 'isNotEmpty', 'greaterThan', 'lessThan');

-- CreateEnum
CREATE TYPE "ViewSortDirection" AS ENUM ('asc', 'desc');

-- CreateTable
CREATE TABLE "View" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ViewType" NOT NULL DEFAULT 'grid',
    "tableId" INTEGER NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "searchQuery" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewFilter" (
    "id" SERIAL NOT NULL,
    "viewId" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,
    "operator" "ViewFilterOperator" NOT NULL,
    "value" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ViewFilter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewSort" (
    "id" SERIAL NOT NULL,
    "viewId" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,
    "direction" "ViewSortDirection" NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ViewSort_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewColumnVisibility" (
    "id" SERIAL NOT NULL,
    "viewId" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ViewColumnVisibility_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "View_tableId_idx" ON "View"("tableId");

-- CreateIndex
CREATE INDEX "ViewFilter_viewId_idx" ON "ViewFilter"("viewId");

-- CreateIndex
CREATE INDEX "ViewFilter_columnId_idx" ON "ViewFilter"("columnId");

-- CreateIndex
CREATE INDEX "ViewSort_viewId_idx" ON "ViewSort"("viewId");

-- CreateIndex
CREATE INDEX "ViewSort_columnId_idx" ON "ViewSort"("columnId");

-- CreateIndex
CREATE INDEX "ViewColumnVisibility_viewId_idx" ON "ViewColumnVisibility"("viewId");

-- CreateIndex
CREATE INDEX "ViewColumnVisibility_columnId_idx" ON "ViewColumnVisibility"("columnId");

-- CreateIndex
CREATE UNIQUE INDEX "ViewColumnVisibility_viewId_columnId_key" ON "ViewColumnVisibility"("viewId", "columnId");

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewFilter" ADD CONSTRAINT "ViewFilter_viewId_fkey" FOREIGN KEY ("viewId") REFERENCES "View"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewFilter" ADD CONSTRAINT "ViewFilter_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewSort" ADD CONSTRAINT "ViewSort_viewId_fkey" FOREIGN KEY ("viewId") REFERENCES "View"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewSort" ADD CONSTRAINT "ViewSort_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewColumnVisibility" ADD CONSTRAINT "ViewColumnVisibility_viewId_fkey" FOREIGN KEY ("viewId") REFERENCES "View"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewColumnVisibility" ADD CONSTRAINT "ViewColumnVisibility_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
