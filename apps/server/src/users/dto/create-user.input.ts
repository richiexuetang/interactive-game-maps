import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field({ nullable: true })
  username?: string;
}
