import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { Group } from "src/markers/models/group.model";
import { Map } from "src/regions/models/map.model";

@ObjectType()
export class Game extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  minZoom: number;

  @Field()
  maxZoom: number;

  @Field()
  zoom: number;

  @Field(() => [Number])
  center: number[];

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => [Map], { nullable: true })
  maps?: Map[] | null;

  @Field(() => [Group], { nullable: true })
  groups?: Group[] | null;
}
