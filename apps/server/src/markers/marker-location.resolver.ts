import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerLocation } from "./models/marker-location.model";

@Resolver(() => MarkerLocation)
export class MarkerLocationsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [MarkerLocation])
  async getByRegion(@Args("slug") slug: string) {
    return this.prisma.markerLocation.findMany({ where: { regionSlug: slug } });
  }
}
