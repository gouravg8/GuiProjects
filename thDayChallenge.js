// * Exercise: Level 1

//     Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// let p1 = document.querySelector("p");
// console.log(p1);

//     Get each of the the paragraph using document.querySelector('#id') and by their id
// let p12 = document.querySelector("#p1");
// let p2 = document.querySelector("#p2");
// let p3 = document.querySelector("#p3");
// let p4 = document.querySelector("#p4");
// console.log(p12, p2, p3, p4);

//     Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// let pall = document.querySelectorAll("p");
// console.log(pall);

//     Loop through the nodeList and get the text content of each paragraph
// pall.forEach((ps) => console.log(ps.innerText));

//     Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// p4.textContent = "Fourth Paragraph";
// console.log(p4);

//     Set id and class attribute for all the paragraphs using different attribute setting methods
// pall.forEach((ps) => ps.setAttribute("class", "paraHuMain"));
// console.log(pall);

// * Exercise: Level 2

//     Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// p1.style.color = 'green'
// p2.style.fontFamily = 'Gilroy'
// p3.style.backgroundColor = 'yellow'
//     Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// pall.forEach((elem, index) => {
//   index % 2 == 0 ? (elem.style.color = "green") : (elem.style.color = "red");
// });
//     Set text content, id and class to each paragraph

// * Exercise: Level 3
//  DOM: Mini project 1
let year = document.querySelector(".year");
let dateAndTime = document.querySelector(".dateTime");
let d = new Date();
// dateAndTime.textContent = `${d.toDateString()}`;
dateAndTime.textContent = d.toDateString() + " " + d.toLocaleTimeString();

let challanges = document.querySelector("ul");
// let completedChallenges = "";
// let ongoingChallenges = "";
// let comingChallenges = "";
// The year color is changing every 1 second
// The date and time background color is changing every on seconds
let colors = [
  "Maroon",
  "Red",
  "Yellow",
  "Salmon",
  "Green",
  "Sky blue",
  "Aqua",
  "Grey",
  "Purple",
  "Peach",
];
setInterval(() => {
  let d = new Date();
  let rand = Math.floor(Math.random() * colors.length);
  let rand2 = Math.floor(Math.random() * colors.length);
  year.style.color = colors[rand];

  dateAndTime.style.backgroundColor = colors[rand2];
  dateAndTime.textContent = d.toDateString() + " " + d.toLocaleTimeString();
}, 1000);
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
let li = document.querySelectorAll("li");
li.forEach((lis) => {
  if (lis.textContent.includes("Done")) {
    lis.style.backgroundColor = "green";
  } else if (lis.textContent.includes("Ongoing")) {
    lis.style.backgroundColor = "yellow";
  } else {
    lis.style.backgroundColor = "red";
  }

  //   console.log(lis.textContent.includes("done"));
});
