window.addEventListener("scroll", () => {
  const screen = window.screen.availHeight;
  const total_height = document.body.scrollHeight - screen;
  console.log(total_height);
  console.log(screen);
  document.querySelector(".scroll_box").style.width = `${
    (window.scrollY / total_height) * 100
  }%`;
});
