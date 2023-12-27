const { mkdirSync, existsSync, writeFileSync } = require("fs");
const sharp = require("sharp");
const toICO = require("to-ico");
const { manifest } = require("./manifest.js");

const dimensions = [32, 96, 180, 512];
async function generateFavicon(sourcePath, destPath) {
  const buffer = await sharp(sourcePath).resize(16).toBuffer();
  return writeFileSync(destPath, await toICO(buffer));
}

(async () => {
  try {
    if (!existsSync("tmp")) {
      mkdirSync("tmp");
    }
    await generateFavicon("favicon.svg", "tmp/favicon.ico");
    dimensions.map(async (dimensions) => {
      const buffer = await sharp("favicon.svg")
        .resize(dimensions)
        .png()
        .toBuffer();
      sharp.cache(false);
      sharp(buffer).toFile(`tmp/favicon_${dimensions}x${dimensions}.png`);
    });
    writeFileSync("tmp/manifest.json", JSON.stringify(manifest));
  } catch (error) {
    console.error(error.message);
  }
})();
