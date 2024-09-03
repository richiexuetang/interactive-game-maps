import { IsNotEmpty } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateMarkerGroupInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  gameSlug: string;
}
