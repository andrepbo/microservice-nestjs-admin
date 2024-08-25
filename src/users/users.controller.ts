import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        @Inject('USER_SERVICE') private readonly client: ClientProxy,
    ) { }

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
        const user = await this.usersService.create({ username, email, password });
        this.client.emit('user_created', user);
        return user;
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
        await this.usersService.update(id, { username, email, password });
        const user = await this.usersService.get(id);
        this.client.emit('user_updated', user);
        return user;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.usersService.delete(id);
        this.client.emit('user_deleted', id);
    }
}
