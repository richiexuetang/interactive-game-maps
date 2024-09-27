import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { MarkerLocation } from "./marker-location.model";

@ObjectType()
export class Media extends BaseModel {
  @Field(() => String)
  url: string;

  @Field(() => String)
  type: string;

  @Field(() => MarkerLocation, { nullable: true })
  markerLocation?: MarkerLocation | null;

  @Field(() => Number, { nullable: true })
  markerLocationId?: number | null;
}
