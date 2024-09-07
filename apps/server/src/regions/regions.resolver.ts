import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Region } from "./models/region.model";
import { RegionOrder } from "./dto/region-order.input";

@Resolver(() => Region)
export class RegionsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Region)
  async regionDetails(@Args("slug") slug: string) {
    return this.prisma.region.findUnique({ where: { slug: slug } });
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
