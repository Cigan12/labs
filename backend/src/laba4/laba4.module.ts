import { Module } from '@nestjs/common';
import { Laba4Controller } from './laba4.controller';

@Module({
  controllers: [Laba4Controller]
})
export class Laba4Module {}
