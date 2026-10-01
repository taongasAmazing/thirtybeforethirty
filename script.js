console.log("Hello from script.js!");
const goals =[
    {title:"Ship a small project from start to finish.",
        description:"This is a simple project to learn how to build a website from scratch. This is something I have always wanted to do but didn't take the time doing it for myself and in commemoration of my 30th birthday, is the best excuse to finally do it.",
        status:"In Progress"},
    {title:"Learn how to cook.",
        description:"I have always wanted to learn how to cook and this is the perfect opportunity to do so.",
        status:"Completed"},
    {title:"Learn a new language.",
        description:"I have always wanted to learn a new language, I have always felt being able to speak more than just my mother tongue and english would be great.",
        status:"Not Started"},
];
console.log(goals);
console.log(goals.length);
const goalList = document.querySelector("#goal-list");
console.log(goalList);
const title = document.createElement("h3");
title.textContent = goals[0].title;
goalList.appendChild(title);
const description = document.createElement("p");
description.textContent = goals[0].description;
title.appendChild(description);
const status = document.createElement("p");
status.textContent = goals[0].status;
title.appendChild(status);
goalList.appendChild(title);
