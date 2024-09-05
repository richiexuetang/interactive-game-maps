import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";
import { BaseModel } from "../../common/models/base.model";
import { Game } from "src/games/models/game.model";
import { MarkerCategory } from "./marker-category.model";
import { Region } from "src/regions/models/region.model";

@ObjectType()
export class MarkerGroup extends BaseModel {
  @Field()
  title: string;

  @Field(() => Game)
  game?: Game;

  @Field(() => String)
  gameSlug?: boolean | null;

  @Field(() => Region, { nullable: true })
  region?: Region;

  @Field(() => Number, { nullable: true })
  regionId?: number | null;

  @Field(() => [MarkerCategory], { nullable: true })
  categories?: [MarkerCategory] | null;
}
