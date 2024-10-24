import { Field, Float, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";

@ObjectType()
export class Region extends BaseModel {
  @Field(() => [[[Float]]], { nullable: true })
  coordinates?: number[] | null;

  @Field()
  title: string;

  @Field()
  mapSlug: string;

  @Field()
  slug: string;

  @Field(() => Float, { nullable: true })
  centerX: number | null;

  @Field(() => Float, { nullable: true })
  centerY: number | null;
}
