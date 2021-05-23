import { Controller, Get, Post, Req, Param, Body, Query } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get('ab*cd')
    findWildcard(@Req() request: Request): string {
        return 'WildCard';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }

}
