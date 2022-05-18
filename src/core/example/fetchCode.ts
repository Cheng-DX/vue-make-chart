/* eslint-disable @typescript-eslint/no-unused-vars */
import * as echarts from 'echarts'
import $ from 'jquery'
import ecStat from 'echarts-stat'

const ROOT_PATH = 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/examples/js'

export function fetchExampleCode(name: string, message: any, instance: any) {
  const fullPath = `${ROOT_PATH}/${name}.js`

  const { chart: myChart, root: chartDom } = instance
  return new Promise((resolve, reject) => {
    fetch(fullPath, {
      method: 'GET',
    })
      .then(async res => {
        if (res.ok) {
          const text = await res.text()
          // eslint-disable-next-line prefer-const
          let option: any = null
          try {
          // eslint-disable-next-line no-eval
            eval(text)
            message.success('Load succeed.')
            resolve(option)
          }
          catch (e: any) {
            const errorMessage = 'Unsupported chart, try to use another chart.'
            message.error(errorMessage)
            reject(errorMessage)
          }
        }
        else {
          const errorMessage = `Invalid code or link: '${name}'.`
          message.error(errorMessage)
          reject(new Error(errorMessage))
        }
      })
      .catch(e => {
        message.error('Unkown error, try again or contact us.')
        reject(e)
      })
  })
}
