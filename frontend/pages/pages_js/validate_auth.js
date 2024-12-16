import { validateAuthorizationForm as validateAuth }  from './validation.js';
const button = document.getElementById("sgn_btn")

export const validateForm = () => {
    validateAuth()
    let inputs = document.getElementsByTagName("input");
    for(let index = 0; index < inputs.length; ++index)
    {
        if(inputs[index].classList.contains("invalid")) {
            button.disabled = true;
            return;
        }
        else if (inputs[index].classList.contains("valid"))
            continue;
        else {
            button.disabled = true;
            return;
        }
    }
    button.disabled = false;
}

document.getElementById("auth_form").addEventListener("input",validateForm)

