export async function fetchExampleCode(name: string) {
  const fullPath = `https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/examples/js/${name}.js`
  const data = await fetch(fullPath)
  const text = await data.text()
  // eslint-disable-next-line prefer-const
  let option: any = null
  // eslint-disable-next-line no-eval
  eval(text)
  return option
}
