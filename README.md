# Thirty Before Thirty

A personal website for tracking 30 goals, milestones, and adventures before turning 30. Built from scratch with HTML, CSS, and JavaScript as a project to learn how websites work.

Live site: https://taongasamazing.github.io/thirtybeforethirty/

## Files

- `index.html`: page structure, header, and footer content
- `goals.js`: the list of all my goals. This is the file to edit when updating content.
- `style.css`: layout, colors, and responsive styling
- `script.js`: loops over the goals in `goals.js`, builds a numbered card for each one, and adds them to the page
- `README.md`: project notes

## Allowed values

These must match exactly, including capitalization. A typo won't show an error, but it will break filtering later.

**Status:** `Not Started`, `In Progress`, `Completed`

**Category:** `Health & Wellness`, `Money & Career`, `Family & Community`, `Travel & Adventure`, `Learning & Creativity`, `Wild Card`

## Update a goal

1. Open `goals.js`.
2. Find the goal and change its `title`, `description`, `status`, or `category`.

## Add a goal

1. Copy an existing goal object, from `{` to `},`.
2. Paste it in the right theme section. The order in the file is the order on the page.
3. Change the values.
4. Make sure there's a comma after the closing `}`.
5. Refresh the page and check the console for errors.

## Publish changes

1. In `index.html`, increase the version number on any file you changed (for example `v=2` to `v=3`). This stops browsers from showing an old cached copy.

```html
<link rel="stylesheet" href="style.css?v=2">
<script src="goals.js?v=2" defer></script>
<script src="script.js?v=2" defer></script>
```

2. Commit and push:

```
git add .
git commit -m "Describe what changed"
git push origin main
```

3. Wait 1–2 minutes, then check the live site.

## View locally

Open the project folder in VS Code, right-click `index.html`, and choose **Open with Live Server**.