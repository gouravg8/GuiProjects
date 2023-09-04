import planets from "./solarSys.mjs";
let select = document.querySelector("#selectPlanets");
let submit = document.querySelector("#submit");
let calculated = document.querySelector('.calculated')
calculated.style.display = 'hidden'
calculated.style.background = 'transparent'
document.addEventListener("DOMContentLoaded", () => {
  planets.forEach((planet) => {
    let option = document.createElement("option");
    option.value = planet.name;
    option.textContent = planet.name;
    select.appendChild(option);

  });
});

submit.addEventListener("click", (e) => {
  let planetName = document.querySelector(".planetName");
  let weight = document.querySelector(".weight");
  let enterNum = document.querySelector(".enterNum").value;
  calculated.style.background = 'white'
  let planetImg = document.querySelector(".planetImg");
  let weightPreText = document.querySelector('.weightPreText')
  e.preventDefault();
  let selectIndex = select.selectedIndex;
  let selectOption = select.options[selectIndex];

  planetImg.src = planets[selectIndex].svg;

  weightPreText.textContent = 'The weight of the Object on'
  planetName.textContent = planets[selectIndex].name;


  let weightFormula = planets[selectIndex].gravity * enterNum;
  weight.textContent = Math.floor(weightFormula) + "N";
});
