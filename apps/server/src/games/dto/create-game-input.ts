import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGameInput {
  @Field()
  @IsNotEmpty()
  gameSlug: string;

  @Field()
  @IsNotEmpty()
  gameTitle: string;

  @Field()
  @IsNotEmpty()
  thumbnailUrl: string;  
}