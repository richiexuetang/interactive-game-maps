import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerLocation } from "./models/marker-location.model";

@Resolver(() => MarkerLocation)
export class MarkerLocationsResolver {
  constructor(private prisma: PrismaService) {}

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
