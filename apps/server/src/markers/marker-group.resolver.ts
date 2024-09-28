import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Group } from "./models/group.model";

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Group])
  async getGroupsByGameSlug(@Args("slug") slug: string) {
    return this.prisma.group.findMany({
      where: { gameSlug: slug },
      include: { categories: true },
    });
  }
}
