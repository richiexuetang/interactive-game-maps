import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { MarkerCategory } from "./marker-category.model";
import { Game } from "src/games/models/game.model";

@ObjectType()
export class MarkerGroup extends BaseModel {
  @Field()
  title: string;

  @Field(() => Game, { nullable: true })
  game?: Game | null;

  @Field(() => String, { nullable: true })
  gameSlug?: string | null;

  @Field(() => [MarkerCategory], { nullable: true })
  categories?: [MarkerCategory] | null;
}
