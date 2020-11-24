import { Body, Controller, Post, Res } from '@nestjs/common';
import * as fs from 'fs';

@Controller('laba6')
export class Laba6Controller {
    @Post('/file1')
    async insertIntoFile1(@Body() { text }) {
        await fs.writeFile('static/a.txt', text, e => {});
        return { file: text };
    }

    @Post('/file2')
    insertIntoFile2(@Body() { text }) {
        fs.appendFileSync('static/b.txt', '\n' + text);

        const r = fs.readFileSync('static/b.txt', 'utf8');

        return { file: r };
    }

    @Post('/read')
    readFile(@Body() { filename }) {
        const r = fs.readFileSync(`static/${filename}`, 'utf8');

        return { file: r };
    }
}
