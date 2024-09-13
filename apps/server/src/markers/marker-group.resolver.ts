import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerGroup } from "./models/marker-group.model";

@Resolver(() => MarkerGroup)
export class MarkerGroupsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [MarkerGroup])
  async getGroupsByGameSlug(@Args("slug") slug: string) {
    return this.prisma.markerGroup.findMany({
      where: { gameSlug: slug },
      include: { categories: true },
    });
  }
}
