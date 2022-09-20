import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WildersModule } from './wilders/wilders.module';

@Module({
  imports: [WildersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
