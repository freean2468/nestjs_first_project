import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger.middleware';
import { CatsController } from './cats/cats.controller';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      }
    }),
    CatsModule,
    UsersModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(cors(), helmet(), logger)
      .apply(logger)
      .forRoutes(CatsController);
  }
}
