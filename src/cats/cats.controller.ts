import { Controller, Get, Post, Req, Param, Body, Query, HttpException, HttpStatus, UseFilters, ParseIntPipe, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    // @SetMetadata('roles', ['admin'])
    @Roles('admin')
    async create(@Body() createCatDto: CreateCatDto) {
        // return 'This action adds a new cat';
        this.catsService.create(createCatDto);
    }

    @Get()
    // @UseFilters(HttpExceptionFilter)
    // async findAll(): Promise<Cat[]> {
        // throw new HttpException('My Forbidden', HttpStatus.FORBIDDEN);
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error: 'This is a custom message',
        // }, HttpStatus.FORBIDDEN);


        // throw new ForbiddenException();

        // return this.catsService.findAll();
    // }
    findAll(): string{
        return 'This action returns all cats';
    }

    @Get('ab*cd')
    findWildcard(@Req() request: Request): string {
        return 'WildCard';
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        // throw new ForbiddenException();
        return `This action returns a #${id} cat`;
    }

}