import "reflect-metadata";
import { ObjectType, Field } from "@nestjs/graphql";
import { BaseModel } from "../../common/models/base.model";
import { Map } from "src/regions/models/map.model";

@ObjectType()
export class NoteMarker extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  mapSlug: string;

  @Field(() => Map)
  map: Map;

  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;
}
