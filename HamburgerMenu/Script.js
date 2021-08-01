const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelectorAll(".line").forEach((Element) => {
    Element.classList.toggle("line-animate");
  });
});
