const progressBar = document.querySelector(".progress-bar");
let progressComplete = progressBar.getAttribute("data-complete");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

start.addEventListener("click", clickEvent);
reset.addEventListener("click", function() {
  progressBar.style.opacity = "10";
});

function clickEvent() {
  let width = 10;
  progressComplete = 100;

  const count = setInterval(() => {
    if (width != progressComplete) {
      width++;
      progressBar.style.opacity = "10";
      progressBar.style.width = width + "%";
      progressBar.innerHTML = width + "%";
    } else {
      clearInterval(count);
    }
  }, 10);
}
