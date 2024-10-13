import { gql } from "@apollo/client";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { remark } from "remark";
import html from "remark-html";
import { ChecklistGrid } from "@/components/data-grid/checklist-grid";
import { MainNav } from "@/components/main-nav";
import { getClient } from "@/lib/graphql/apollo-client";
import { cn, titleCase } from "@/lib/utils";

export default async function RegionPage({
  params,
}: {
  params: { id: string; gameSlug: string };
}) {
  const { data } = await getClient().query({
    query: gql`
      query Checklist($id: Int!) {
        checklist(id: $id) {
          title
          categories {
            title
            locations {
              id
              title
              description
              latitude
              longitude
              mapSlug
              map {
                slug
              }
              category {
                title
              }
            }
          }
        }
      }
    `,
    variables: { id: Number(params.id) },
  });

  const locations = data.checklist.categories.flatMap(
    (category: any) => category.locations
  );

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
        <Typography>{data.checklist.title}</Typography>
      </Breadcrumbs>
      <div className="bg-bodyBackground p-5">
        <ChecklistGrid locations={processedLocations} />
      </div>
    </div>
  );
}
