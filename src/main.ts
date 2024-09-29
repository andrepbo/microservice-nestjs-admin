import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the HTTP API server
  const app = await NestFactory.create(AppModule);

  // Set the global prefix for the API
  app.setGlobalPrefix('api');

  // Start both the HTTP server
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
