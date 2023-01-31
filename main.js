let random = Math.round(Math.random() * 100);
console.log(random);
const inp = document.querySelector("#input");
const lifeCount = document.createElement("div");
const h3 = document.querySelector("h3");
const guess = document.createElement("h3");
h3.after(lifeCount);
lifeCount.after(guess);
const button = document.querySelector(".btn");
const span = document.getElementById("attempts");

let max = 100;
let min = 1;
let counter = 0;
let life = 5;
button.addEventListener("click", (e) => {
  e.preventDefault();
  let value = parseInt(inp.value);
  if (inp.value === "") {
    alert("Add a Number");
  } else {
    if (value > 100 || value < 0) {
      alert("Enter a number between 1-100");
    } else if (value === random) {
      alert(`You guessed right, number was ${value}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else if (life === 1) {
      alert(`You run out of life, number was ${random}`);
      window.location.reload();
    } else if (value < random) {
      min = value;
      guess.innerHTML = `Number is between -> ${min} and ${max}`;
      counter += 1;
      life -= 1;
      span.innerHTML = ` ${counter}`;
    } else if (value > random) {
      max = value;
      guess.innerHTML = `Number is between -> ${min} and ${max}`;
      counter += 1;
      life -= 1;
      span.innerHTML = counter;
    } else {
      alert("Input has to be a number");
    }
  }
  inp.value = "";
  inp.focus();
  lifeCount.innerHTML = `Remaining Life: ${life}`;
});
