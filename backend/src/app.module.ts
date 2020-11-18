import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Laba1Module } from './laba1/laba1.module';
import { Laba2Module } from './laba2/laba2.module';
import { Laba3Module } from './laba3/laba3.module';
import { Laba4Module } from './laba4/laba4.module';

@Module({
    imports: [
        Laba1Module,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        Laba2Module,
        Laba3Module,
        Laba4Module,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
