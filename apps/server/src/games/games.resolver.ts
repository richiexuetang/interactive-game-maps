import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Game } from "./models/game.model";
import { PrismaService } from "nestjs-prisma";
import { GameSlugArgs } from "./args/game-slug.args";
import { CreateGameInput } from "./dto/create-game-input";

@Resolver(() => Game)
export class GamesResolver
{
    constructor(
        private prisma: PrismaService,
      ) {}
    
  @Mutation(() => Game)
  async createGame(
    @Args('data') data: CreateGameInput,
  ) {
    const newGame = this.prisma.game.create({
      data
    });
    return newGame;
  }

  @Query(() => [Game])
  async games() {
    return this.prisma.game.findMany({});
  }
}