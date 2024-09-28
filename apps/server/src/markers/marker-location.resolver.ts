import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { Location } from "./models/location.model";

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Location])
  async locations(
    @Args({ name: "mapSlug", type: () => String, nullable: true })
    mapSlug: string
  ) {
    return this.prisma.location.findMany({
      include: { category: true, media: true },
      where: {
        mapSlug,
      },
    });
  }
}
