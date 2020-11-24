import { Module } from '@nestjs/common';
import { Laba6Controller } from './laba6.controller';

@Module({
  controllers: [Laba6Controller]
})
export class Laba6Module {}
