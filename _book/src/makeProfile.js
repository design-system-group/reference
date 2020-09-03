const puppeteer = require("puppeteer");

const makeProfile = async (options) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`<div id='github-profile-card' data-id='${options.id}' ${options.isCircleImage && "data-is-circle-image"} data-height=${options.height} />`);
  await page.addScriptTag({ url: "https://unpkg.com/github-profile-card-component@latest/lib/scripts/index.js" });
  await page.setViewport({ width: 650, height: 310, deviceScaleFactor: 4 });
  await page.waitFor(2000);
  await page.screenshot({ path: `images/${options.id}.jpeg`, type: "jpeg", quality: 100 });
  await browser.close();
};

(async () => {
  await makeProfile({
    id: "simsimjae",
    height: "270px",
  });
})();

(async () => {
  await makeProfile({
    id: "kschoi",
    isCircleImage: true,
  });
})();
