const colors = [
    "green" , "red" , "yellow" , "cyan" , "#704EBB"
];
const btn = document.getElementById("btn");

const color = document.querySelector(".text");

btn.addEventListener("click", function (){
  
    const randomnumber = getRandomNumber();
    console.log(randomnumber);

    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];

});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}




