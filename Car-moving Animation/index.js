var audio = new Audio("sound.mp3");
audio.setAttribute("loop", "true");
var l = document.querySelector(".lambo");
var m = document.querySelector(".mer");
var r = document.querySelector(".range");
var a = document.querySelector(".audi");
var aw1 = document.querySelector(".wheel-audi-1 img");
var aw2 = document.querySelector(".wheel-audi-2 img");
var mw1 = document.querySelector(".wheel-mer-1 img");
var mw2 = document.querySelector(".wheel-mer-2 img");
var rw1 = document.querySelector(".wheel-range-1 img");
var rw2 = document.querySelector(".wheel-range-2 img");
var lw1 = document.querySelector(".wheel-lambo-1 img");
var lw2 = document.querySelector(".wheel-lambo-2 img");
var track = document.querySelector(".track");
var sky = document.querySelector(".sky");

function audi() {
  l.style.display = "none";
  a.style.display = "block";
  r.style.display = "none";
  m.style.display = "none";
}
function mer() {
  l.style.display = "none";
  a.style.display = "none";
  r.style.display = "none";
  m.style.display = "block";
}
function lambo() {
  l.style.display = "block";
  a.style.display = "none";
  r.style.display = "none";
  m.style.display = "none";
}
function range() {
  l.style.display = "none";
  a.style.display = "none";
  r.style.display = "block";
  m.style.display = "none";
}

function openmenu() {
  document.querySelector(".menu").classList.toggle("display");
  var cross = document.querySelector(".cross");
  var burger = document.querySelector(".burger");
  if (burger.style.display != "none") {
    cross.style.display = "block";
    burger.style.display = "none";
  } else {
    cross.style.display = "none";
    burger.style.display = "block";
  }
  // console.log(document.querySelector(".menu").style.display);
}

function openchangecar() {
  document.querySelector(".change-car").style.display = "flex";
}
function closechangecar() {
  document.querySelector(".change-car").style.display = "none";
}
function move() {
  audio.play();
  console.log(aw1.classList);
  sky.classList.add("move-sky");
  track.classList.add("move-track");
  aw1.classList.add("move-wheel");
  aw2.classList.add("move-wheel");
  mw1.classList.add("move-wheel");
  mw2.classList.add("move-wheel");
  rw1.classList.add("move-wheel");
  rw2.classList.add("move-wheel");
  lw1.classList.add("move-wheel");
  lw2.classList.add("move-wheel");
  l.classList.add("move-car");
  r.classList.add("move-car");
  a.classList.add("move-car");
  m.classList.add("move-car");
  document.querySelector(".go").textContent = "";
}
function remove() {
  audio.pause();
  console.log(aw1.classList);
  sky.classList.remove("move-sky");
  track.classList.remove("move-track");
  aw1.classList.remove("move-wheel");
  aw2.classList.remove("move-wheel");
  mw1.classList.remove("move-wheel");
  mw2.classList.remove("move-wheel");
  rw1.classList.remove("move-wheel");
  rw2.classList.remove("move-wheel");
  lw1.classList.remove("move-wheel");
  lw2.classList.remove("move-wheel");
  document.querySelector(".go").textContent = "Lets Go!!!";
  l.classList.remove("move-car");
  r.classList.remove("move-car");
  a.classList.remove("move-car");
  m.classList.remove("move-car");
}
