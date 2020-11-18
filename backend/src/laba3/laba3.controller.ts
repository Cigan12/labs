import { Body, Controller, Post } from '@nestjs/common';

@Controller('laba3')
export class Laba3Controller {
    @Post()
    returnType(@Body() { currentType, sendType, value }) {
        switch (sendType) {
            case 'number':
                value = +value;
                break;
            case 'string':
                value = value + '';
                break;
            case 'boolean':
                value = Boolean(value);
                break;
            default:
                break;
        }
        return {
            typeBefore: currentType,
            newValue: value,
            typeAfter: sendType,
        };
    }
}
