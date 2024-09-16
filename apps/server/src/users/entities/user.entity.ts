import "reflect-metadata";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { BaseModel } from "../../common/models/base.model";

@ObjectType()
export class User extends BaseModel {
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
}
