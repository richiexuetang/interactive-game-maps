import { Controller, Get, Param, Post } from '@nestjs/common';
import { MapsService } from './maps.service';
import { Map } from '@prisma/client';

@Controller('maps')
export class MapsController {
    constructor(private mapsService: MapsService) {}

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Map[]> {
        return this.mapsService.getGameMaps(id);
    }
}
