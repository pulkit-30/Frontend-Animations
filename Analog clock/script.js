setInterval(() => {
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");
  const deg = 6;
  const date = new Date();
  const setminute = date.getMinutes();
  const setSecond = date.getSeconds();
  const setHour = date.getHours();

  hour.style.setProperty("--rotation", setHour * 30 + setminute / 2);
  minute.style.setProperty("--rotation", setminute * 6);
  second.style.setProperty("--rotation", setSecond * 6);
}, 1000);
