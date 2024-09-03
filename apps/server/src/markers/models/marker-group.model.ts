import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";
import { BaseModel } from "../../common/models/base.model";
import { Game } from "src/games/models/game.model";
import { MarkerCategory } from "./marker-category.model";

@ObjectType()
export class MarkerGroup extends BaseModel {
  @Field()
  title: string;

  @Field(() => Game)
  game?: Game | null;

  @Field(() => String)
  gameSlug?: string | null;

  @Field(() => [MarkerCategory])
  categories?: MarkerCategory[] | null;
}
