const create_product_el = (product) => {
    // Create the main grid container
    let product_el = document.createElement("div");
    product_el.className =
        "grid grid-cols-4 divide-x-2 border-2 items-center border-y border-black"; // Ensure proper alignment with items-center

    // Column 1: Product image
    let product_picture = document.createElement("img");
    product_picture.src = product["product_image"];
    product_picture.alt = product["product_name"];
    product_picture.className = "object-cover w-24 h-24 p-2"; // Set consistent size for the image
    product_el.appendChild(product_picture); // Append directly to grid cell 1

    // Column 2: Product information container
    let product_info = document.createElement("div");
    product_info.className = "p-4 flex flex-col space-y-2"; // Add spacing between text elements

    // Product name
    let product_name = document.createElement("p");
    product_name.textContent = "Product: " + product["product_name"];
    product_name.className = "text-sm font-medium text-black";

    // Product creator
    let product_creator = document.createElement("p");
    product_creator.textContent = "Created by: " + product["product_creator"];
    product_creator.className = "text-sm text-gray-500";

    // Product price
    let product_price = document.createElement("p");
    product_price.textContent = "Price: " + product["product_price"];
    product_price.className = "text-sm font-semibold text-green-500";

    // Append text elements to product info container
    product_info.appendChild(product_name);
    product_info.appendChild(product_creator);
    product_info.appendChild(product_price);

    product_el.appendChild(product_info); // Append to grid cell 2

    // Column 3: Cancel button
    let cancel_btn = document.createElement("button");
    cancel_btn.textContent = "Cancel";
    cancel_btn.className =
        "bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600";
    let cancel_container = document.createElement("div");
    cancel_container.className = "flex justify-center";
    cancel_container.appendChild(cancel_btn);
    product_el.appendChild(cancel_container); // Append to grid cell 3

    // Column 4: Delete button
    let delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";
    delete_btn.className =
        "bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600";
    let delete_container = document.createElement("div");
    delete_container.className = "flex justify-center";
    delete_container.appendChild(delete_btn);
    product_el.appendChild(delete_container); // Append to grid cell 4

    return product_el;
};



export function create_products_list(products){
    //products is JSON object of 10 JSON objects
    let products_list = [];
    products.forEach((product) =>{
        products_list.push(create_product_el(product));
    })
    return products_list;
}