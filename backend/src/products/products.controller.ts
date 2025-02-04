import {Controller, Post, Body} from '@nestjs/common'
import {ProductsService} from "./products.service";

@Controller('api')
export class ProductsController{
    constructor(private readonly productsService:ProductsService) {}

    @Post('products/get')
    getProductsPage(@Body() pageObject:{page:number}){
        return this.productsService.getProductsPage(pageObject);
    }
}