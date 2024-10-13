import { Test, TestingModule } from "@nestjs/testing";
import { MarkersResolver } from "./markers.resolver";
import { PrismaService } from "../common/prisma.service";

describe("MarkersResolver", () => {
  let resolver: MarkersResolver;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarkersResolver,
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
    resolver = module.get<MarkersResolver>(MarkersResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
