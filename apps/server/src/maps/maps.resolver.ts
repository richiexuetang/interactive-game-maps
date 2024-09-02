import { Query, Resolver } from "@nestjs/graphql";
import { Map } from "./models/map.model";
import { PrismaService } from "nestjs-prisma";

@Resolver(() => Map)
export class MapsResolver {
    constructor(private prisma: PrismaService) {}

    @Query(() => [Map])
    async maps() {
    return this.prisma.map.findMany({});
  }
}