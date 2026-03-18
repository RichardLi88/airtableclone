"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LuArrowUp,
  LuChevronDown,
  LuChevronRight,
  LuCopy,
  LuEyeOff,
  LuInfo,
  LuLock,
  LuPencil,
  LuPlus,
  LuSlidersHorizontal,
  LuTrash2,
  LuX,
} from "react-icons/lu";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type TableItem = RouterOutputs["table"]["getByBase"][number];

type TableTabsBarProps = {
  baseId: string;
  tables: TableItem[];
  currentTableId?: string;
};

export function TableTabsBar({ baseId, tables, currentTableId }: TableTabsBarProps) {
  const router = useRouter();
  const utils = api.useUtils();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isCreateTableModalOpen, setIsCreateTableModalOpen] = useState(false);
  const [openMenuTableId, setOpenMenuTableId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [renameTargetTable, setRenameTargetTable] = useState<TableItem | null>(null);
  const [deleteTargetTable, setDeleteTargetTable] = useState<TableItem | null>(null);
  const [newTableName, setNewTableName] = useState("");
  const [renamedTableName, setRenamedTableName] = useState("");
  const createTable = api.table.create.useMutation({
    onSuccess: (table) => {
      setIsCreateTableModalOpen(false);
      setNewTableName("");
      router.push(`/${baseId}/${table.id}`);
      router.refresh();
    },
  });
  const renameTable = api.table.rename.useMutation({
    onSuccess: async (table) => {
      setRenameTargetTable(null);
      setRenamedTableName("");
      await utils.table.getByBase.invalidate({ baseId });
      if (currentTableId === table.id) {
        router.refresh();
      }
    },
  });
  const deleteTable = api.table.delete.useMutation({
    onSuccess: async (result) => {
      setDeleteTargetTable(null);
      setOpenMenuTableId(null);
      await utils.table.getByBase.invalidate({ baseId });
      if (currentTableId === result.id && result.nextTableId) {
        router.push(`/${baseId}/${result.nextTableId}`);
      }
      router.refresh();
    },
  });

  const isAddingTable = createTable.isPending;
  const canDeleteTable = tables.length > 1;
  const openMenuTable = openMenuTableId ? tables.find((table) => table.id === openMenuTableId) ?? null : null;

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      const clickedInsideTabs = menuContainerRef.current?.contains(event.target) ?? false;
      const clickedInsideMenu = menuRef.current?.contains(event.target) ?? false;
      if (!clickedInsideTabs && !clickedInsideMenu) {
        setOpenMenuTableId(null);
        setMenuPosition(null);
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);
  useEffect(() => {
    if (!openMenuTableId) {
      return;
    }

    const closeMenu = () => {
      setOpenMenuTableId(null);
      setMenuPosition(null);
    };

    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", closeMenu, true);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", closeMenu, true);
    };
  }, [openMenuTableId]);

  const handleCreateTable = () => {
    const trimmedName = newTableName.trim();
    if (!trimmedName) {
      return;
    }
    createTable.mutate({ baseId, name: trimmedName });
  };
  const handleRenameTable = () => {
    const trimmedName = renamedTableName.trim();
    if (!renameTargetTable || trimmedName.length === 0) {
      return;
    }

    renameTable.mutate({ tableId: renameTargetTable.id, name: trimmedName });
  };
  const handleDeleteTable = () => {
    if (!deleteTargetTable || !canDeleteTable) {
      return;
    }

    deleteTable.mutate({ tableId: deleteTargetTable.id });
  };

  return (
    <>
      <div className="flex h-8 items-center justify-between border-b border-[#cedfcf] bg-[#dcefdc] pl-0.5 pr-1">
        <div ref={menuContainerRef} className="flex min-w-0 flex-1 items-center overflow-hidden">
          <div className="flex min-w-0 flex-1 items-center overflow-x-auto scrollbar-hide">
            {tables.map((table) => {
              const isCurrentTable = table.id === currentTableId;
              const tabClassName = cn(
                "inline-flex h-8 items-center rounded-t-md text-[13px]",
                isCurrentTable
                  ? "border border-b-0 border-[#d4dde8] bg-white font-semibold text-[#2f3540] shadow-sm"
                  : "text-[#405064] hover:bg-[#d3e7d4]",
              );

              return (
                <div key={table.id} className="relative mr-1 flex h-8 items-center">
                  <div className={tabClassName}>
                    <Link
                      href={`/${baseId}/${table.id}`}
                      aria-current={isCurrentTable ? "page" : undefined}
                      className="inline-flex h-full min-w-0 items-center pl-3 pr-1"
                    >
                      <span className="max-w-[220px] truncate">{table.name}</span>
                    </Link>
                    <button
                      type="button"
                      className={cn(
                        "mr-1 inline-flex h-6 w-6 items-center justify-center rounded text-[#6f7f91]",
                        isCurrentTable ? "hover:bg-[#eef3fa]" : "hover:bg-[#cfe4d1]",
                      )}
                      aria-label={`Open ${table.name} table menu`}
                      onClick={(event) => {
                        if (openMenuTableId === table.id) {
                          setOpenMenuTableId(null);
                          setMenuPosition(null);
                          return;
                        }

                        const rect = event.currentTarget.getBoundingClientRect();
                        const menuWidth = 250;
                        const left = Math.min(Math.max(8, rect.left), window.innerWidth - menuWidth - 8);
                        setOpenMenuTableId(table.id);
                        setMenuPosition({ top: rect.bottom + 4, left });
                      }}
                    >
                      <LuChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              className="mr-1 h-8 shrink-0 rounded px-2.5 text-[13px] font-normal text-[#38495a] hover:bg-[#d3e7d4]"
              onClick={() => setIsCreateTableModalOpen(true)}
              disabled={isAddingTable}
            >
              <LuPlus className="mr-1 h-3.5 w-3.5" />
              Add or import
            </Button>
          </div>
          <button
            type="button"
            className="flex h-8 shrink-0 items-center px-2 text-[#495769] hover:bg-[#d3e7d4]"
            aria-label="Search all tables"
          >
            <LuChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="ml-2 flex shrink-0 items-center">
          <button
            type="button"
            className="inline-flex h-8 items-center px-2 text-[13px] text-[#38495a] hover:bg-[#d3e7d4]"
            aria-label="Tools"
          >
            <span className="pr-1">Tools</span>
            <LuChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
      {openMenuTable && menuPosition ? (
        <div
          ref={menuRef}
          className="fixed z-50 w-[250px] rounded-md border border-[#d7dbe3] bg-white p-1 shadow-xl"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          <ul role="menu" tabIndex={-1} className="space-y-0.5">
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuArrowUp className="mr-2 h-4 w-4" />
                <span className="flex-auto truncate text-left">Import data</span>
                <LuChevronRight className="ml-2 h-4 w-4 text-[#64748b]" />
              </button>
            </li>
            <li role="presentation" className="my-1 h-px bg-[#e5e9f1]" />
            <li role="presentation">
              <button
                type="button"
                role="menuitem"
                tabIndex={-1}
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                  setRenameTargetTable(openMenuTable);
                  setRenamedTableName(openMenuTable.name);
                }}
              >
                <LuPencil className="mr-2 h-4 w-4" />
                <span className="truncate">Rename table</span>
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuEyeOff className="mr-2 h-4 w-4" />
                <span className="truncate">Hide table</span>
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuSlidersHorizontal className="mr-2 h-4 w-4" />
                <span className="truncate">Manage fields</span>
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuCopy className="mr-2 h-4 w-4" />
                <span className="truncate">Duplicate table</span>
              </button>
            </li>
            <li role="presentation" className="my-1 h-px bg-[#e5e9f1]" />
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuInfo className="mr-2 h-4 w-4" />
                <span className="truncate">Edit table description</span>
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuLock className="mr-2 h-4 w-4" />
                <span className="truncate">Edit table permissions</span>
              </button>
            </li>
            <li role="presentation" className="my-1 h-px bg-[#e5e9f1]" />
            <li role="presentation">
              <button
                type="button"
                className="flex w-full items-center rounded px-2 py-1.5 text-[13px] text-[#334155] hover:bg-[#eef2f7]"
                onClick={() => {
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                }}
              >
                <LuX className="mr-2 h-4 w-4" />
                <span className="truncate">Clear data</span>
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                role="menuitem"
                tabIndex={-1}
                aria-disabled={!canDeleteTable}
                className={cn(
                  "flex w-full items-center rounded px-2 py-1.5 text-[13px]",
                  canDeleteTable
                    ? "text-[#334155] hover:bg-[#eef2f7]"
                    : "cursor-not-allowed text-[#9aa6b2]",
                )}
                onClick={() => {
                  if (!canDeleteTable) {
                    return;
                  }
                  setOpenMenuTableId(null);
                  setMenuPosition(null);
                  setDeleteTargetTable(openMenuTable);
                }}
              >
                <LuTrash2 className="mr-2 h-4 w-4" />
                <span className="truncate">Delete table</span>
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      {isCreateTableModalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="w-[420px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Create table</h2>
            <p className="mt-1 text-[12px] text-[#5d6676]">Give your new table a name.</p>
            <div className="mt-4">
              <label className="mb-1 block text-[12px] font-medium text-[#323844]">Table name</label>
              <input
                type="text"
                value={newTableName}
                onChange={(event) => setNewTableName(event.target.value)}
                placeholder="e.g. Marketing pipeline"
                autoFocus
                className="h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
              />
            </div>
            {createTable.error ? (
              <p className="mt-3 text-[11px] text-red-600">{createTable.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => {
                  setIsCreateTableModalOpen(false);
                  setNewTableName("");
                }}
                disabled={isAddingTable}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleCreateTable}
                disabled={isAddingTable || newTableName.trim().length === 0}
              >
                {isAddingTable ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {renameTargetTable ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="w-[420px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Rename table</h2>
            <p className="mt-1 text-[12px] text-[#5d6676]">Choose a new table name.</p>
            <div className="mt-4">
              <label className="mb-1 block text-[12px] font-medium text-[#323844]">Table name</label>
              <input
                type="text"
                value={renamedTableName}
                onChange={(event) => setRenamedTableName(event.target.value)}
                autoFocus
                className="h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
              />
            </div>
            {renameTable.error ? (
              <p className="mt-3 text-[11px] text-red-600">{renameTable.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => {
                  setRenameTargetTable(null);
                  setRenamedTableName("");
                }}
                disabled={renameTable.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleRenameTable}
                disabled={renameTable.isPending || renamedTableName.trim().length === 0}
              >
                {renameTable.isPending ? "Saving..." : "Rename"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {deleteTargetTable ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[440px] rounded-lg border border-[#d7dbe3] bg-white p-5 shadow-xl">
            <h2 className="text-[16px] font-semibold text-[#1f2937]">Delete table?</h2>
            <p className="mt-2 text-[13px] text-[#4b5563]">
              This will permanently delete <span className="font-semibold">{deleteTargetTable.name}</span> and all of
              its records.
            </p>
            {!canDeleteTable ? (
              <p className="mt-2 text-[11px] text-[#8b95a3]">You must keep at least one table in this base.</p>
            ) : null}
            {deleteTable.error ? (
              <p className="mt-2 text-[11px] text-red-600">{deleteTable.error.message}</p>
            ) : null}
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => setDeleteTargetTable(null)}
                disabled={deleteTable.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-[12px] text-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleDeleteTable}
                disabled={deleteTable.isPending || !canDeleteTable}
              >
                {deleteTable.isPending ? "Deleting..." : "Delete table"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
