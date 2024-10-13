import { Test, TestingModule } from "@nestjs/testing";
import { GamesResolver } from "./games.resolver";
import { PrismaService } from "../common/prisma.service";

describe("GamesResolver", () => {
  let resolver: GamesResolver;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesResolver,
        {
          provide: PrismaService,
          useValue: {
            game: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              findFirst: jest.fn(),
              create: jest.fn(),
              save: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<GamesResolver>(GamesResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
