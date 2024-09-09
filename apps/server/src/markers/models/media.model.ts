import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Region } from "src/regions/models/region.model";
import { MarkerCategory } from "./marker-category.model";
import { MarkerLocation } from "./marker-location.model";

@ObjectType()
export class Media extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  fileName?: string | null;

  @Field(() => String, { nullable: true })
  url?: string | null;

  @Field(() => String, { nullable: true })
  type?: string | null;

  @Field(() => String, { nullable: true })
  mimeType?: string | null;

  @Field(() => MarkerLocation, { nullable: true })
  markerLocation?: Region | null;

  @Field(() => Number, { nullable: true })
  markerLocationId?: number | null;
}
