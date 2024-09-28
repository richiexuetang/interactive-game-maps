import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Map } from "./models/map.model";
import { Region } from "./models/region.model";
import { MapOrder } from "./dto/map-order.input";

@Resolver(() => Map)
export class MapsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Region])
  async getSubRegionsByRegion(@Args("slug") slug: string) {
    const subRegions: Region[] = await this.prisma
      .$queryRaw`SELECT ST_AsGeoJSON(coordinates) as coordinates, title, "regionSlug" FROM "SubRegion" WHERE "regionSlug"::text = ${slug}`;

    const result = [];
    for (let i = 0; i < subRegions?.length; i++) {
      const coords = JSON.parse(subRegions[i].coordinates as any);
      result.push({ ...subRegions[i], coordinates: coords.coordinates });
    }
    return result;
  }

  @Query(() => Map)
  async regionDetails(@Args("slug") slug: string) {
    return this.prisma.map.findUnique({
      where: { slug: slug },
      include: { regions: true },
    });
  }

  @Query(() => [Map])
  async findRegionsByGame(
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
