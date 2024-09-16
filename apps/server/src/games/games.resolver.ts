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
}
