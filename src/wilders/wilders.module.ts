import { Module } from '@nestjs/common';
import { WildersController } from './wilders.controller';
import { WildersService } from './wilders.service';

@Module({
  controllers: [WildersController],
  providers: [WildersService]
})
export class WildersModule {}
