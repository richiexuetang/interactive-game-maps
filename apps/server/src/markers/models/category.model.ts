import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Location } from "./location.model";

@ObjectType()
export class Category extends BaseModel {
  @Field()
  title: string;

  @Field(() => String)
  icon: string;

  @Field(() => String, { nullable: true })
  info?: string | null;

  @Field(() => [Location], { nullable: true })
  locations?: Location[] | null;

  @Field(() => Boolean)
  isChecklist: boolean;

  @Field()
  defaultHidden?: boolean;
}