import { UsersRepository } from './users.repository';
import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('laba12')
export class Laba12Controller {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) {}

    @Post('signup')
    async signup(@Body() { login, password }) {
        return await this.usersRepository.signUp(login, password);
    }

    @Post('signin')
    async signin(@Body() { login, password }) {
        return await this.usersRepository.signIn(login, password);
    }
}
