import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../../common/models/base.model";
import { Category } from "./category.model";
import { Media } from "./media.model";
import { Map } from "../../../maps/models/map.model";

@ObjectType()
export class Location extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => Category, { nullable: true })
  category?: Category | null;

  @Field(() => Number, { nullable: true })
  categoryId?: number | null;

  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => Map)
  map: Map;

  @Field(() => String)
  mapSlug: string;

  @Field(() => [Media], { nullable: true })
  media?: Media[] | null;
}
