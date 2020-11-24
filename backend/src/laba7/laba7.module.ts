import { Module } from '@nestjs/common';
import { Laba7Controller } from './laba7.controller';

@Module({
  controllers: [Laba7Controller]
})
export class Laba7Module {}
