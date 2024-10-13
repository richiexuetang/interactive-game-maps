import { Test, TestingModule } from "@nestjs/testing";
import { MapsResolver } from "./maps.resolver";
import { PrismaService } from "../common/prisma.service";

const mapArray = [
  {
    id: 1,
    slug: "Map 1",
    title: "Description 1",
    order: 1,
    minZoom: 1,
    maxZoom: 2,
    zoom: 1,
    center: [1, 1],
  },
];

const oneMap = mapArray[0];

describe("MapsResolver", () => {
  let resolver: MapsResolver;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MapsResolver,
        {
          provide: PrismaService,
          useValue: {
            map: {
              findMany: jest.fn().mockResolvedValue(mapArray),
              findUnique: jest.fn().mockResolvedValue(oneMap),
              findFirst: jest.fn().mockResolvedValue(oneMap),
              create: jest.fn().mockReturnValue(oneMap),
              save: jest.fn(),
              update: jest.fn().mockResolvedValue(oneMap),
              delete: jest.fn().mockResolvedValue(oneMap),
            },
          },
        },
      ],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<MapsResolver>(MapsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
