import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export function TablePanelLoading() {
  return (
    <section className="flex min-h-0 flex-1 items-center justify-center p-6">
      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <CircleNotch size={18} className="animate-spin" />
        <span>Loading...</span>
      </div>
    </section>
  );
}
