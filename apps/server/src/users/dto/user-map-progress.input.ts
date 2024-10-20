import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UserMapProgressInput {
  @Field()
  email: string;

  @Field()
  mapSlug: string;
}
