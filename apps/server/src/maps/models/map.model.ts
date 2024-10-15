import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Region as Region } from "./region.model";
import { Location } from "src/common/models/markers/location.model";
import { Game } from "../../games/models/game.model";

@ObjectType()
export class Map extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  gameSlug?: string;

  @Field(() => Game, { nullable: true })
  game?: Game | null;

  @Field(() => Number)
  order: number;

  @Field(() => [Region], { nullable: true })
  regions?: Region[] | null;

  @Field(() => [Location], { nullable: true })
  locations?: Location[] | null;

  @Field()
  minZoom: number;

  @Field()
  maxZoom: number;

  @Field()
  zoom: number;

  @Field(() => [Number])
  center: number[];
}
