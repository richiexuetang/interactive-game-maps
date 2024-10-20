import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Group } from "../../common/models/markers/group.model";
import { Map } from "../../maps/models/map.model";

@ObjectType()
export class Game extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => [Map], { nullable: true })
  maps?: Map[] | null;

  @Field(() => [Group], { nullable: true })
  groups?: Group[] | null;

  @Field(() => Date, { nullable: true })
  releaseDate?: Date | null;
}
