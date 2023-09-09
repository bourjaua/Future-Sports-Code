//Changes the form message to either success or error statuts by taking in the type 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add('form_message-'+type);
}

//Sets input error and changes border colour when there is an error
function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

//Clears input error and changes border colour when there is no error
function clearInputElement(inputElement) {
    inputElement.classList.remove("form_input-error")
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}



/* Add references to Login form and Create Account form */
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    /* Start of toggle function for Login form and Create Account form */
    document.getElementById("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.getElementById("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
    /* End of toggle function for Login form and Create Account form */


    //Didn't know how to save user name and passwords and ran out of time
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Username or Password incorrect");
    });




    /* I gave up at this point, i wasn't able to get my errors fixed up and wasn't working as intended and my health got in the way*/
        //uses all class elemtents that are assigned class="form_input"
    document.querySelectorAll(".form_input").forEach(inputElement => {
        //blur used for when user takes focus off input field
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length <= 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        
        inputElement.addEventListener("input"), e => {
            clearInputError(inputElement);
        }
    });
    /* I gave up at this point, i wasn't able to get my errors fixed up and wasn't working as intended and my health got in the way*/
});


