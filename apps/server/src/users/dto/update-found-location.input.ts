import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateFoundLocationInput {
  @Field()
  email: string;

  @Field()
  location: number;
}
