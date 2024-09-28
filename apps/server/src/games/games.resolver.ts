import { Args, Query, Resolver } from "@nestjs/graphql";
import { Game } from "./models/game.model";
import { PrismaService } from "nestjs-prisma";

@Resolver(() => Game)
export class GamesResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Game])
  async games() {
    return this.prisma.game.findMany({
      include: { maps: true, groups: true },
    });
  }

  @Query(() => Game)
  async game(@Args("slug") slug: string) {
    return this.prisma.game.findUnique({
      where: { slug },
    });
  }

  @Query(() => Game)
  async fetchGameByMap(@Args("slug") slug: string) {
    const map = await this.prisma.map.findUnique({
      where: { slug },
      include: { game: true, locations: true },
    });

    const locationsWithCategory = [];
    for (let i = 0; i < map.locations.length; i++) {
      const location = map.locations[i];
      const locationWithCategory = await this.prisma.location.findUnique({
        where: { id: location.id },
        include: { category: true },
      });
      locationsWithCategory.push(locationWithCategory);
    }

    map.locations = [...locationsWithCategory];
    const regionGame = map.game;
    const game = await this.prisma.game.findUnique({
      where: { slug: regionGame.slug },
      include: { groups: true, maps: true },
    });
    const newRegions = game.maps.filter((region) => region.slug !== slug);
    game.maps = [...newRegions, map];
    const groupsWithCategory = [];
    for (let i = 0; i < game.groups?.length; i++) {
      const groupId = game.groups[i].id;
      const group = await this.prisma.group.findUnique({
        where: { id: groupId },
        include: { categories: true },
      });
      groupsWithCategory.push(group);
    }
    game.groups = [...groupsWithCategory];
    return game;
  }
}
