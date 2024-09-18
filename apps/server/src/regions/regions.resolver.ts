import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Region } from "./models/region.model";
import { RegionOrder } from "./dto/region-order.input";
import { SubRegion } from "./models/sub-region.model";

@Resolver(() => Region)
export class RegionsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [SubRegion])
  async getSubRegionsByRegion(@Args("slug") slug: string) {
    const subRegions: SubRegion[] = await this.prisma
      .$queryRaw`SELECT ST_AsGeoJSON(coordinates) as coordinates, title, "regionSlug" FROM "SubRegion" WHERE "regionSlug"::text = ${slug}`;

    const result = [];
    for (let i = 0; i < subRegions?.length; i++) {
      const coords = JSON.parse(subRegions[i].coordinates as any);
      result.push({ ...subRegions[i], coordinates: coords.coordinates });
    }
    return result;
  }

  @Query(() => Region)
  async regionDetails(@Args("slug") slug: string) {
    return this.prisma.region.findUnique({
      where: { slug: slug },
      include: { subRegions: true },
    });
  }

  @Query(() => [Region])
  async findRegionsByGame(
    @Args("slug") slug: string,
    @Args({
      name: "orderBy",
      type: () => RegionOrder,
      nullable: true,
    })
    orderBy: RegionOrder
  ) {
    return this.prisma.region.findMany({
      where: {
        gameSlug: slug,
      },
      orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
    });
  }
}
