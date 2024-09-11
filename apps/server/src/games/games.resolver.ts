import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Game } from "./models/game.model";
import { PrismaService } from "nestjs-prisma";
import { CreateGameInput } from "./dto/create-game-input";
import { ParseIntPipe } from "@nestjs/common";

@Resolver(() => Game)
export class GamesResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Game)
  async createGame(@Args("data") data: CreateGameInput) {
    const newGame = this.prisma.game.create({
      data,
    });
    return newGame;
  }

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
