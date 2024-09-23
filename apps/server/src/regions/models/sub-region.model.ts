import { Field, Float, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { MarkerLocation } from "src/markers/models/marker-location.model";

@ObjectType()
export class SubRegion extends BaseModel {
  @Field(() => [[[Float]]], { nullable: true })
  coordinates?: number[] | null;

  @Field()
  title: string;

  @Field()
  regionSlug: string;

  @Field()
  slug: string;

  @Field(() => [MarkerLocation])
  locations?: MarkerLocation[] | null;
}
