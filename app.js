let email = document.getElementById("email");
let country = document.getElementById("country");
let zip = document.getElementById("zip");
let password = document.getElementById("password");
let c_password = document.getElementById("c_password");

let formElements = [
    email,
    country,
    zip,
    password,
    c_password
]

formElements.forEach(element => {
    element.addEventListener("input", ()=>{
        let errorMsg ;
        if (!element.validity.valid) {
            if ( element.validity.valueMissing) {
                errorMsg = `${element.name} field is required.`
                element.classList.add("required");
            }
            else if ( element.validity.patternMismatch) {
                if (element.name != "Password"){
                    errorMsg = `Your ${element.name} does not meet the required format. Please try again.`
                } else {
                    errorMsg = `Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one symbol.`
                }
                
            }
            element.classList.add("required");
            displayErrorMsg(element, errorMsg);
        } else if ((password.value != c_password.value) && element == c_password){
            errorMsg = "Password and confirm password fields do not match. Please re-enter your password."

            element.classList.add("required");
            displayErrorMsg(element, errorMsg);

        } else {
            element.classList.remove("required");
            removeErrorMsg(element)
        }
       
    })
});



function displayErrorMsg(element, errorMsg) {
    let errorDiv = getErrorDiv(element);

    errorDiv.textContent = errorMsg;
    errorDiv.classList.remove("hidden");
}

function removeErrorMsg(element) {
    let errorDiv = getErrorDiv(element);

    errorDiv.textContent = "";
    errorDiv.classList.add("hidden");
}

function getErrorDiv(element) {
    return element.parentElement.parentElement.lastElementChild;
}