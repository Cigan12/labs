import { UsersRepository } from './users.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laba12Controller } from './laba12.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UsersRepository])],
    controllers: [Laba12Controller],
})
export class Laba12Module {}
