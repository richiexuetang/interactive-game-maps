import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Map } from './map.entity';
import { MapsService } from './maps.service';
import { MapsController } from './maps.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Map])],
  providers: [MapsService],
  controllers: [MapsController],
})
export class MapsModule {}
