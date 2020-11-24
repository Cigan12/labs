import { Body, Controller, Post } from '@nestjs/common';

@Controller('laba5')
export class Laba5Controller {
    @Post('/strings')
    concatStrings(@Body() { first, second }) {
        return first + second;
    }

    @Post('/max')
    returnIfMaxChanged(@Body() { max, maxValue }) {
        const Max = Math.max(...max.split(','));
        if (Max > maxValue) {
            maxValue = Max;
            return {
                result: true,
                maxValue,
            };
        } else return { result: false, maxValue };
    }
}
