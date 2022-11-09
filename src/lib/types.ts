export interface Tweet {
  public_metrics: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
  created_at: string
  author_id: string
  edit_history_tweet_ids: string[]
  id: string
  text: string
  media: TweetImage[]
  referenced_tweets: ReferencedTweet[]
  author: {
    id: string
    profile_image_url: string
    url: string
    protected: boolean
    username: string
    name: string
    verified: boolean
  }
}

interface TweetImage {
  height: number
  width: number
  url?: string
  preview_image_url?: string
  media_key: string
  type: string
  variants?: any
}

interface ReferencedTweet {
  type: string
  author: any
  created_at: string
  author_id: string
  id: string
  edit_history_tweet_ids: any
  text: string
  public_metrics: any
  attachments: any
}
