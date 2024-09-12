import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerLocation } from "./models/marker-location.model";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

@Resolver(() => MarkerLocation)
export class MarkerLocationsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [MarkerLocation])
  async getLocationByRegion(@Args("slug") slug: string) {
    return this.prisma.markerLocation.findMany({ where: { regionSlug: slug } });
  }

  @Query(() => [MarkerLocation])
  async locations(
    @Args({ name: "regionSlug", type: () => String, nullable: true })
    regionSlug: string
  ) {
    return this.prisma.markerLocation.findMany({
      include: { category: true, media: true },
      where: {
        regionSlug,
      },
    });
  }
}
