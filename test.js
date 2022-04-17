const cloner = require("./index");

cloner(
  "11ty/11ty-community/built-with-eleventy",
  "data",
  "sites.json",
  "*.json"
).then(() => console.log("fetched sites"));

cloner(
  "11ty/11ty-website/src/_data/starters",
  "data",
  "starters.json",
  "*.json"
).then(() => console.log("fetched starters"));
