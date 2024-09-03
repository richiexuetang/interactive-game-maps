import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { MarkerGroup } from "./models/marker-group.model";
import { CreateMarkerGroupInput } from "./dto/create-marker-group.input";

@Resolver(() => MarkerGroup)
export class MarkerGroupsResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => MarkerGroup)
  async createMarkerGroup(@Args("data") data: CreateMarkerGroupInput) {
    const newGroup = this.prisma.markerGroup.create({
      data: {
        title: data.title,
      },
    });
    return newGroup;
  }
}
