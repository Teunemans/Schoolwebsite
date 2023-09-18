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