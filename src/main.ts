import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Filtre global
  app.useGlobalFilters(new AllExceptionsFilter());

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map((err) => {
          const constraints = err.constraints
            ? Object.values(err.constraints)
            : [];
          return `${err.property} - ${constraints.join(', ')}`;
        });

        return {
          statusCode: 400,
          message: messages,
          error: 'Bad Request',
        };
      },
    }),
  );

  await app.listen(3000);
}
void bootstrap();
