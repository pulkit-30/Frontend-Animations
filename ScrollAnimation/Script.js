const boxes = document.querySelectorAll(".box");
const revelFunction = () => {
  console.log(window.screen.availHeight);
  var fixHeight = window.screen.availHeight;
  fixHeight > 700 ? (fixHeight -= 200) : (fixHeight += 250);
  boxes.forEach((Element) => {
    const box = Element.getBoundingClientRect();
    if (box.top < fixHeight) {
      Element.classList.add("revel");
    } else {
      Element.classList.remove("revel");
    }
  });
};
window.addEventListener("scroll", revelFunction);

revelFunction();
