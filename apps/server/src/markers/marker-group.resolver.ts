import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerLocation } from "./models/marker-location.model";
import { MarkerGroup } from "./models/marker-group.model";
import { MarkerCategory } from "./models/marker-category.model";

@Resolver(() => MarkerGroup)
export class MarkerGroupsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [MarkerGroup])
  async groups() {
    return this.prisma.markerGroup.findMany({ include: { categories: true } });
  }

  @Query(() => [MarkerGroup])
  async getGroupsByGameSlug(@Args("slug") slug: string) {
    return this.prisma.markerGroup.findMany({
      where: { gameSlug: slug },
      include: { categories: true },
    });
  }

  @Query(() => MarkerCategory)
  async findOne(@Args("id") id: number) {
    return this.prisma.markerGroup.findUnique({ where: { id: id } }).categories;
  }

  @Query(() => [MarkerGroup])
  async findByRegionId(@Args("id") id: number) {
    return this.prisma.markerGroup.findMany({
      where: { regionId: id },
      include: { categories: true },
    });
  }
}
