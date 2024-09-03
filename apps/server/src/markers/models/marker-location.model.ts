import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";
import { BaseModel } from "../../common/models/base.model";
import { Region } from "src/regions/models/region.model";

@ObjectType()
export class MarkerLocation extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field(() => Region, { nullable: true })
  region?: Region | null;

  @Field(() => String, { nullable: true })
  regionSlug?: string;
}
