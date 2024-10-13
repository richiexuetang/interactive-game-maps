import { GraphQLModule } from "@nestjs/graphql";
import { Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaModule, loggingMiddleware } from "nestjs-prisma";
import config from "./common/configs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GqlConfigService } from "./gql-config.service";
import { GamesModule } from "./games/games.module";
import { UsersModule } from "./users/users.module";
import { MapsModule } from "./regions/maps.module";
import { MarkersModule } from "./markers/markers.module";
import { AuthModule } from "./auth/auth.module";
import { ChecklistGuidesModule } from "./checklist-guide/checklist-guides.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
    }),

    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger("PrismaMiddleware"),
            logLevel: "log",
          }),
        ],
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),

    ChecklistGuidesModule,
    GamesModule,
    MapsModule,
    // UsersModule,
    MarkersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
