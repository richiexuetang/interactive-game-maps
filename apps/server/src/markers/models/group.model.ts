import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Category } from "./category.model";
import { Game } from "../../games/models/game.model";

@ObjectType()
export class Group extends BaseModel {
  @Field()
  title: string;

  @Field(() => Game, { nullable: true })
  game?: Game | null;

  @Field(() => String, { nullable: true })
  gameSlug?: string | null;

  @Field(() => [Category], { nullable: true })
  categories?: [Category] | null;
}
