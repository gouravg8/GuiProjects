//* Exercises: Level 1

//     Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
let iseven = (n) => n % 2 == 0;

let prime = (n) => {
  for (let ind = 2; ind <= n / 2; ind++) {
    if (n % ind == 0) return false;
  }
  return true;
};

let genBtn = document.querySelector("#generateNumbers");
let numContainer = document.querySelector(".nums");
genBtn.addEventListener("click", () => {
  let inputField = document.querySelector("#inputNumbers").value;
  // console.log(inputField);
  numContainer.textContent = ''
  for (let i = 0; i <= inputField; i++) {
    let p = document.createElement("p");
    p.textContent = i;
    p.classList.add("allNums");
    // Even numbers background is green
    // Odd numbers background is yellow
    // Prime numbers background is red
    if (iseven(i)) {
      p.style.backgroundColor = "green";
    }
    if (!iseven(i)) {
      p.style.backgroundColor = "yellow";
    }
    if (prime(i)) {
      i < 2 ? p.style.backgroundColor : (p.style.backgroundColor = "red");
    }
    numContainer.appendChild(p);
  }
});
