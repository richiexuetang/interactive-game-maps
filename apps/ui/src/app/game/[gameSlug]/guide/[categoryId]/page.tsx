import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";

export default async function RegionPage({
  params,
}: {
  params: { categoryId: string; gameSlug: string };
}) {
  return (
    <div className={cn(params.gameSlug, "bg-bodyBackground h-[100vh]")}>
      <MainNav />
      {params.categoryId}
    </div>
  );
}
