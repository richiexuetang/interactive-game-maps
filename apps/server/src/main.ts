import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { PrismaClientExceptionFilter } from "nestjs-prisma";
import { AppModule } from "./app.module";
import type { CorsConfig, NestConfig } from "./common/configs/config.interface";

const cookieParser = require("cookie-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");
  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  app.enableShutdownHooks();

  // Prisma Client Exception Filter for unhandled exceptions
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>("nest");
  const corsConfig = configService.get<CorsConfig>("cors");

  // Cors
  if (corsConfig.enabled) {
    app.use(cookieParser());
    app.enableCors({
      origin: [
        "http://localhost:3000", // React Server
        "https://ritcher-map-v2.vercel.app",
      ],
      credentials: true,
    });
  }

  await app.listen(process.env.PORT || nestConfig.port || 5001);
}
bootstrap();
