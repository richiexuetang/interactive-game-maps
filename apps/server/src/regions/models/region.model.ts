import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class Region extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  minZoom: number;

  @Field()
  maxZoom: number;

  @Field()
  defaultZoom: number;

  @Field()
  tilePath: string;

  @Field()
  gameSlug: string;

  // @Field()
  // center: number[];
}
