// Script voor het type-effect
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let test = document.getElementById("test");
test = document.innerHTML = "hallo meneer!";

// Script voor Login pagina
function checkvalue(){
  var input = document.getElementById("username").value;
  if (input == "password") {
    window.location.href = "geheim.html";
  }
  else {
    window.alert("Verkeerde code!");
  }
}