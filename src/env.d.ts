/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly TWITTER_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
