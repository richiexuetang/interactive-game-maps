import { Controller, Get, Param } from "@nestjs/common";
import { MapsService } from "./maps.service";
import { Map } from "@prisma/client";

@Controller("maps")
export class MapsController {
  constructor(private mapsService: MapsService) {}

  @Get(":id")
  find(@Param("id") id: string): Promise<Map[]> {
    return this.mapsService.getGameMaps(id);
  }

  @Get("/by-slug/:slug")
  findBySlug(@Param("slug") slug: string): Promise<Map> {
    return this.mapsService.getMapBySlug(slug);
  }
}
