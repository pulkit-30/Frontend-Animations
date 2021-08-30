
function tom1() {
  var audio = new Audio("tom-1.mp3");
  audio.play();
  document.getElementById("tom1").classList.add("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");
  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
 
  //   audio.setAttribute();
  //   console.log(audio);
}
function tom2() {
  var audio = new Audio("tom-2.mp3");
  audio.play();
  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.add("drum-play");
  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
}
function tom3() {
  var audio = new Audio("tom-3.mp3");
  audio.play();
  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");
  document.getElementById("tom3").classList.add("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
}
function tom4() {
  var audio = new Audio("tom-4.mp3");
  audio.play();
  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");

  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.add("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
}
function kick() {
  var audio = new Audio("kick-bass.mp3");
  audio.play();
  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");
  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("kick").classList.add("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
}
function snare() {
  var audio = new Audio("snare.mp3");
  audio.play();
  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");
  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.add("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
  document.getElementById("crash").classList.remove("drum-play");
}
function crash() {
  var audio = new Audio("crash.mp3");
  audio.play();

  document.getElementById("tom1").classList.remove("drum-play");
  document.getElementById("tom2").classList.remove("drum-play");
  document.getElementById("tom3").classList.remove("drum-play");
  document.getElementById("tom4").classList.remove("drum-play");
  document.getElementById("snare").classList.remove("drum-play");
  document.getElementById("crash").classList.add("drum-play");
  document.getElementById("kick").classList.remove("drum-play");
}


document.addEventListener("keypress", (event) => {
  var w = document.querySelectorAll(".drum");
  var l = w.length;
  for (var i = 0; i < l; i++) {
    sound(event.key);
  }
});

function sound(q) {
  switch (q) {
    case "A":
      tom1();
      break;
    case "a":
      tom1();
      break;
    case "D":
      tom2();
      break;
    case "d":
      tom2();
      break;
    case "W":
      kick();
      break;
    case "w":
      kick();
      break;
    case "K":
      tom3();
      break;
    case "k":
      tom3();
      break;
    case "L":
      tom4();
      break;
    case "l":
      tom4();
      break;
    case "Z":
      snare();
      break;
    case "z":
      snare();
      break;
    case "B":
      crash();
      break;
    case "b":
      crash();
      break;
  }
}
