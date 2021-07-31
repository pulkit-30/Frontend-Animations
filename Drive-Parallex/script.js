const mountain = document.getElementById("mountains");
const sky = document.getElementById("sky");
window.addEventListener("scroll", () => {
  sky.style.transform = `translateY(-${window.scrollY * 0.03}px)`;
  mountain.style.top = -window.scrollY * 0.01 + "%";
});
