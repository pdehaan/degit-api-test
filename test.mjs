import fse from "fs-extra";

import cloner from "./index.js";

await fse.ensureDir("data");

const sites = await cloner("11ty/11ty-community/built-with-eleventy", "*.json");
await fse.writeJSON("data/sites.json", sites);

const community = await cloner("11ty/11ty-website/src/_data/community", "*.js");
await fse.writeJSON("data/community.json", community);

const demos = await cloner("11ty/11ty-website/src/_data/demos", "*.js");
await fse.writeJSON("data/demos.json", demos);

const plugins = await cloner("11ty/11ty-website/src/_data/plugins", "*.json");
await fse.writeJSON("data/plugins.json", plugins);

const starters = await cloner("11ty/11ty-website/src/_data/starters", "*.json");
await fse.writeJSON("data/starters.json", starters);
