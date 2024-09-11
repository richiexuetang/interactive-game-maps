import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { MarkerGroup } from "src/markers/models/marker-group.model";
import { Region } from "src/regions/models/region.model";

@ObjectType()
export class Game extends BaseModel {
  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  thumbnailUrl: string;

  @Field(() => String, { nullable: true })
  previewUrl: string | null;

  @Field(() => String, { nullable: true })
  iconUrl: string | null;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => [Region], { nullable: true })
  regions?: Region[] | null;

  @Field(() => [MarkerGroup], { nullable: true })
  groups?: MarkerGroup[] | null;
}
