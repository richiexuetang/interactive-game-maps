import { Field, Float, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class SubRegion extends BaseModel {
  @Field(() => [[[Float]]], { nullable: true })
  coordinates?: number[] | null;

  @Field()
  title: string;

  @Field()
  regionSlug: string;
}
