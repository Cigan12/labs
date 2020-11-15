import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Laba1Module } from './laba1/laba1.module';

@Module({
    imports: [
        Laba1Module,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
