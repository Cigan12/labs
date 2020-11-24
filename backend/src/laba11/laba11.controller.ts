import { GoodsRepository } from './goods.repository';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('laba11')
export class Laba11Controller {
    constructor(
        @InjectRepository(GoodsRepository)
        private goodsRepository: GoodsRepository,
    ) {}

    @Get('goods')
    getAllGoods() {
        return this.goodsRepository.getAllGoods();
    }

    @Post('addGood')
    async addGood(@Body() { name, price }) {
        return await this.goodsRepository.addNewGood(name, price);
    }

    @Delete('deleteGood/:id')
    async deleteGood(@Param('id') id) {
        return await this.goodsRepository.deleteGood(id);
    }

    @Get('byId/:id')
    async getGoodById(@Param('id') id) {
        return await this.goodsRepository.getById(id);
    }
}
