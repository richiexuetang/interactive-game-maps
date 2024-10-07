import { gql } from "@apollo/client";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { ChecklistGrid } from "@/components/data-grid/checklist-grid";
import { MainNav } from "@/components/main-nav";
import { getClient } from "@/lib/graphql/apollo-client";
import { cn, titleCase } from "@/lib/utils";

export default async function RegionPage({
  params,
}: {
  params: { categoryId: string; gameSlug: string };
}) {
  const { data } = await getClient().query({
    query: gql`
      query Category($id: Float!) {
        category(id: $id) {
          id
          title
          locations {
            id
            title
          }
        }
      }
    `,
    variables: { id: Number(params.categoryId) },
  });

  const { data: locationsData } = await getClient().query({
    query: gql`
      query Locations($id: Int!) {
        locations(id: $id) {
          id
          category {
            title
          }
          description
          title
          latitude
          longitude
          mapSlug
        }
      }
    `,
    variables: { id: Number(params.categoryId) },
  });

  console.log(locationsData.locations);

  return (
    <div className={cn(params.gameSlug, "bg-bodyBackground h-[100vh]")}>
      <MainNav />
      <Breadcrumbs sx={{ m: 5 }}>
        <Link href="/">Home</Link>
        <Link underline="hover" href={`/game/${params.gameSlug}`}>
          {titleCase(params.gameSlug.replaceAll("-", " "))}
        </Link>
        <Typography>{data.category.title}</Typography>
      </Breadcrumbs>
      <Box sx={{ m: 5 }}>
        <ChecklistGrid locations={locationsData.locations} />
      </Box>
    </div>
  );
}
