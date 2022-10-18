export function getLanguageFromURL(pathname: string): string {
  const lang = pathname.match(/blog\/([ko]{2})\//)
  return lang ? lang[1] : 'en'
}

export function getPathnameFromLanguage(
  lang: string,
  pathname: string
): string {
  let newPath = ''
  const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//
  if (lang === 'ko') {
    let pathBySlash = pathname.split('/')
    const path = pathBySlash.pop()
    newPath = `${pathBySlash.join('/')}/${lang}/${path}`
  } else if (lang === 'en') {
    newPath = pathname.replace(langPathRegex, '/')
  } else {
    throw new Error('lang value does not match')
  }
  return newPath
}
