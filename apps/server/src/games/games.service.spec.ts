import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GamesService } from './games.service';
import { Repository } from 'typeorm';

const userArray = [
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
];

const oneGame = {
  gameSlug: 'black-myth',
  gameTitle: 'Black Myth: WuKong',
  thumbnailUrl:
    'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
};

describe('UserService', () => {
  let service: GamesService;
  let repository: Repository<Game>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getRepositoryToken(Game),
          useValue: {
            find: jest.fn().mockResolvedValue(userArray),
            findOneBy: jest.fn().mockResolvedValue(oneGame),
            save: jest.fn().mockResolvedValue(oneGame),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
    repository = module.get<Repository<Game>>(getRepositoryToken(Game));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a game', () => {
      const oneGame = {
        gameSlug: 'black-myth',
        gameTitle: 'Black Myth: WuKong',
        thumbnailUrl:
          'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
      };

      expect(
        service.create({
          gameSlug: 'black-myth',
          gameTitle: 'Black Myth: WuKong',
          thumbnailUrl:
            'https://cdn.mapgenie.io/images/games/black-myth-wukong/preview.jpg',
        }),
      ).resolves.toEqual(oneGame);
    });
  });

  describe('findAll()', () => {
    it('should return an array of games', async () => {
      const users = await service.findAll();
      expect(users).toEqual(userArray);
    });
  });

  describe('findOne()', () => {
    it('should get a single game', () => {
      const repoSpy = jest.spyOn(repository, 'findOneBy');
      expect(service.findOne(1)).resolves.toEqual(oneGame);
      expect(repoSpy).toBeCalledWith({ id: 1 });
    });
  });

  describe('remove()', () => {
    it('should call remove with the passed value', async () => {
      const removeSpy = jest.spyOn(repository, 'delete');
      const retVal = await service.remove('2');
      expect(removeSpy).toBeCalledWith('2');
      expect(retVal).toBeUndefined();
    });
  });
});
