import "reflect-metadata";
import { ObjectType, Field } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";

@ObjectType()
export class NoteMarker extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  regionSlug: string;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;
}
