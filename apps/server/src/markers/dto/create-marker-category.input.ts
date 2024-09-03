import { IsNotEmpty } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateMarkerCategoryInput {
  @Field()
  @IsNotEmpty()
  markerGroupId: number;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  icon: string | null;

  @Field(() => String)
  template?: string | null;

  @Field(() => String)
  info: string | null;
}
