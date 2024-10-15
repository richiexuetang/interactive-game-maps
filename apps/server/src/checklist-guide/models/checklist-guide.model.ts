import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { Game } from "src/games/models/game.model";
import { Category } from "src/common/models/markers/category.model";

@ObjectType()
export class ChecklistGuide extends BaseModel {
  @Field()
  gameSlug: string;

  @Field()
  title: string;

  @Field(() => Game)
  game: Game;

  @Field(() => [Category], { nullable: true })
  categories?: Category[] | null;
}
