import {Injectable} from "@nestjs/common";
import {DbService} from "../db/db.service";
@Injectable()
export class ProductsService{

    constructor(private readonly dbService:DbService){};
    async getProductsPage(request,pageObject:{page:number}){
        try {
            const productsPage = await this.dbService.getProductsPage(request.cookies['sessionId'], pageObject);
            return productsPage;
        }
        catch(error)
        {
            return {
            }
        }
    }
}