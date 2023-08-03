import { z } from 'zod'

const API_URL = 'https://cdn.syndication.twimg.com'

const TweetResultSchema = z
  .object({
    id_str: z
      .string()
      .max(40)
      .regex(/^[0-9]+$/),
    text: z.string(),
    user: z.object({
      name: z.string(),
      screen_name: z.string(),
      profile_image_url_https: z.string().url(),
    }),
    favorite_count: z.number(),
    created_at: z.string().datetime(),
    photos: z
      .array(
        z.object({
          url: z.string().url(),
          width: z.number(),
          height: z.number(),
        })
      )
      .optional(),
    video: z
      .object({
        variants: z.array(
          z
            .object({
              type: z.string(),
              src: z.string().url(),
            })
            .optional()
        ),
      })
      .optional(),
  })
  .transform(({ id_str, user, favorite_count, photos, video, ...rest }) => {
    return {
      ...rest,
      id: id_str,
      author: {
        name: user.name,
        username: user.screen_name,
        profile_image_url: user.profile_image_url_https,
      },
      like_count: favorite_count,
      media: photos?.map((image) => {
        return {
          url: image.url,
          width: image.width,
          height: image.height,
        }
      }),
      video: {
        src: video?.variants[0].src,
        content_type: video?.variants[0].type,
      },
    }
  })

export type Tweet = z.infer<typeof TweetResultSchema>

export class TwitterApiError extends Error {
  status: number
  data: any

  constructor({
    message,
    status,
    data,
  }: {
    message: string
    status: number
    data: any
  }) {
    super(message)
    this.name = 'TwitterApiError'
    this.status = status
    this.data = data
  }
}

export async function getTweet(id: string): Promise<Tweet | undefined> {
  const url = new URL(`${API_URL}/tweet-result`)

  url.searchParams.set('id', id)
  const res = await fetch(url.toString())
  const isJson = res.headers.get('content-type')?.includes('application/json')
  const data = isJson ? await res.json() : undefined

  const parsedData = TweetResultSchema.parse(data)

  if (res.ok) {
    return parsedData
  }

  if (res.status === 404) {
    return
  }
}
