import { Module } from '@nestjs/common';
import { MapsResolver } from './maps.resolver';
import { MapsService } from './maps.service';
import { MapsController } from './maps.controller';

@Module({
  imports: [],
  providers: [MapsResolver, MapsService],
  controllers: [MapsController]
})
export class MapsModule {}
