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
        status: "Not Started"},
    {title:"Learn how to play a musical instrument.",
        description:"I have always wanted to learn how to play a musical instrument, I have always felt being able to play an instrument would be great.",
        status: "Not Started"}, 
];
console.log(goals);
console.log(goals.length);
const goalList = document.querySelector("#goal-list");
console.log(goalList);
for (const goal of goals) {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = goal.title;
    article.appendChild(title);
    const description = document.createElement("p");
    description.textContent = goal.description;
    article.appendChild(description);
    const goalStatus = document.createElement("p");
    goalStatus.textContent = "Status: " + goal.status;
    article.appendChild(goalStatus);
    goalList.appendChild(article);
}