import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerCategory } from "./models/marker-category.model";
import { CreateMarkerCategoryInput } from "./dto/create-marker-category.input";

@Resolver(() => MarkerCategory)
export class MarkerCategoriesResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => MarkerCategory)
  async createMarkerCategory(@Args("data") data: CreateMarkerCategoryInput) {
    const newCategory = this.prisma.markerCategory.create({
      data,
    });
    return newCategory;
  }
}
