const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

const degit = require("degit");
const glob = require("fast-glob");

async function cloner(repo, destFileGlob = "*") {
  const destDir = repo.split("/").pop();
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
    const _file = path.join(repo, path.basename(file));
    return Object.assign({ _file }, require(file));
  });
  // Delete all the "temp" files.
  await fs.rm(tmpDir, {force: true, recursive: true});
  return data;
}

module.exports = cloner;
