import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
    controllers:[
        CatsController
    ],
    providers: [
        {
            provide: CatsService,
            useClass: CatsService
        },
        CatsResolver
    ],
    exports: [
        // CatsService
    ]
})
export class CatsModule {}
