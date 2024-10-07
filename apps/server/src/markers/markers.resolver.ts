import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Category } from "./models/category.model";
import { Location } from "./models/location.model";

@Resolver()
export class MarkersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Category)
  async category(@Args("id") id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { locations: true },
    });
  }

  @Query(() => [Location])
  async locations(@Args("id", { type: () => Int }) id: number) {
    return this.prisma.location.findMany({
      where: { categoryId: id },
      include: { category: true },
    });
  }
}
