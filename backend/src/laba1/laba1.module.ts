import { Module } from '@nestjs/common';
import { Laba1Controller } from './laba1.controller';
import { Laba1Service } from './laba1.service';

@Module({
  controllers: [Laba1Controller],
  providers: [Laba1Service]
})
export class Laba1Module {}
