import { Module } from '@nestjs/common';
import { Laba5Controller } from './laba5.controller';

@Module({
  controllers: [Laba5Controller]
})
export class Laba5Module {}
