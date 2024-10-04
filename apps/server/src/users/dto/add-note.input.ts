import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AddNoteInput {
  @Field()
  email: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  mapSlug: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;
}
