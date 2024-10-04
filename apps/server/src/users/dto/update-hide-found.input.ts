import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateHideFoundInput {
  @Field()
  email: string;

  @Field()
  hide: boolean;
}
