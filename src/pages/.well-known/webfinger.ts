export async function get() {
  const response = await fetch(
    'https://planet.moe/.well-known/webfinger?resource=acct:jcha0713@planet.moe'
  )

  const data = await response.json()
  return { body: JSON.stringify(data, null, 2) }
}
