import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Region } from "src/regions/models/region.model";
import { MarkerCategory } from "./marker-category.model";
import { Media } from "./media.model";

@ObjectType()
export class MarkerLocation extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => String, { nullable: true })
  subRegionSlug?: string | null;

  @Field(() => MarkerCategory, { nullable: true })
  category?: MarkerCategory | null;

  @Field(() => Number, { nullable: true })
  categoryId?: number | null;

  @Field(() => Region, { nullable: true })
  region?: Region | null;

  @Field(() => String)
  regionSlug: string;

  @Field(() => [Media], { nullable: true })
  media?: Media[] | null;
}
