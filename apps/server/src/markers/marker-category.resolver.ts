import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerLocation } from "./models/marker-location.model";
import { MarkerGroup } from "./models/marker-group.model";
import { MarkerCategory } from "./models/marker-category.model";

@Resolver(() => MarkerCategory)
export class MarkerCategoriesResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => MarkerCategory)
  async findCategoryById(@Args("id") id: number) {
    return this.prisma.markerCategory.findUnique({ where: { id: id } });
  }
}
