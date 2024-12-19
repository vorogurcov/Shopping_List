const next_btn = document.getElementById("next_btn");
const prev_btn = document.getElementById("prev_btn");
const page_number = document.getElementById("page_number");
const main_product_container = document.getElementById("main_shopping_list_container");

import {get_items} from "./main_page.js";

const press_next_btn =async ()=>{
    let page_numb = page_number.textContent.split(" ")[1];
    let new_page_numb = parseInt(page_numb) + 1;
    main_product_container.innerHTML = '';
    await get_items(new_page_numb);
    page_number.textContent = "Page: " + new_page_numb;
}

const press_prev_btn =async ()=>{
    let page_numb = page_number.textContent.split(" ")[1];
    let new_page_numb = parseInt(page_numb) - 1;
    main_product_container.innerHTML = '';
    if(new_page_numb < 0)
        return;
    await get_items(new_page_numb);
    page_number.textContent = "Page: " + new_page_numb;
}

next_btn.addEventListener('click',press_next_btn);
prev_btn.addEventListener('click',press_prev_btn);