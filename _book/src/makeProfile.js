const puppeteer = require("puppeteer");

const makeProfile = async (githubId) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`<div id='github-profile-card' data-id='${githubId}' />`);
  await page.addScriptTag({ url: "https://unpkg.com/github-profile-card-component@latest/lib/scripts/index.js" });
  await page.setViewport({ width: 650, height: 320 });
  await page.waitFor(2000);
  await page.screenshot({ path: `images/${githubId}.jpeg`, type: "jpeg", quality: 100 });
  await browser.close();
};

(async () => {
  await makeProfile("simsimjae");
})();
