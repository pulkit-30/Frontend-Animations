const line = document.querySelectorAll(".line");
const hamBurger = document.querySelector(".hamburger");
hamBurger.addEventListener("click", () => {
  line.forEach((Element) => {
    Element.classList.toggle("active_line");
  });
});
