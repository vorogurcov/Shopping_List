const reg_sumbit_btn = document.getElementById("reg_btn")

const form_data_map = () =>{
    let data_map = new Map()
    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; ++index)
    {
        data_map.set(inputs[index].placeholder, inputs[index].value)
    }
    return data_map
}

const make_reg_request = async (data) => {
    const url = "http://localhost:3000/api/register";
    try {
        await fetch(url, {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(Object.fromEntries(data)),
        })
            .then(response => response.json())
            .then(data => {
                if(data.redirect){
                    window.location.href = data.redirect;
                }
                else
                    console.log(data.message);
            });
    }
    catch (error) {
        console.log(error.message);
    }
}
const send_reg_data = async () => {
    let data_map = form_data_map();
    console.log(data_map);
    await make_reg_request(data_map);
}

const reg_btn_pressed = async (event) => {
    event.preventDefault();
    await send_reg_data();
}

reg_sumbit_btn.onclick = reg_btn_pressed;
