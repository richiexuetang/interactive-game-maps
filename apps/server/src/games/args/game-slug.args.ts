import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class GameSlugArgs {
  @Field()
  @IsNotEmpty()
  gameSlug: string;
}