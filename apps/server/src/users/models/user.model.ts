import "reflect-metadata";
import { ObjectType, Field } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NoteMarker } from "./note-marker.model";
import { Location } from "src/common/models/markers/location.model";
import { Map } from "src/maps/models/map.model";

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
  foundMarkers?: Location[] | null;

  @Field(() => Boolean)
  hideFound: boolean;

  @Field(() => [NoteMarker], { nullable: true })
  noteMarkers?: NoteMarker[];

  @Field(() => [Map], { nullable: true })
  favoriteMaps?: Map[];
}
