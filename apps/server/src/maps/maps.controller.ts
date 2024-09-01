import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Map } from './map.entity';
import { MapsService } from './maps.service';

@Controller('maps')
export class MapsController {
  constructor(private readonly mapsService: MapsService) {}

  @Get()
  findAll(): Promise<Map[]> {
    return this.mapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Map | null> {
    return this.mapsService.findOne(id);
  }
}
