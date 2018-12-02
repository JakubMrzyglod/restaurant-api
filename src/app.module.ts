import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { itemsController } from './items/items.controller';

@Module({
  imports: [],
  controllers: [itemsController],
  providers: [],
})
export class AppModule {}
