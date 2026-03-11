"use client";

import * as React from "react";
import { List } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

type SidebarContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  children,
  defaultOpen = true,
}: React.PropsWithChildren<{ defaultOpen?: boolean }>) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggle,
    }),
    [isOpen, toggle],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

function Sidebar({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const { isOpen } = useSidebar();

  return (
    <aside
      data-state={isOpen ? "expanded" : "collapsed"}
      className={cn(
        "group/sidebar bg-sidebar text-sidebar-foreground border-sidebar-border min-h-screen shrink-0 border-r transition-[width] duration-200",
        isOpen ? "w-56" : "w-14",
        className,
      )}
    >
      {children}
    </aside>
  );
}

function SidebarContent({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex h-full flex-col gap-2 p-2", className)}>{children}</div>;
}

function SidebarMenu({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <nav className={cn("flex flex-col gap-1", className)}>{children}</nav>;
}

function SidebarMenuItem({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("w-full", className)}>{children}</div>;
}

function SidebarMenuButton({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-sidebar-ring inline-flex h-8 w-full items-center gap-2 rounded-md px-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SidebarTrigger({ className }: { className?: string }) {
  const { toggle } = useSidebar();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className={cn("shrink-0", className)}
      onClick={toggle}
      aria-label="Toggle sidebar"
    >
      <List className="size-4" />
    </Button>
  );
}

function SidebarInset({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("min-h-screen flex-1", className)}>{children}</div>;
}

export {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
};
