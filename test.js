const fse = require("fs-extra");

const cloner = require("./index");

fse.ensureDirSync("data");

cloner(
  "11ty/11ty-community/built-with-eleventy",
  "*.json"
).then(async (data) => fse.writeJSON("data/sites.json", data));

cloner(
  "11ty/11ty-website/src/_data/starters",
  "*.json"
).then(async (data) => fse.writeJSON("data/starters.json", data));

cloner(
  "11ty/11ty-website/src/_data/community",
  "*.js"
).then(async (data) => fse.writeJSON("data/community.json", data));

cloner(
  "11ty/11ty-website/src/_data/demos",
  "*.js"
).then(async (data) => fse.writeJSON("data/demos.json", data));

cloner(
  "11ty/11ty-website/src/_data/plugins",
  "*.json"
).then(async (data) => fse.writeJSON("data/plugins.json", data));
