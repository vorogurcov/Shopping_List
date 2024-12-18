const shopping_list_container = document.getElementById("main_shopping_list_container");
import {get_products} from './main_page_requests.js';
import {create_products_list} from "../main_page_data/create_products_list.js";

const get_items = async (page_number = 0)=>{

    const products = await get_products(page_number);
    console.log(products)
    const items_list = create_products_list(products);
    items_list.forEach(item => shopping_list_container.appendChild(item));
}

await get_items();