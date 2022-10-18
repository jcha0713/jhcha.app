import type { FunctionalComponent } from 'preact'
import { getPathnameFromLanguage } from '@i18n/util'

const LangSelector: FunctionalComponent<{
  translated: boolean
  lang: string
}> = ({ lang, translated }) => {
  const langs = { English: 'en', 한국어: 'ko' }
  return (
    translated && (
      <div>
        <select
          className="language-select"
          value={lang || 'en'}
          onChange={(e) => {
            const target = e.target as HTMLOptionElement
            const newLang = target.value
            console.log('pathname: ', window.location.pathname)
            const newPathname = getPathnameFromLanguage(
              newLang,
              window.location.pathname
            )
            window.location.pathname = newPathname
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
