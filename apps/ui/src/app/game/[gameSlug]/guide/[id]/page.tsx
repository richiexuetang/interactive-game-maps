import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { remark } from "remark";
import html from "remark-html";
import { ChecklistGrid } from "@/components/data-grid/checklist-grid";
import { MainNav } from "@/components/main-nav";
import { getSdk } from "@/generated/graphql";
import { client } from "@/lib/graphqlClient";
import { cn, titleCase } from "@/lib/utils";

export default async function RegionPage({
  params,
}: {
  params: { id: string; gameSlug: string };
}) {
  const sdk = getSdk(client);
  const { checklist } = await sdk.Checklist({ id: Number(params.id) });

  const locations = checklist.categories?.flatMap(
    (category: any) => category.locations
  );

  if (!locations) {
    return null;
  }

  const processedLocations = [];
  for (let i = 0; i < locations.length; i++) {
    const curr = locations[i];
    const processedDesc = await remark()
      .use(html)
      .process(curr?.description ?? "");
    const location = { ...curr, description: processedDesc.toString() };
    processedLocations.push(location);
  }

  return (
    <div className={cn(params.gameSlug, "h-[100vh] !bg-bodyBackground")}>
      <MainNav />
      <Breadcrumbs sx={{ m: 5 }}>
        <Link href="/">Home</Link>
        <Link underline="hover" href={`/game/${params.gameSlug}`}>
          {titleCase(params.gameSlug.replaceAll("-", " "))}
        </Link>
        <Typography>{checklist.title}</Typography>
      </Breadcrumbs>
      <div className="bg-bodyBackground p-5">
        <ChecklistGrid locations={processedLocations} />
      </div>
    </div>
  );
}
