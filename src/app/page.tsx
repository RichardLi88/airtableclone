import { BaseCards } from "~/components/BaseCards";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/server";

export default async function Home() {
  const bases = await api.base.getAll();

  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <h1 className="text-2xl font-semibold tracking-tight">Bases</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {bases.length} {bases.length === 1 ? "base" : "bases"} in your workspace
        </p>

        {bases.length === 0 ? (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>No bases yet</CardTitle>
              <CardDescription>Create your first base to get started.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <BaseCards bases={bases} />
        )}
      </div>
    </main>
  );
}
