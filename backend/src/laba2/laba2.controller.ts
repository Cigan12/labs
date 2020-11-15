import { Laba2Service } from './laba2.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('laba2')
export class Laba2Controller {
    constructor(private laba2service: Laba2Service) {}

    @Post('/getTableDvide')
    getTableDvide(@Body() { number }) {
        let responseStrng = '';
        for (let i = 0; i < 10; i++) {
            responseStrng += `${number} * ${i} = ${number * i} `;
        }
        return responseStrng;
    }
}
