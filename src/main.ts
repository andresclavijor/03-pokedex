import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  console.log("PORT",process.env.PORT);
  console.log("MONGODB",process.env.MONGODB);

  await app.listen(process.env.PORT);
  console.log(`App running 🚀 on PORT: ${process.env.PORT}`);
}
bootstrap();
