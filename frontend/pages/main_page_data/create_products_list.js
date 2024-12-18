const create_product_el = (product) =>{
    let product_el = document.createElement("div");
    product_el.className = "grid grid-cols-4";

    let product_picture = document.createElement("img");
    product_picture.src = product["product_image"];

    let product_info = document.createElement("div");
    product_info.className = "grid grid-rows-3 space-x-2"

    let product_price = document.createElement('p');
    product_price.textContent = "Price:\n" + product["product_price"]

    let product_creator = document.createElement('p');
    product_creator.textContent = "Created by:\n" + product["product_creator"];

    let product_name = document.createElement('p');
    product_name.textContent = "Product:\n" + product["product_name"];

    product_info.appendChild(product_name);
    product_info.appendChild(product_creator);
    product_info.appendChild(product_price);

    let delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    let cancel_btn = document.createElement("button");
    cancel_btn.textContent = "Cancel";

    product_el.appendChild(product_picture);
    product_el.appendChild(product_info);
    product_el.appendChild(cancel_btn);
    product_el.appendChild(delete_btn);

    return product_el;
}
export function create_products_list(products){
    //products is JSON object of 10 JSON objects
    let products_list = [];
    Object.values(products).forEach((product) =>{
        products_list.push(create_product_el(product));
    })
    return products_list;
}