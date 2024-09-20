import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { SubRegion } from "./sub-region.model";
import { MarkerLocation } from "src/markers/models/marker-location.model";

@ObjectType()
export class Region extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  tilePath: string;

  @Field()
  gameSlug: string;

  @Field(() => Number)
  order: number;

  @Field(() => [SubRegion], { nullable: true })
  subRegions?: SubRegion[] | null;

  @Field(() => [MarkerLocation], { nullable: true })
  locations?: MarkerLocation[] | null;
}
