export async function get_products(page_number = 0){
    const url = "http://localhost:3000/api/products/get"
    try {
        const response = await fetch(url,{
            mode:'cors',
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({page:page_number}),
            credentials: 'include',
        })

        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error.message);
    }
}