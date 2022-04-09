var register = document.getElementById("register");

var forgotPassword = document.getElementById("forgot-password");

var forgotPasswordBtn = document.getElementById("forgot-password-btn");

var login = document.getElementById("login-container");

var createAccBtn = document.getElementById("create-acc-btn");

var closeWindow = document.getElementsByClassName("close-button")[0];
var closeWindow1 = document.getElementsByClassName("close-button")[1];

var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorTitle = document.getElementById('error-title');
var errorText = document.getElementById('error-text');


//capitalize letter in input box


//first solution
// var contactname = document.querySelector('#contactname');
// contactname.addEventListener('input', function () {
//     contactname.value = contactname.value.toUpperCase();
// });

//second solution
// function upperCaseF(inp) {
//     setTimeout(function () {
//         inp.value = inp.value.toUpperCase() ;
//     }, 1);
// }


//third solution
// const inp = document.getElementById("contactname");
// inp.addEventListener("input", () => {
//     // inp.value = inp.value.toUpperCase();
// });


function validateName() {
    var name = document.getElementById('contactname').value;

    if (name.length == 0) {
        errorName.innerHTML = "To pole nie może być puste.";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        errorName.innerHTML = "Proszę podać pełne imię i nazwisko."
        return false;
    }
    errorName.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;


}



createAccBtn.onclick = function () {
    register.style.display = "block";
    login.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == register) {
        register.style.display = "none";
        login.style.display = "flex";
    }
    if (event.target == forgotPassword) {
        forgotPassword.style.display = "none";
        login.style.display = "flex";
    }
}

forgotPasswordBtn.onclick = function () {
    forgotPassword.style.display = "block";
    login.style.display = "none";
}

closeWindow.onclick = function () {
    register.style.display = "none";
    login.style.display = "flex";
}

closeWindow1.onclick = function () {
    forgotPassword.style.display = "none";
    login.style.display = "flex";
}