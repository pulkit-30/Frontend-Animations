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
var updateTime = () => {
  var date = new Date();
  var minute = date.getMinutes()+10;

  var time = date.getHours()%12;

  var seconds = date.getSeconds()+26;
  if(seconds>=60)
  {
  minute=minute+1;
    seconds=seconds%60;
}
  if(minute>=60)
  {
    time=time+1;
  minute=minute%60;
  }
  var day = date.getDay();
  timeEl.textContent = `${time}:${minute}:${seconds}`;
  day_date.textContent = `${
    dayArray[day - 1]
  },${date.getDate()} | ${date.getMonth()+1} | ${date.getFullYear()} `;
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
