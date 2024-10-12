import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { Region as Region } from "./region.model";
import { Location } from "src/markers/models/location.model";
import { Game } from "src/games/models/game.model";
import { Category } from "src/markers/models/category.model";

@ObjectType()
export class Map extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  gameSlug: string;

  @Field(() => Game, { nullable: true })
  game: Game | null;

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
