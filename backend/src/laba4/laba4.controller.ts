import { Body, Controller, Post } from '@nestjs/common';

@Controller('laba4')
export class Laba4Controller {
    @Post('/1')
    first(@Body() { x, y }) {
        let corner = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
        };

        if (y < 0) {
            delete corner[1];
            delete corner[2];
        } else {
            delete corner[3];
            delete corner[4];
        }
        if (x < 0) {
            delete corner[1];
            delete corner[4];
        } else {
            delete corner[2];
            delete corner[3];
        }
        return Object.values(corner)[0];
    }

    @Post('/2')
    second(@Body() { hole, brick }) {
        const contains =
            hole.x * hole.y > brick.x * brick.y ||
            hole.x * hole.y > brick.x * brick.z ||
            hole.x * hole.y > brick.z * brick.y;
        if (contains) return 'Да';
        else return 'Нет';
    }

    @Post('/3')
    third(@Body() { day }) {
        switch (day) {
            case '6':
            case '7':
                return 'Выходной';

            default:
                return 'Будний';
        }
    }

    @Post('/4')
    fourth(@Body() { a, b, c }) {
        const x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
        const x2 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
        return `x1 = ${x1} x2=${x2}`;
    }

    @Post('/5')
    fifth(@Body() { num }) {
        let summ = 0;
        for (let index = 0; index < num; index++) {
            if (index % 5 === 0) summ += index;
        }
        return summ;
    }

    @Post('/6')
    sixth(@Body() { arr }: { arr: string }) {
        const arrFromStr = arr.split(',');
        arrFromStr.sort();

        return arrFromStr.join(' , ');
    }
}
