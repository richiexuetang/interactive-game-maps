import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Game extends BaseModel {
  @Field()
  gameSlug: string;

  @Field()
  gameTitle: string;

  @Field()
  thumbnailUrl: string;
}
