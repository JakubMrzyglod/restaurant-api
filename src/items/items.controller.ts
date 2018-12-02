import { Controller, Get, Post, Body } from "@nestjs/common";
import { ItemsService } from "./items.service";


@Controller('items')
export class itemsController{
    constructor(private readonly itemService: ItemsService){}

    @Get()
    async findAll(): Promise<string[]>{
        return this.itemService.findAll();
    }
    @Post()
    async create(@Body() item: string){
        this.itemService.create(item)
    }
}