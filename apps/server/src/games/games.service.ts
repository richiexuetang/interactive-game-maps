import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  create(createUserDto: CreateGameDto): Promise<Game> {
    const game = new Game();
    game.gameSlug = createUserDto.gameSlug;
    game.gameTitle = createUserDto.gameTitle;
    game.thumbnailUrl = createUserDto.thumbnailUrl;

    return this.gameRepository.save(game);
  }

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  findOne(id: number): Promise<Game | null> {
    return this.gameRepository.findOneBy({ id });
  }

  async update(updateGameDto: UpdateGameDto): Promise<Game | null> {
    const game = await this.gameRepository.findOneBy({ id: updateGameDto.id });
    if (!game) {
      return null;
    }

    game.gameSlug = updateGameDto.gameSlug;
    game.gameTitle = updateGameDto.gameTitle;
    game.thumbnailUrl = updateGameDto.thumbnailUrl;

    return this.gameRepository.save(game);
  }

  async remove(id: string): Promise<void> {
    await this.gameRepository.delete(id);
  }
}
