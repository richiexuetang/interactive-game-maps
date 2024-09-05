import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { MarkerLocation } from "./marker-location.model";

@ObjectType()
export class MarkerCategory extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  icon?: string | null;

  @Field(() => String, { nullable: true })
  template?: string | null;

  @Field(() => String, { nullable: true })
  info?: string | null;

  @Field(() => [MarkerLocation], { nullable: true })
  markerLocations?: MarkerLocation[] | null;
}
