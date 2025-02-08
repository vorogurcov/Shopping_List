import {Controller, Post, Body, Req} from '@nestjs/common'
import {ProductsService} from "./products.service";

@Controller('api')
export class ProductsController{
    constructor(private readonly productsService:ProductsService) {}

    @Post('products/get')
    getProductsPage(@Req() request ,@Body() pageObject:{page:number}){
        return this.productsService.getProductsPage(request, pageObject);
    }
}