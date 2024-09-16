import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateTrackingCategoryInput {
  @Field()
  email: string;

  @Field()
  categoryId: number;
}
