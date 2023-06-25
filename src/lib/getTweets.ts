import { PlaywrightCrawler, Dataset } from 'crawlee'

export const getTweet = async (id: string) => {
  const crawler = new PlaywrightCrawler({
    async requestHandler({ page }) {
      //   await page.waitForSelector('div[data-testid="tweetText"]')
      //
      //   const text = await page.$eval(
      //     'div[data-testid="tweetText"]',
      //     (el) => el.textContent
      //   )
      //
      //   await page.waitForSelector('div[data-testid="Tweet-User-Avatar"]')
      //
      //   const profile_image_url = await page.$eval(
      //     'div[data-testid="Tweet-User-Avatar"] .css-9pa8cd',
      //     (el) => el.getAttribute('src')
      //   )
      //
      //   await Dataset.pushData({
      //     text: text,
      //     author: {
      //       profile_image_url: profile_image_url,
      //     },
      //   })
      // },

      // await page.waitForSelector('div[data-testid="tweetText"]')
      const text = await page
        .locator('div[data-testid="tweetText"]')
        .first()
        .textContent()

      const profile_image_url = await page
        .locator('div[data-testid="Tweet-User-Avatar"] .css-9pa8cd')
        .first()
        .getAttribute('src')

      await Dataset.pushData({
        text,
        author: {
          profile_image_url,
        },
      })
    },
    // headless: false,
  })

  await crawler.run([`https://twitter.com/user/status/${id}`])
}
