const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("toggler-dark-mode");
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector(".btn").classList.toggle("btn-dark-mode");
});
