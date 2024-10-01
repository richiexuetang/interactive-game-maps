import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { Map } from "@/__generated__/graphql";
import { MainNav } from "@/components/main-nav";
import { getFontClassName } from "@/lib/font";
import { getMetaData, getMapsByGame } from "@/lib/graphql/api";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const game = await getMetaData(params.slug);

  const { title, description } = game;
  return {
    title: `${title} | Ritcher Map`,
    description,
    openGraph: {
      images: [
        process.env.CDN_BASE_URL + `images/games/${params.slug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-16x16.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-32x32.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-32x32.png`,
        },
      ],
      apple:
        process.env.CDN_BASE_URL +
        `images/games/${params.slug}/apple-touch-icon.png`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/region");
  const regions = await getMapsByGame(params.slug);
  const fontClassName = getFontClassName(params.slug);

  const showRegionMedia = regions.length <= 2;

  console.log("regions", regions, process.env.CDN_BASE_URL);
  return (
    <div className={cn(params.slug, "bg-bodyBackground h-[100vh]")}>
      <MainNav />
      <div className="px-4">
        <div
          className={cn(
            "flex flex-col gap-10 p-8 flex-wrap content-center justify-center",
            fontClassName
          )}
        >
          {showRegionMedia ? (
            <>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "var(--text-font)",
                  color: "var(--accent-color)",
                }}
              >
                {params.slug.replaceAll("-", " ").toUpperCase() + " MAPS"}
              </Typography>
              {regions.map(({ slug, thumbnailUrl, title }: Map) => (
                <Link key={slug} href={`/map/${slug}`}>
                  <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={process.env.CDN_BASE_URL + thumbnailUrl! || ""}
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
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
            </>
          ) : (
            <>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "var(--text-font)",
                  color: "var(--accent-color)",
                }}
              >
                {params.slug.replaceAll("-", " ").toUpperCase() + " MAPS"}
              </Typography>
              <div className="flex gap-10 p-6 flex-wrap content-center justify-center">
                {regions.map(({ slug, title }: Map) => (
                  <Link key={slug} href={`/map/${slug}`}>
                    <Card sx={{ maxWidth: 350 }}>
                      <CardActionArea>
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
                      </CardActionArea>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
