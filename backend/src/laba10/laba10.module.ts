import { Module } from '@nestjs/common';
import { Laba10Controller } from './laba10.controller';

@Module({
  controllers: [Laba10Controller]
})
export class Laba10Module {}
