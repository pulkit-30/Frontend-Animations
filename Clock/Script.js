const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const timeEl = document.querySelector(".time");
const day_date = document.querySelector(".day__date");
const hour = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList[0] === "dark") {
    btn.textContent = "Light";
  } else {
    btn.textContent = "Dark";
  }
});
const dayArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const updateTime = () => {
  const date = new Date();
  const minute = date.getMinutes();
  const time = date.getHours() % 12;
  const seconds = date.getSeconds();
  const day = date.getDay();
  timeEl.textContent = `${time}:${minute}`;
  day_date.textContent = `${
    dayArray[day - 1]
  },${date.getDate()} | ${date.getMonth()} | ${date.getFullYear()} `;
  hour.style.transform = `translate(50%, -50%) rotate(${scale(
    time + minute * 0.01,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(50%, -50%) rotate(${scale(
    minute,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(50%, -50%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;
};
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
updateTime();
setInterval(updateTime, 1000);
