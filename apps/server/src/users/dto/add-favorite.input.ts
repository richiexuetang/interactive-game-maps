import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AddFavoriteInput {
  @Field()
  email: string;

  @Field()
  gameSlug: string;
}
