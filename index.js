const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

const degit = require("degit");
const del = require("del");
const fse = require("fs-extra");
const glob = require("fast-glob");

async function cloner(repo, destDir, destName, destFileGlob = "*") {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), destDir + "_"));

  const emitter = degit(repo, {
    cache: true,
    force: true,
    verbose: true,
  });

  const destGlob = path.join(tmpDir, destFileGlob);
  await emitter.clone(tmpDir);
  const files = await glob(destGlob);
  const data = files.map((file) => {
    return Object.assign({ _file: path.basename(file) }, require(file));
  });
  // Delete all the "temp" files.
  await del(destGlob, { force: true });
  await fse.ensureDir(destDir);
  await fse.writeJSON(path.join(destDir, destName), data);
}

module.exports = cloner;
