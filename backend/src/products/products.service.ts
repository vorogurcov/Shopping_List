import {Injectable} from "@nestjs/common";
import {DbService} from "../db/db.service";
@Injectable()
export class ProductsService{

    constructor(private readonly dbService:DbService){};
    async getProductsPage(pageObject:{page:number}){
        try {
            const productsPage = await this.dbService.getProductsPage(pageObject);
            return productsPage;
        }
        catch(error)
        {
            return {
            }
        }
    }
}