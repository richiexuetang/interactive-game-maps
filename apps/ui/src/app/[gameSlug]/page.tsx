import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { ChecklistGuide, getSdk, Map } from "@/generated/graphql";
import { getClient } from "@/lib/getClient";
import { client } from "@/lib/getClient";
import { getFontClassName } from "@/lib/ui/font";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { gameSlug: string };
}): Promise<Metadata> {
  const { gameSlug } = params;
  const sdk = getClient();
  const { game } = await sdk.GetGames({ slug: gameSlug });

  return {
    title: `${game.title} | Ritcher Map`,
    description: `Explore ${game.title} on Ritcher Map and track all in-game locations.`,
    openGraph: {
      images: [
        process.env.NEXT_PUBLIC_CDN_BASE_URL +
          `images/games/${gameSlug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.NEXT_PUBLIC_CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-16x16.png`,
          url:
            process.env.NEXT_PUBLIC_CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.NEXT_PUBLIC_CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-32x32.png`,
          url:
            process.env.NEXT_PUBLIC_CDN_BASE_URL +
            `images/games/${gameSlug}/favicon-32x32.png`,
        },
      ],
      apple:
        process.env.NEXT_PUBLIC_CDN_BASE_URL +
        `images/games/${params.gameSlug}/apple-touch-icon.png`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: { gameSlug: string };
}) {
  const sdk = getSdk(client);
  const { game } = await sdk.FetchGameByMap({
    slug: params.gameSlug,
  });
  const { checklists } = await sdk.Checklists({ slug: params.gameSlug });

  const fontClassName = getFontClassName(params.gameSlug);

  if (!game?.maps) return null;

  const showRegionMedia = game.maps.length <= 2;

  return (
    <div className={cn(params.gameSlug, "h-[100vh] !bg-bodyBackground")}>
      <MainNav />
      <div className="flex flex-col !bg-bodyBackground">
        <div className="py-8">
          <Typography className="text-center !font-text text-accent text-xl">
            {game.title.toUpperCase() + " MAPS"}
          </Typography>
        </div>
        <div
          className={cn(
            "flex gap-10 p-8 flex-wrap content-center justify-center",
            `flex-${showRegionMedia ? "col" : "row"}`,
            fontClassName
          )}
        >
          {game.maps.map(({ slug, title }: Partial<Map>) => (
            <Link key={slug} href={`/${game.slug}/map/${slug}`}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  {showRegionMedia ? (
                    <>
                      <CardMedia
                        component="img"
                        height="140"
                        image={
                          process.env.NEXT_PUBLIC_CDN_BASE_URL +
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
                      <Typography className="!font-body text-accent overflow-ellipsis">
                        {title}
                      </Typography>
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
            <Typography className="text-center !font-text text-accent text-xl">
              {game.title.toUpperCase() + " CHECKLIST"}
            </Typography>
            <div className="flex gap-6 p-6 flex-wrap content-center justify-center">
              {checklists?.map(({ title, id }: Partial<ChecklistGuide>) => (
                <Link key={title} href={`/${game.slug}/guide/${id}`}>
                  <Card sx={{ minWidth: 350 }}>
                    <CardActionArea>
                      <CardContent
                        sx={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography className="!font-body text-accent">
                          {title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
