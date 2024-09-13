import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class SubRegion extends BaseModel {
  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => String)
  name: number;

  @Field(() => Number, { nullable: true })
  parentRegionId: number | null;
}
