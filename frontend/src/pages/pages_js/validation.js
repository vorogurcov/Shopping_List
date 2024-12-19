
const validateEmail = (email)=>{
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
    return re.test(email);
}

const validatePassword = (password)=>{
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!#$%&]).{8,}$/;
    return re.test(password);
}

const validateWord = (word)=>{
    let re = /[A-Za-z]+/;
    return re.test(word);
}

const setInvalid = (element)=>{
    if(element.classList.contains("valid"))
        element.classList.replace("valid","invalid")
    else
        element.classList.add("invalid");
    element.classList.replace("border-black","border-red-600");
    element.classList.replace("border-green-600","border-red-600");
}

const setValid = (element)=>{
    if(element.classList.contains("invalid"))
        element.classList.replace("invalid","valid");
    else
        element.classList.add("valid");
    element.classList.replace("border-black","border-green-600");
    element.classList.replace("border-red-600","border-green-600");
}
export const  validateRegistrationForm =() =>{
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const last_name = document.getElementById("last_name");

    if(name.value == "")
        ;
    else if(!validateWord(name.value))
        setInvalid(name);
    else
        setValid(name);

    if(last_name.value == "")
        ;
    else if(!validateWord(last_name.value))
        setInvalid(last_name);
    else
        setValid(last_name);

    if(password.value == "")
        ;
    else if(!validatePassword(password.value))
        setInvalid(password);
    else
        setValid(password);

    if(email.value == "")
        ;
    else if(!validateEmail(email.value))
        setInvalid(email);
    else
        setValid(email);
}

export const validateAuthorizationForm =() =>{
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    if(password.value == "")
        ;
    else if(!validatePassword(password.value))
        setInvalid(password);
    else
        setValid(password);

    if(email.value == "")
        ;
    else if(!validateEmail(email.value))
        setInvalid(email);
    else
        setValid(email);
}