import data from "./data.mjs";

let countryListContainer = document.querySelector(".countriesList");
data.forEach((countryName) => {
  const countryElement = document.createElement("p");
  countryElement.textContent = countryName;
  countryListContainer.appendChild(countryElement);
});
// console.log(data);
