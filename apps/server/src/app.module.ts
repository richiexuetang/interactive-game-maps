import { GraphQLModule } from "@nestjs/graphql";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "./common/configs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GqlConfigService } from "./gql-config.service";
import { GamesModule } from "./games/games.module";
import { MapsModule } from "./maps/maps.module";
import { MarkersModule } from "./markers/markers.module";
import { AuthModule } from "./auth/auth.module";
import { ChecklistGuidesModule } from "./checklist-guide/checklist-guides.module";
import { PrismaModule } from "./common/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
    }),

    PrismaModule,

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
