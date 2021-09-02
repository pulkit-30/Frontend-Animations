const btn = document.querySelectorAll(".Close_btn_function");
const Modal = document.querySelector(".modal");
const body = document.querySelector("body");
const Backdrop = document.querySelector(".backdrop");
const Close = () => {
  Modal.classList.toggle("display");
  Backdrop.classList.toggle("display");
  body.classList.toggle("body__active__modal");
};
btn.forEach((Element) => {
  Element.addEventListener("click", Close);
});
Backdrop.addEventListener("click", Close);
