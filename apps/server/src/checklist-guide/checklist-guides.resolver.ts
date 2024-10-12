import { Args, Query, Resolver } from "@nestjs/graphql";
import { ChecklistGuide } from "./models/checklist-guide.model";
import { PrismaService } from "nestjs-prisma";

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
}
