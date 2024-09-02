import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GameIdInput {
  @Field()
  gameId: string;
}
