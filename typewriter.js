"use strict";

const text = document.getElementById("typewriter").textContent;
const arr = text.split("");
let step = 0;
let rando = 0;
const audiospace = new Audio("typespace.mp3");
const audio1 = new Audio("typekey1.mp3");
const audio2 = new Audio("typekey2.mp3");

//function that writes one letter at a time from the array
document.getElementById("typewriter").textContent = " ";
function type(counter) {
  if (step <= 42) {
    setTimeout(function() {
      let letter = arr[step];

      document.querySelector("h1").append(letter);
      let n = letter.includes(" ");
      let t = letter.includes("t");
      let h = letter.includes("h");
      let i = letter.includes("i");

      if (n) {
        audiospace.play();
        console.log("space audio playing");
      } else if (t || h || i) {
        audio1.play();
        console.log("111audio 1 playing");
      } else {
        audio2.play();
        console.log("222audio 2 playing");
      }

      rando = Math.floor(Math.random() * 200) + 300;
      type(counter);

      step++;
      counter++;
      console.log(letter);
      //console.log(rando);
      //console.log(step);
    }, rando);
  } else {
    console.log("sorry11111");
  }
}

// start animation
window.addEventListener("click", event => {
  type(0);
  arr[0];
});
