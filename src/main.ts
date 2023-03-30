import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';
config();
const port = process.env.PORT || 5000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () => {
    console.log(`Conectado al puerto: ${port}`);
  });
}
bootstrap();
