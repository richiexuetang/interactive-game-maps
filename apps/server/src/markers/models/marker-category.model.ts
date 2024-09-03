import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { MarkerGroup } from "./marker-group.model";

@ObjectType()
export class MarkerCategory extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  icon?: string | null;

  @Field(() => String)
  template: string;

  @Field(() => String)
  info: string | null;

  @Field(() => MarkerGroup, { nullable: true })
  markerGroup?: MarkerGroup | null;

  @Field(() => Number, { nullable: true })
  markerGroupId?: number | null;
}
