import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateNoteInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;
}
