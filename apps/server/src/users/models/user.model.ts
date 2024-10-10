import "reflect-metadata";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NoteMarker } from "./note-marker.model";
import { Location } from "src/markers/models/location.model";

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field({
    description: "Identifies the date and time when the object was created.",
  })
  createdAt: Date;

  @Field({
    description:
      "Identifies the date and time when the object was last updated.",
  })
  updatedAt: Date;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => [Location], { nullable: true })
  foundMarkers?: number[] | null;

  @Field(() => Boolean)
  hideFound: boolean;

  @Field(() => [NoteMarker], { nullable: true })
  noteMarkers?: NoteMarker[];
}
