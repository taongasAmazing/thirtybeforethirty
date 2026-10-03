console.log("Hello from script.js!");
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