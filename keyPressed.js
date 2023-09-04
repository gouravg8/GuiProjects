let container = document.querySelector(".container");
let title = document.querySelector(".title");
let p = document.createElement("p");
let span = document.createElement("span");
document.addEventListener("keydown", (e) => {
  span.textContent = e.key;
  span.setAttribute('class', 'span')
  span.style.textAlign = 'center'
  title.textContent = `You have pressed `;
  title.append(span);
  p.textContent = e.keyCode;
  p.setAttribute("class", "keyValue");
  container.appendChild(p);
});
