"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuCog, LuCopy, LuEllipsis, LuGrid2X2, LuPencil, LuPlus, LuSearch, LuStar, LuTrash2 } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type ViewItem = RouterOutputs["view"]["getByTable"][number];

type TableViewsSidebarProps = {
  baseId: string;
  tableId: string;
  views: ViewItem[];
  currentViewId?: string;
};

export function TableViewsSidebar({
  baseId,
  tableId,
  views,
  currentViewId,
}: TableViewsSidebarProps) {
  const router = useRouter();
  const utils = api.useUtils();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateViewModalOpen, setIsCreateViewModalOpen] = useState(false);
  const [newViewName, setNewViewName] = useState("");
  const [openMenuViewId, setOpenMenuViewId] = useState<string | null>(null);
  const [renameViewId, setRenameViewId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const viewsQuery = api.view.getByTable.useQuery(
    { tableId },
    {
      initialData: views,
      refetchOnWindowFocus: false,
    },
  );
  const viewList = viewsQuery.data ?? views;
  const createView = api.view.create.useMutation({
    onSuccess: (view) => {
      setIsCreateViewModalOpen(false);
      setNewViewName("");
      void utils.view.getByTable.invalidate({ tableId });
      router.push(`/${baseId}/${tableId}?viewId=${view.id}`);
    },
  });
  const renameView = api.view.rename.useMutation({
    onSuccess: async (view) => {
      await utils.view.getByTable.invalidate({ tableId });
      setRenameViewId(null);
      setOpenMenuViewId(null);
      router.push(`/${baseId}/${tableId}?viewId=${view.id}`);
    },
  });
  const duplicateView = api.view.duplicate.useMutation({
    onSuccess: async (view) => {
      await utils.view.getByTable.invalidate({ tableId });
      setOpenMenuViewId(null);
      router.push(`/${baseId}/${tableId}?viewId=${view.id}`);
    },
  });
  const deleteView = api.view.delete.useMutation({
    onSuccess: async (_deleted, variables) => {
      await utils.view.getByTable.invalidate({ tableId });
      const remainingViews = (utils.view.getByTable.getData({ tableId }) ?? viewList).filter(
        (view) => view.id !== variables.viewId,
      );
      setOpenMenuViewId(null);
      if (currentViewId === variables.viewId) {
        const fallbackViewId = remainingViews[0]?.id;
        if (fallbackViewId) {
          router.push(`/${baseId}/${tableId}?viewId=${fallbackViewId}`);
        }
      }
    },
  });

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (event.target instanceof Node && !menuRef.current.contains(event.target)) {
        setOpenMenuViewId(null);
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  const activeViewId = currentViewId ?? viewList[0]?.id;
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredViews = useMemo(
    () =>
      normalizedQuery.length === 0
        ? viewList
        : viewList.filter((view) => view.name.toLowerCase().includes(normalizedQuery)),
    [normalizedQuery, viewList],
  );
  const canDeleteView = viewList.length > 1;

  return (
    <aside className="flex w-[280px] shrink-0 flex-col border-r border-[#d8dce4] bg-background px-3 py-3">
      <div className="flex-none pb-3">
        <Button
          className="h-8 w-full justify-start rounded-xl border-transparent bg-transparent px-2.5 text-[13px] font-medium text-[#2f3540] hover:bg-[#eef2f7]"
          variant="ghost"
          onClick={() => setIsCreateViewModalOpen(true)}
          disabled={createView.isPending}
        >
          <LuPlus className="mr-2 h-4 w-4" />
          {createView.isPending ? "Creating view..." : "Create new..."}
        </Button>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="relative flex-1">
            <LuSearch className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#7b8493]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find a view"
              aria-label="Find a view"
              className="h-8 w-full rounded-md border border-[#dbe0e8] bg-background pl-8 pr-2.5 text-[12px] text-[#2f3540] outline-none placeholder:text-[#8a94a6] focus:border-[#b8c2d1]"
            />
          </div>
          <button
            type="button"
            aria-label="View list options"
            className="grid h-7 w-7 place-items-center rounded-md text-[#6d7788] hover:bg-[#eef2f7] hover:text-[#2f3540]"
          >
            <LuCog className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="space-y-0.5">
          {filteredViews.length === 0 ? (
            <p className="px-2.5 py-1.5 text-[12px] text-[#7b8493]">
              {viewList.length === 0 ? "No views found." : "No matching views."}
            </p>
          ) : (
            filteredViews.map((view) => (
              <div
                key={view.id}
                className={[
                  "group relative rounded-lg",
                  view.id === activeViewId ? "bg-[#e9eef7]" : "hover:bg-[#f2f5fa]",
                ].join(" ")}
              >
                <Link
                  href={`/${baseId}/${tableId}?viewId=${view.id}`}
                  aria-current={view.id === activeViewId ? "page" : undefined}
                  className="flex items-center px-2.5 py-2 pr-9 text-[13px] text-[#2f3540]"
                >
                  <LuGrid2X2
                    className={[
                      "mr-2 h-4 w-4 shrink-0",
                      view.id === activeViewId ? "text-[#166ee1]" : "text-[#7b8493]",
                    ].join(" ")}
                  />
                  <span className={view.id === activeViewId ? "truncate font-semibold" : "truncate font-medium"}>
                    {view.name}
                  </span>
                </Link>
                <button
                  type="button"
                  className={[
                    "absolute right-1 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded text-[#6d7788] hover:bg-[#e5eaf2] hover:text-[#2f3540]",
                    openMenuViewId === view.id ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  ].join(" ")}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setOpenMenuViewId((current) => (current === view.id ? null : view.id));
                  }}
                  aria-label={`Open ${view.name} view menu`}
                >
                  <LuEllipsis className="h-4 w-4" />
                </button>
                {openMenuViewId === view.id ? (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-8 z-40 w-52 rounded-md border border-[#d7dbe3] bg-white p-1.5 shadow-lg"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center rounded px-2 py-2 text-left text-[12px] text-[#2f3540] hover:bg-[#f2f5fa]"
                      onClick={() => {
                        setOpenMenuViewId(null);
                      }}
                    >
                      <LuStar className="mr-2 h-4 w-4" />
                      <span>Add to 'My favorites'</span>
                    </button>
                    <div className="my-1 h-px bg-[#e4e7ec]" />
                    <button
                      type="button"
                      className="flex w-full items-center rounded px-2 py-2 text-left text-[12px] text-[#2f3540] hover:bg-[#f2f5fa]"
                      onClick={() => {
                        setRenameViewId(view.id);
                        setRenameValue(view.name);
                      }}
                    >
                      <LuPencil className="mr-2 h-4 w-4" />
                      <span>Rename view</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center rounded px-2 py-2 text-left text-[12px] text-[#2f3540] hover:bg-[#f2f5fa]"
                      onClick={() => duplicateView.mutate({ viewId: view.id })}
                      disabled={duplicateView.isPending}
                    >
                      <LuCopy className="mr-2 h-4 w-4" />
                      <span>Duplicate view</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center rounded px-2 py-2 text-left text-[12px] text-[#d14343] disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#fff1f1]"
                      onClick={() => deleteView.mutate({ viewId: view.id })}
                      disabled={!canDeleteView || deleteView.isPending}
                    >
                      <LuTrash2 className="mr-2 h-4 w-4" />
                      <span>Delete view</span>
                    </button>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
      {isCreateViewModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[360px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Create view</h2>
            <input
              type="text"
              value={newViewName}
              onChange={(event) => setNewViewName(event.target.value)}
              className="mt-3 h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
              placeholder="View name"
              autoFocus
            />
            {createView.error ? (
              <p className="mt-2 text-[11px] text-red-600">{createView.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => {
                  setIsCreateViewModalOpen(false);
                  setNewViewName("");
                }}
                disabled={createView.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => createView.mutate({ tableId, name: newViewName.trim() })}
                disabled={createView.isPending || newViewName.trim().length === 0}
              >
                {createView.isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {renameViewId ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[360px] rounded-lg border border-[#d7dbe3] bg-white p-4 shadow-xl">
            <h2 className="text-[15px] font-semibold text-[#323844]">Rename view</h2>
            <input
              type="text"
              value={renameValue}
              onChange={(event) => setRenameValue(event.target.value)}
              className="mt-3 h-9 w-full rounded-md border border-[#d0d5de] bg-background px-3 text-[12px] text-[#334155] outline-none"
              placeholder="View name"
            />
            {renameView.error ? (
              <p className="mt-2 text-[11px] text-red-600">{renameView.error.message}</p>
            ) : null}
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-white px-3 py-1.5 text-[12px] text-[#3d4654]"
                onClick={() => setRenameViewId(null)}
                disabled={renameView.isPending}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-[#d3d8e1] bg-[#f7f8fb] px-3 py-1.5 text-[12px] text-[#3d4654] disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => renameView.mutate({ viewId: renameViewId, name: renameValue.trim() })}
                disabled={renameView.isPending || renameValue.trim().length === 0}
              >
                {renameView.isPending ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
