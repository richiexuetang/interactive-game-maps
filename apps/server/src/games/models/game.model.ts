import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class Game extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  thumbnailUrl: string;
}
