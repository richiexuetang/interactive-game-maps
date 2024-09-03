import { Module } from "@nestjs/common";
import { RegionsResolver } from "./regions.resolver";

@Module({
  imports: [],
  providers: [RegionsResolver],
})
export class RegionsModule {}
