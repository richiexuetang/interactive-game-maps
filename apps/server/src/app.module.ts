import { GraphQLModule } from "@nestjs/graphql";
import { Logger, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule, loggingMiddleware } from "nestjs-prisma";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import config from "./common/configs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GqlConfigService } from "./gql-config.service";
import { GamesModule } from "./games/games.module";
import { RegionsModule } from "./regions/regions.module";
import { MarkersModule } from "./markers/marker.module";
import { AppUsersModule } from "./users/app-users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
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

    AuthModule,
    UsersModule,
    GamesModule,
    RegionsModule,
    MarkersModule,
    AppUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
