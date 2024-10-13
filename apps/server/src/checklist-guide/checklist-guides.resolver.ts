import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { ChecklistGuide } from "./models/checklist-guide.model";
import { PrismaService } from "../common/prisma.service";

@Resolver(() => ChecklistGuide)
export class ChecklistGuidesResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [ChecklistGuide])
  async checklists(@Args("slug") slug: string) {
    return this.prisma.checklistGuide.findMany({
      where: { gameSlug: slug },
      include: {
        categories: true,
      },
    });
  }

  @Query(() => ChecklistGuide)
  async checklist(@Args("id", { type: () => Int }) id: number) {
    return this.prisma.checklistGuide.findUnique({
      where: { id },
      include: {
        categories: {
          include: { locations: { include: { category: true, map: true } } },
        },
      },
    });
  }
}
