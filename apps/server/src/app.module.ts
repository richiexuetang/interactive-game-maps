import { GraphQLModule } from "@nestjs/graphql";
import { Logger, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule, loggingMiddleware } from "nestjs-prisma";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";
import config from "./common/configs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GqlConfigService } from "./gql-config.service";
import { GamesModule } from "./games/games.module";

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
    PostsModule,
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
