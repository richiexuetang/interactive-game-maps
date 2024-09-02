import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { Game } from 'src/games/models/game.model';

@ObjectType()
export class Map extends BaseModel {
  @Field()
  mapSlug: string;

  @Field()
  mapTitle: string;

  @Field()
  minZoom: number;

  @Field()
  maxZoom: number;

  @Field()
  defaultZoom: number;

  @Field()
  tilePath: string;

  @Field()
  gameId?: String;
}
