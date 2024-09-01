import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/create-game.dto';

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
    return this.gameRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.gameRepository.delete(id);
  }
}
