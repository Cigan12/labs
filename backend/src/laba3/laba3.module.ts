import { Module } from '@nestjs/common';
import { Laba3Controller } from './laba3.controller';

@Module({
  controllers: [Laba3Controller]
})
export class Laba3Module {}
