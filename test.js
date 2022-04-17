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

cloner(
  "11ty/11ty-website/src/_data/community",
  "data",
  "community.json",
  "*.js"
).then(() => console.log("fetched community"));

cloner(
  "11ty/11ty-website/src/_data/demos",
  "data",
  "demos.json",
  "*.js"
).then(() => console.log("fetched community"));

cloner(
  "11ty/11ty-website/src/_data/plugins",
  "data",
  "plugins.json",
  "*.json"
).then(() => console.log("fetched plugins"));
