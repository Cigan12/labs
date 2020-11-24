import { GoodsRepository } from './goods.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laba11Controller } from './laba11.controller';

@Module({
    imports: [TypeOrmModule.forFeature([GoodsRepository])],
    controllers: [Laba11Controller],
})
export class Laba11Module {}
