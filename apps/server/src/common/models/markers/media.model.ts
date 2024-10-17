import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "../base.model";
import { Location } from "./location.model";

@ObjectType()
export class Media extends BaseModel {
  @Field(() => String)
  url: string;

  @Field(() => String)
  type: string;

  @Field(() => Location, { nullable: true })
  location?: Location | null;

  @Field(() => Number, { nullable: true })
  locationId?: number | null;
}
