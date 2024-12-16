import { validateRegistrationForm as validateReg }  from './validation.js';
const button = document.getElementById("reg_btn")

export const validateForm = () => {
    validateReg()
    let inputs = document.getElementsByTagName("input");
    for(let index = 0; index < inputs.length; ++index)
    {
        if(inputs[index].classList.contains("invalid")) {
            button.disabled = true;
            return;
        }
    }
    button.disabled = false;
}

document.getElementById("reg_form").addEventListener("input",validateForm)