import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

const createGameDto: CreateGameDto = {
  gameSlug: 'black-myth',
  gameTitle: 'Black Myth: WuKong',
  thumbnailUrl:
    'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
};

describe('UsersController', () => {
  let gamesController: GamesController;
  let gamesService: GamesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [
        GamesService,
        {
          provide: GamesService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((user: CreateGameDto) =>
                Promise.resolve({ id: '1', ...user }),
              ),
            findAll: jest.fn().mockResolvedValue([
              {
                gameSlug: 'black-myth',
                gameTitle: 'Black Myth: WuKong',
                thumbnailUrl:
                  'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
              },
              {
                gameSlug: 'black-myth2',
                gameTitle: 'Black Myth: WuKong2',
                thumbnailUrl:
                  'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.png',
              },
            ]),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                gameSlug: 'black-myth',
                gameTitle: 'Black Myth: WuKong',
                thumbnailUrl:
                  'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
                id,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    gamesController = app.get<GamesController>(GamesController);
    gamesService = app.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(gamesController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a game', () => {
      gamesController.create(createGameDto);
      expect(gamesController.create(createGameDto)).resolves.toEqual({
        id: '1',
        ...createGameDto,
      });
      expect(gamesService.create).toHaveBeenCalledWith(createGameDto);
    });
  });

  describe('findAll()', () => {
    it('should find all games ', () => {
      gamesController.findAll();
      expect(gamesService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a user', () => {
      expect(gamesController.findOne(1)).resolves.toEqual({
        gameSlug: 'black-myth',
        gameTitle: 'Black Myth: WuKong',
        thumbnailUrl:
          'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
        id: 1,
      });
      expect(gamesService.findOne).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the game', () => {
      gamesController.remove('2');
      expect(gamesService.remove).toHaveBeenCalled();
    });
  });
});
