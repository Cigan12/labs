import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Laba1Module } from './laba1/laba1.module';
import { Laba2Module } from './laba2/laba2.module';
import { Laba3Module } from './laba3/laba3.module';
import { Laba4Module } from './laba4/laba4.module';
import { Laba5Module } from './laba5/laba5.module';
import { Laba6Module } from './laba6/laba6.module';
import { Laba7Module } from './laba7/laba7.module';
import { Laba8Module } from './laba8/laba8.module';
import { Laba9Module } from './laba9/laba9.module';
import { Laba10Module } from './laba10/laba10.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { Laba11Module } from './laba11/laba11.module';
import { Laba12Module } from './laba12/laba12.module';

@Module({
    imports: [
        Laba1Module,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        Laba2Module,
        Laba3Module,
        Laba4Module,
        Laba5Module,
        Laba6Module,
        Laba7Module,
        Laba8Module,
        Laba9Module,
        Laba10Module,
        TypeOrmModule.forRoot(typeOrmConfig),
        Laba11Module,
        Laba12Module,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
