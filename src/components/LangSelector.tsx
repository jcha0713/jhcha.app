import type { FunctionalComponent } from 'preact'

const LangSelector: FunctionalComponent<{
  translated: boolean
  lang: string
}> = ({ translated, lang }) => {
  const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//
  const langs = { English: 'en', 한국어: 'ko' }
  return (
    translated && (
      <div>
        <select
          className="language-select"
          value={lang}
          onChange={(e) => {
            const target = e.target as HTMLOptionElement
            const newLang = target.value
            if (newLang === 'ko') {
              let pathBySlash = window.location.pathname.split('/')
              const path = pathBySlash.pop()
              window.location.pathname = `/blog/${newLang}/${path}`
            } else if (newLang === 'en') {
              let newPath = window.location.pathname.replace(langPathRegex, '/')
              window.location.pathname = newPath
            }
          }}
        >
          {Object.entries(langs).map(([key, value]) => {
            return (
              <option value={value} key={value}>
                <span>{key}</span>
              </option>
            )
          })}
        </select>
      </div>
    )
  )
}

export default LangSelector
