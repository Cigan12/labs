import { Module } from '@nestjs/common';
import { Laba9Controller } from './laba9.controller';

@Module({
    controllers: [Laba9Controller],
})
export class Laba9Module {}
