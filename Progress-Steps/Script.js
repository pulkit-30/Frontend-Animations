const btn = document.querySelectorAll(".btn");
const progress = document.getElementById("progress");
const Numbers = document.querySelectorAll(".number");
let counter = 0;
progress_width();
btn.forEach((Element) => {
  Element.addEventListener("click", () => {
    Element.classList.add("btn__click");
    setInterval(() => {
      Element.classList.remove("btn__click");
    }, 400);
  });
});
const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
  counter--;
  if (counter === 0) {
    prev.disabled = true;
  }
  if (next.disabled) {
    next.disabled = false;
  }
  progress_width();
});
const next = document.getElementById("next");
next.addEventListener("click", () => {
  counter++;
  if (prev.disabled) {
    prev.disabled = false;
  }
  if (counter === 3) {
    next.disabled = true;
  }
  progress_width();
});
function progress_width() {
  switch (counter) {
    case 0:
      progress.style.width = 0 + "vw";
      break;
    case 1:
      progress.style.width = 27 + "vw";
      break;
    case 2:
      progress.style.width = 53 + "vw";
      break;
    case 3:
      progress.style.width = 79 + "vw";
      break;
  }
  Numbers.forEach((Element) => {
    if (Element.textContent <= counter + 1) {
      Element.classList.add("active_border");
    } else {
      Element.classList.remove("active_border");
    }
  });
}
