console.log("Hello from script.js!");
console.log(goals);
console.log(goals.length);
const goalList = document.querySelector("#goal-list");
console.log(goalList);
let goalCount = 1;
for (const goal of goals) {
    console.log(goalCount);
    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = goalCount + ". " + goal.title;
    article.appendChild(title);
    const description = document.createElement("p");
    description.textContent = goal.description;
    article.appendChild(description);
    const category = document.createElement("p");
    category.textContent = "Category: " + goal.category;
    article.appendChild(category);

    // Status section: a box at the bottom of the card with the status and a short note
    const statusSection = document.createElement("div");
    statusSection.className = "status-section";

    const goalStatus = document.createElement("p");
    goalStatus.className = "status";
    goalStatus.textContent = "Status: ";
    const statusBadge = document.createElement("span");
    // Turns "In Progress" into "in-progress" so the CSS can give each status its own color
    statusBadge.className = "status-badge " + goal.status.toLowerCase().replace(" ", "-");
    statusBadge.textContent = goal.status;
    goalStatus.appendChild(statusBadge);
    statusSection.appendChild(goalStatus);

    const note = document.createElement("p");
    note.className = "note";
    if (goal.note) {
        note.textContent = "Note: " + goal.note;
    } else {
        note.textContent = "Note: nothing yet.";
        note.classList.add("empty");
    }
    statusSection.appendChild(note);

    article.appendChild(statusSection);
    goalList.appendChild(article);
    goalCount++;
}

// ---------- Summary at the top: how many goals per status and per category ----------
// These lists match the allowed values in the README, so a group with 0 goals still shows up
const statuses = ["Not Started", "In Progress", "Completed"];
const categories = [
    "Health & Wellness",
    "Money & Career",
    "Family & Community",
    "Travel & Adventure",
    "Learning & Creativity",
    "Wild Card",
];

// Counts how many goals have a given value, e.g. countGoals("status", "Completed")
function countGoals(field, value) {
    let count = 0;
    for (const goal of goals) {
        if (goal[field] === value) {
            count++;
        }
    }
    return count;
}

// Builds one row of the summary: a heading, then a little chip for each value with its count
function makeSummaryRow(heading, field, values) {
    const row = document.createElement("div");
    row.className = "summary-row";

    const rowTitle = document.createElement("h3");
    rowTitle.textContent = heading;
    row.appendChild(rowTitle);

    const chips = document.createElement("div");
    chips.className = "summary-chips";
    for (const value of values) {
        const chip = document.createElement("span");
        chip.className = "summary-chip";
        if (field === "status") {
            // Reuse the status badge colors from the cards
            chip.classList.add("status-badge", value.toLowerCase().replace(" ", "-"));
        } else {
            // Turns "Health & Wellness" into "health-wellness" so each category gets its own color
            chip.classList.add(value.toLowerCase().replace(" & ", "-").replace(" ", "-"));
        }
        chip.textContent = value + ": " + countGoals(field, value);
        chips.appendChild(chip);
    }
    row.appendChild(chips);
    return row;
}

const summary = document.querySelector("#goal-summary");

const completedCount = countGoals("status", "Completed");
const total = document.createElement("p");
total.className = "summary-total";
total.textContent = completedCount + " of " + goals.length + " goals completed";
summary.appendChild(total);

summary.appendChild(makeSummaryRow("By status", "status", statuses));
summary.appendChild(makeSummaryRow("By category", "category", categories));
