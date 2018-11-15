const username = "admin";
const password = "admin";

let userInputName;
let userInputPassword;

function login() {
    userInputName = document.getElementById('username').value;
    userInputPassword = document.getElementById('password').value;
    if(localStorage.getItem(userInputName) === userInputPassword){
        document.getElementById('loginLabel').innerHTML = "Login successful";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        console.log("Success")
    }
    else console.log('error')
}