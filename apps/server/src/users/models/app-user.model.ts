import "reflect-metadata";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NoteMarker } from "./note-marker.model";

@ObjectType()
export class AppUser {
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
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  photoUrl?: string;

  @Field(() => [Int], { nullable: true })
  foundLocations?: number[] | null;

  @Field(() => Boolean)
  hideFound: boolean;

  @Field(() => [NoteMarker], { nullable: true })
  noteMarkers?: NoteMarker[];
}
