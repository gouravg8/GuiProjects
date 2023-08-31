import thChallenge2Data from "./thChallenge2Data.mjs";
// * Color change of year and dateTime
let year = document.querySelector(".year");
let dateAndTime = document.querySelector(".dateTime");
let d = new Date();
dateAndTime.textContent = d.toDateString() + " " + d.toLocaleTimeString();

// set colors for changing in every one second
let colors = [
  "Yellow",
  "Red",
  "Green",
  "Azure",
  "Teal",
  "Silver",
  "Purple",
  "Gray",
  "Orange",
  "Aquamarine",
  "Coral",
  "Wheat",
  "Lime",
  "Crimson",
  "Khaki",
  "Magenta",
  "Plum",
  "Olive",
  "Cyan",
];

// set interval to change color in each one second
setInterval(() => {
  let d = new Date();
  let rand = Math.floor(Math.random() * colors.length);
  let rand2 = Math.floor(Math.random() * colors.length);
  year.style.color = colors[rand];

  dateAndTime.style.backgroundColor = colors[rand2];
  dateAndTime.textContent = d.toDateString() + " " + d.toLocaleTimeString();
}, 1000);

// wrapper class div(main div)
let wrapper = document.querySelector(".wrapper");

// select the .allList [classed] item to put all the items on it
let allLists = document.querySelector(".allLists");

// iterate to each challenge
thChallenge2Data.challenges.forEach((challenge) => {
  // destructure the challenge object
  const { name, topics, status } = challenge;
  let div = document.createElement("div"); //create a div
  div.classList.add("listItems");

  let challengeName = document.createElement("p"); //created a paragraph for challenge name
  challengeName.textContent = name;
  div.appendChild(challengeName);

  let details = document.createElement("details"); // created details for the dropdown
  let summary = document.createElement("summary"); // for the summary of details
  summary.textContent = name.slice("30 Days of ".length);
  details.appendChild(summary);

  let summaryContent = document.createElement("ul");
  topics.forEach((topic) => {
    let summaryContentList = document.createElement("li"); //content which will be placed on details
    summaryContentList.textContent = topic;
    summaryContentList.style.listStyle = "none";
    summaryContent.appendChild(summaryContentList);
  });
  details.appendChild(summaryContent);

  let statuss = document.createElement("p"); //created p tag for status {Done, Ongoing, Comming}
  statuss.textContent = status;
  div.appendChild(details); //appendchild element details to div
  div.appendChild(statuss); // appendchild element statuss to div

  // change the background color of the each challenge according to its status
  if (status == "Done") {
    div.style.backgroundColor = "green";
  } else if (status == "Ongoing") {
    div.style.backgroundColor = "orange";
  } else {
    div.style.backgroundColor = "rgb(255, 40, 0)";
  }
  allLists.appendChild(div); // append the whole div inside the allList div tag on HTML
});

// * Author section
let auth = thChallenge2Data.author;
const {
  firstName,
  lastName,
  titles,
  qualifications,
  socialLinks,
  bio,
  skills,
} = thChallenge2Data.author;

// author name
let authorName = document.createElement("h2");
authorName.classList.add("authorName");
authorName.textContent = `${firstName} ${lastName}`;
wrapper.appendChild(authorName);

// social links
let socialLinksDiv = document.createElement("ul");
socialLinksDiv.classList.add("socialList");
socialLinks.forEach((social) => {
  let li = document.createElement("li");
  li.innerHTML = social.fontawesomeIcon;
  socialLinksDiv.appendChild(li);
});
wrapper.appendChild(socialLinksDiv);

// bio
let bioText = document.createElement("p");
bioText.setAttribute("id", "bio");
bioText.textContent = bio;
wrapper.appendChild(bioText);

// proffestion
let professionDiv = document.createElement("div");
professionDiv.setAttribute("id", "professionDiv");

let titlesDiv = document.createElement("div");
titlesDiv.setAttribute("id", "titlesDiv");
let titleText = document.createElement("h3");
titleText.textContent = "Titles";
titlesDiv.appendChild(titleText);
for (const [key, val] of titles) {
  let titleListItem = document.createElement("li");
  titleListItem.textContent = `${key} ${val}`;
  titlesDiv.appendChild(titleListItem);
}

let skillsDiv = document.createElement("div");
skillsDiv.setAttribute("id", "skillsDiv");
let skillText = document.createElement("h3");
skillText.textContent = "Skills";
skillsDiv.appendChild(skillText);
for (const sk of skills) {
  let skillsListItem = document.createElement("li");
  skillsListItem.textContent = "✅ " + sk;
  skillsDiv.appendChild(skillsListItem);
}

let qualificationsDiv = document.createElement("div");
qualificationsDiv.setAttribute("id", "qualificationsDiv");
let qualificationText = document.createElement("h3");
qualificationText.textContent = "Qualification";
qualificationsDiv.appendChild(qualificationText);
for (const ql of qualifications) {
  let qualificationListItem = document.createElement("li");
  qualificationListItem.textContent = ql;
  qualificationsDiv.appendChild(qualificationListItem);
}

professionDiv.appendChild(titlesDiv);
professionDiv.appendChild(skillsDiv);
professionDiv.appendChild(qualificationsDiv);
wrapper.appendChild(professionDiv);

// * Keywords
let keywordTitle = document.createElement("h3");
keywordTitle.setAttribute("id", "keywordTitle");
keywordTitle.textContent = "Keywords";
let keywordDiv = document.createElement("div");
keywordDiv.setAttribute("class", "keywordListDiv");
for (const keywordd of thChallenge2Data.keywords) {
  let keywordListItem = document.createElement("p");
  keywordListItem.setAttribute("class", "keywordListItems");
  keywordListItem.textContent = `#${keywordd}`;
  let rand = Math.floor(Math.random() * colors.length);
  keywordListItem.style.backgroundColor = colors[rand];
  keywordDiv.appendChild(keywordListItem);
}

wrapper.appendChild(keywordTitle);
wrapper.appendChild(keywordDiv);
