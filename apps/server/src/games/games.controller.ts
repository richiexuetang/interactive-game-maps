import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.entity';
import { GamesService } from './games.service';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Game | null> {
    return this.gamesService.findOne(id);
  }

  @Put()
  update(@Body() updateGameDto: UpdateGameDto): Promise<Game | null> {
    return this.gamesService.update(updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gamesService.remove(id);
  }
}
