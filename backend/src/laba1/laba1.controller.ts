import { Laba1Service } from './laba1.service';
import { Body, Controller, Post } from '@nestjs/common';
import * as fs from 'fs';

interface IResponseBody {
    name: string;
    sex: 'male' | 'female';
    age: string;
    postIndex: string;
    city: string;
    street: string;
    apartment: string;
    room: string;
    categories: Array<string>;
}

@Controller('laba1')
export class Laba1Controller {
    constructor(private laba1Service: Laba1Service) {}

    @Post()
    ReturnResponse(@Body() body: IResponseBody) {
        return body;
    }

    @Post('/register')
    Register(@Body() { login }) {
        return this.laba1Service.registerUser(login);
    }
    @Post('/login')
    Login(@Body() { login, token }) {
        return this.laba1Service.login(login, token);
    }

    @Post('/writeInFile')
    async writeInFile(@Body() { fileInner }) {
        try {
            await fs.writeFile('static/testfile', fileInner, e => {});
            return fileInner;
        } catch (error) {
            console.log('Cigan-log: writeInFile -> error', error);
        }
    }
}
