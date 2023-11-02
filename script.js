var i = 0;

/* De tekst die getypt moet worden */
var txt = 'Hello World!';

/* Hoe snel de letters worden getypt */
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const test = document.getElementById("test");
test = document.innerHTML = "hallo meneer!";

// Script voor Login
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "user" && password === "password") {
      window.location.href = "geheim.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

while (true) {

}