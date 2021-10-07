const bg = [
  "https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1473889051109-2de98686f4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
  "https://images.unsplash.com/photo-1606089397043-89c1758008e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1626271763156-520913751759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
];
const body = document.querySelector("body");
const background = document.querySelector(".background");
let i = -1;
const updateBackground = () => {
  i++;
  if (i >= bg.length) {
    i = 0;
  }
  if (i < 0) {
    i = bg.length - 1;
  }
  body.style.backgroundImage = `url(${bg[i]})`;
  background.style.backgroundImage = `url(${bg[i]})`;
};
updateBackground();
const right_btn = document.querySelector(".right");
const left_btn = document.querySelector(".left");
right_btn.addEventListener("click", () => {
  updateBackground();
});
left_btn.addEventListener("click", () => {
  i = i - 2;
  updateBackground();
});
setInterval(updateBackground, 5000);
