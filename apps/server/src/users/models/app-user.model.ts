import "reflect-metadata";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { BaseModel } from "../../common/models/base.model";

@ObjectType()
export class AppUser extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => [Int], { nullable: true })
  foundLocations?: number[] | null;
}
