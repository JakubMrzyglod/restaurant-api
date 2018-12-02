import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { itemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ShoppingCardController } from './items/shopping-card/shopping-card.controller';

@Module({
  imports: [],
  controllers: [itemsController, ShoppingCardController],
  providers: [ItemsService],
})
export class AppModule {}
