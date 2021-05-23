import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [
    // GraphQLModule.forRoot({}),
    UsersModule,
    CatsModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
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
