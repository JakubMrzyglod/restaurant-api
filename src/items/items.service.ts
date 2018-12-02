import { Injectable } from "@nestjs/common";

@Injectable()
export class ItemsService{
    private readonly items : string[] = ['pizza','coke'];
    findAll(): string[] {
        return this.items;
    }
    create(item: string){
        this.items.push(item);
    }
}