import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      validateCustomDecorators: true,
    }),
  );
  const { httpAdapter } = app.get(HttpAdapterHost);
  // TODO: Standardize error response body
  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter, {
      P2025: { statusCode: 404, errorMessage: 'Resource not found' },
      P2002: { statusCode: 409, errorMessage: 'Duplicate resource' },
      P2003: { statusCode: 422, errorMessage: 'Invalid reference' },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Work API')
    .setDescription('Manage Departments and Employees')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
