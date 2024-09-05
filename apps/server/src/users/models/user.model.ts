import "reflect-metadata";
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { BaseModel } from "../../common/models/base.model";
import { Role } from "@prisma/client";
import { MarkerLocation } from "src/markers/models/marker-location.model";

registerEnumType(Role, {
  name: "Role",
  description: "User role",
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [MarkerLocation], { nullable: true })
  locations?: [MarkerLocation] | null;

  @HideField()
  password: string;
}
