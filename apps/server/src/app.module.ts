import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import * as path from 'path';
import { MapsModule } from './maps/maps.module';

@Module({
  imports: [
    GamesModule,
    MapsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgrespw',
      database: 'interactive-map',
      synchronize: false,
      logging: true,
      entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
      migrations: [path.join(__dirname, '**/migrations/*{.ts,.js}')],
      subscribers: [],
    }),
  ],
})
export class AppModule {}
