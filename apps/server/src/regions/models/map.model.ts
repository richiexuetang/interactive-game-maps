import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { Region as Region } from "./region.model";
import { Location } from "src/markers/models/location.model";

@ObjectType()
export class Map extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  thumbnailUrl?: string | null;

  @Field()
  tilePath: string;

  @Field()
  gameSlug: string;

  @Field(() => Number)
  order: number;

  @Field(() => [Region], { nullable: true })
  regions?: Region[] | null;

  @Field(() => [Location], { nullable: true })
  locations?: Location[] | null;
}
