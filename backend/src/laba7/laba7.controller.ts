import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('laba7')
export class Laba7Controller {
    private goodsList = [];
    private groupList = [];

    @Post('/addGood')
    addGood(@Body() { name }) {
        const item = { article: uuid(), name };
        this.goodsList.push(item);
        return item;
    }

    @Post('/addMember')
    addMember(@Body() { name }) {
        const item = { id: uuid(), name };
        this.groupList.push(item);
        return item;
    }

    @Delete('/delete/:type/:id')
    deleteElement(@Param() { type, id }) {
        if (type === 'member') {
            const index = this.groupList.findIndex(item => item.id === id);
            this.groupList.splice(index, 1);
            return true;
        } else {
            const index = this.goodsList.findIndex(item => item.article === id);
            this.goodsList.splice(index, 1);
            return true;
        }
    }
}
