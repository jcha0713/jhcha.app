import { PlaywrightCrawler, Dataset } from 'crawlee'

export const getTweet = async (id: string) => {
  const crawler = new PlaywrightCrawler({
    async requestHandler({ page }) {
      const text =
        (await page
          .locator('div[data-testid="tweetText"]')
          .first()
          .textContent()) || ''

      const profile_image_url = await page
        .locator('div[data-testid="Tweet-User-Avatar"] .css-9pa8cd')
        .first()
        .getAttribute('src')

      const username = await page
        .locator('div[data-testid="User-Name"]')
        .getByRole('link')
        .allInnerTexts()

      const created_at = await page.getByRole('time').first().textContent()

      const public_metrics = await page
        .getByTestId('app-text-transition-container')
        .allInnerTexts()

      const media = await page
        .getByTestId('tweetPhoto')
        .locator('img')
        .getAttribute('src')

      console.log(media)

      await Dataset.pushData({
        media,
        text,
        created_at,
        author: {
          name: username[0],
          username: username[1],
          profile_image_url,
        },
        public_metrics: {
          retweet_count: public_metrics[0] || 0,
          reply_count: public_metrics[1] || 0,
          like_count: public_metrics[2] || 0,
        },
      })
    },
    // headless: false,
  })

  await crawler.run([`https://twitter.com/user/status/${id}`])
}
