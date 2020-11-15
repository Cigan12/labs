import { Module } from '@nestjs/common';
import { Laba2Controller } from './laba2.controller';
import { Laba2Service } from './laba2.service';

@Module({
  controllers: [Laba2Controller],
  providers: [Laba2Service]
})
export class Laba2Module {}
