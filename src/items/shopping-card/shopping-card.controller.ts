import { Controller, Post } from "@nestjs/common";

@Controller('shopping-card')
export class ShoppingCardController{
    @Post()
    async addItem(){
        return 'fake func';
    }
}
