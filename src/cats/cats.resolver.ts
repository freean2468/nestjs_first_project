import { ParseIntPipe } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { Cat } from '../graphql.schema';

@Resolver('Cat')
export class CatsResolver {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Query('cats')
    findAll() : Array<Cat>{
        return this.catsService.findAll();
    }

    @Query('cat')
    findOneById(@Args('id', ParseIntPipe) id: number): number {
        return this.catsService.findOneById(id);
    }
}