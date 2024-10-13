import { Module } from "@nestjs/common";
import { ChecklistGuidesResolver } from "./checklist-guides.resolver";

@Module({
  imports: [],
  providers: [ChecklistGuidesResolver],
})
export class ChecklistGuidesModule {}
