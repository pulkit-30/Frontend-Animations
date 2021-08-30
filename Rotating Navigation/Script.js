document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("rotate__container");
  document.querySelectorAll(".line").forEach((Element) => {
    Element.classList.toggle("line-animate");
  });
  document.querySelector("nav").classList.toggle("hide__nav");
  document.querySelector("h1").classList.toggle("hide__nav");
});
