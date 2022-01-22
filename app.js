
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    paintGreeting(username);
}

function paintGreeting(name){
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else if(savedUserName != null) {
    paintGreeting(savedUserName);
};
