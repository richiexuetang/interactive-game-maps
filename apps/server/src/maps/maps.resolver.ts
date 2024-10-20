import { Args, Query, Resolver } from "@nestjs/graphql";
import { Map } from "./models/map.model";
import { Region } from "./models/region.model";
import { MapOrder } from "./dto/map-order.input";
import { PrismaService } from "../common/prisma.service";

@Resolver(() => Map)
export class MapsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Map)
  async mapData(@Args("slug") slug: string) {
    const map = await this.prisma.map.findUnique({
      where: { slug },
      include: {
        locations: {
          include: { category: true, media: true },
        },
        regions: true,
        game: {
          include: {
            maps: true,
            groups: {
              include: { categories: { include: { locations: true } } },
            },
          },
        },
      },
    });

    const regions: Region[] = await this.prisma
      .$queryRaw`SELECT ST_AsGeoJSON(coordinates) as coordinates, title, "centerX", "centerY", "mapSlug" FROM "Region" WHERE "mapSlug"::text = ${slug}`;

    const result = [];
    for (let i = 0; i < regions?.length; i++) {
      if (!regions[i].coordinates) {
        result.push({ ...regions[i] });
      } else {
        const coords = JSON.parse(regions[i].coordinates as any);
        result.push({ ...regions[i], coordinates: coords.coordinates });
      }
    }

    map.regions = [...result];
    return map;
  }

  @Query(() => [Map])
  async findMapsByGame(
    @Args("slug") slug: string,
    @Args({
      name: "orderBy",
      type: () => MapOrder,
      nullable: true,
    })
    orderBy: MapOrder
  ) {
    return this.prisma.map.findMany({
      where: {
        gameSlug: slug,
      },
      orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
    });
  }
}
