const shopping_list_container = document.getElementById("main_shopping_list_container");
//import {get_products} from 'main_page_requests.js';
import {create_products_list} from "../main_page_data/create_products_list.js";

const get_items = ()=>{
    //const products = get_products();
    const products = { product1:{product_image:'main_page_data/main_logo.jpg', product_price:'500rub',product_creator:"ivan",product_name:"game"

        },
        product2:{
            product_image:'main_page_data/main_logo.jpg', product_price:'300rub',product_creator:"vanya",product_name:"game2"
        }
    }
    const items_list = create_products_list(products);
    items_list.forEach(item => shopping_list_container.appendChild(item));
}

get_items();