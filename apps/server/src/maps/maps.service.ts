import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Map } from "@prisma/client";

@Injectable()
export class MapsService {
    constructor(
        private readonly prisma: PrismaService,
      ) {}
    
    async getGameMaps(payload: string): Promise<Map[]> {
        return await this.prisma.map.findMany({where: {gameId: payload}});
    }

    async getMapBySlug(payload: string): Promise<Map> {
        return await this.prisma.map.findFirst({where: {mapSlug: payload}});
    }
}