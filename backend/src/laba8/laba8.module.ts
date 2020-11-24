import { Module } from '@nestjs/common';
import { Laba8Controller } from './laba8.controller';

@Module({
  controllers: [Laba8Controller]
})
export class Laba8Module {}
