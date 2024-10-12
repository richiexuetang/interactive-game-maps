import { gql } from "@apollo/client";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import Link from "next/link";
import { Group, Map } from "@/__generated__/graphql";
import { MainNav } from "@/components/main-nav";
import { getFontClassName } from "@/lib/font";
import { getClient } from "@/lib/graphql/apollo-client";
import { FETCH_GAME_MAP_DETAILS } from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { gameSlug: string };
}): Promise<Metadata> {
  const { gameSlug } = params;
  const { data } = await getClient().query({
    query: gql(`
    query GetGames($slug: String!) {
      game(slug: $slug) {
        slug
        title
      }
    }`),
    variables: { slug: gameSlug },
  });
  const game = data.game;

  return {
    title: `${game.title} | Ritcher Map`,
    description: `Explore ${game.title} on Ritcher Map and track all in-game locations.`,
    openGraph: {
      images: [
        process.env.CDN_BASE_URL + `images/games/${gameSlug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-16x16.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-32x32.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-32x32.png`,
        },
      ],
      apple:
        process.env.CDN_BASE_URL +
        `images/games/${params.gameSlug}/apple-touch-icon.png`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: { gameSlug: string };
}) {
  const { data } = await getClient().query({
    query: FETCH_GAME_MAP_DETAILS,
    variables: { slug: params.gameSlug },
  });

  const { data: checklistData } = await getClient().query({
    query: gql`
      query Checklists($slug: String!) {
        checklists(slug: $slug) {
          title
        }
      }
    `,
    variables: { slug: params.gameSlug },
  });

  const game = data.game;
  const fontClassName = getFontClassName(params.gameSlug);

  const showRegionMedia = game.maps.length <= 2;

  return (
    <div className={cn(params.gameSlug, "h-[100vh] !bg-bodyBackground")}>
      <MainNav />
      <div className="flex flex-col !bg-bodyBackground">
        <div className="py-8">
          <h2 className="text-center font-text text-accent text-xl">
            {game.title.toUpperCase() + " MAPS"}
          </h2>
        </div>
        <div
          className={cn(
            "flex gap-10 p-8 flex-wrap content-center justify-center",
            `flex-${showRegionMedia ? "col" : "row"}`,
            fontClassName
          )}
        >
          {game.maps.map(({ slug, title }: Map) => (
            <Link key={slug} href={`/game/${game.slug}/map/${slug}`}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  {showRegionMedia ? (
                    <>
                      <CardMedia
                        component="img"
                        height="140"
                        image={
                          process.env.CDN_BASE_URL +
                            `images/games/${game.slug}/${slug}.png` || ""
                        }
                        alt={title}
                      />
                      <CardContent
                        sx={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            textDecoration: "none",
                            fontFamily: "var(--body-font-family)",
                            color: "var(--accent-color)",
                          }}
                        >
                          {title}
                        </Typography>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent
                      sx={{
                        justifyContent: "center",
                        alignContent: "center",
                        display: "flex",
                        width: "325px",
                      }}
                    >
                      <h4 className="font-body text-accent overflow-ellipsis">
                        {title}
                      </h4>
                    </CardContent>
                  )}
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </div>
        <div className="px-4">
          <div
            className={cn(
              "flex flex-col gap-10 p-8 flex-wrap content-center justify-center",
              fontClassName
            )}
          >
            <h2 className="text-center font-text text-accent text-xl">
              {game.title.toUpperCase() + " CHECKLIST"}
            </h2>
            <div className="flex gap-6 p-6 flex-wrap content-center justify-center">
              {game.groups.map(({ categories }: Group) =>
                categories?.map(({ title, isChecklist, id }) => {
                  if (!isChecklist) return;

                  return (
                    <Link key={title} href={`/game/${game.slug}/guide/${id}`}>
                      <Card sx={{ minWidth: 350 }}>
                        <CardActionArea>
                          <CardContent
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <h4 className="font-body text-accent">{title}</h4>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
