<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
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

// Script voor Login pagina
function checkvalue(){
  var input = document.getElementById("username").value;
  if (input == "deGeheimeCode") {
    window.location.href = "geheim.html";
  }
  else {
    window.alert("Verkeerde code!");
  }
}