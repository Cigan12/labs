import { Controller, Get } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('laba8')
export class Laba8Controller {
    private goods = [];
    @Get('/goods')
    getAllGoods() {
        for (let index = 0; index < 5; index++) {
            this.goods[index] = { id: uuid() };
        }
        this.goods[0].name = 'test';
        this.goods[1].name = 'milk';
        this.goods[2].name = 'sugar';
        this.goods[3].name = 'meat';
        this.goods[4].name = 'potato';
        return this.goods;
    }
}
