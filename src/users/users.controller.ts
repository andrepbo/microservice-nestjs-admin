import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async all() {
        return this.usersService.all();
    }

    @Post()
    async create(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.usersService.create({ username, email, password });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.usersService.get(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.usersService.update(id, { username, email, password });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}
