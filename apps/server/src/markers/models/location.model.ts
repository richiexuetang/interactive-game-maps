import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Category } from "./category.model";
import { Media } from "./media.model";
import { Map } from "../../regions/models/map.model";

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

  @Field(() => String, { nullable: true })
  regionSlug?: string | null;

  @Field(() => Category, { nullable: true })
  category?: Category | null;

  @Field(() => Number, { nullable: true })
  categoryId?: number | null;

  @Field(() => Map)
  map: Map;

  @Field(() => String)
  mapSlug: string;

  @Field(() => [Media], { nullable: true })
  media?: Media[] | null;
}
