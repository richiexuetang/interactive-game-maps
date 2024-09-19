import { Args, Query, Resolver } from "@nestjs/graphql";
import { Game } from "./models/game.model";
import { PrismaService } from "nestjs-prisma";

@Resolver(() => Game)
export class GamesResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Game])
  async games() {
    return this.prisma.game.findMany({
      include: { regions: true, groups: true },
    });
  }

  @Query(() => Game)
  async game(@Args("slug") slug: string) {
    return this.prisma.game.findUnique({
      where: { slug },
    });
  }

  @Query(() => Game)
  async fetchGameByRegion(@Args("slug") slug: string) {
    const region = await this.prisma.region.findUnique({
      where: { slug },
      include: { game: true, locations: true },
    });

    const locationsWithCategory = [];
    for (let i = 0; i < region.locations.length; i++) {
      const location = region.locations[i];
      const locationWithCategory = await this.prisma.markerLocation.findUnique({
        where: { id: location.id },
        include: { category: true },
      });
      locationsWithCategory.push(locationWithCategory);
    }

    region.locations = [...locationsWithCategory];
    const regionGame = region.game;
    const game = await this.prisma.game.findUnique({
      where: { slug: regionGame.slug },
      include: { groups: true, regions: true },
    });
    const newRegions = game.regions.filter((region) => region.slug !== slug);
    game.regions = [...newRegions, region];
    const groupsWithCategory = [];
    for (let i = 0; i < game.groups?.length; i++) {
      const groupId = game.groups[i].id;
      const group = await this.prisma.markerGroup.findUnique({
        where: { id: groupId },
        include: { categories: true },
      });
      groupsWithCategory.push(group);
    }
    game.groups = [...groupsWithCategory];
    return game;
  }
}
