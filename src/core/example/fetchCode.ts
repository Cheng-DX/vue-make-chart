/* eslint-disable @typescript-eslint/no-unused-vars */
import * as echarts from 'echarts'
import $ from 'jquery'
import ecStat from 'echarts-stat'
import { util } from '../shared'

const ROOT_PATH = 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'

export function fetchExampleCode(name: string, instance: any) {
  const fullPath = `${ROOT_PATH}/examples/js/${name}.js`

  const { chart: myChart, root: chartDom } = instance
  return new Promise<any>((resolve, reject) => {
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
            util.message?.success('Load succeed.')
            resolve(option)
          }
          catch (e: any) {
            const errorMessage = 'Unsupported chart, try to use another chart.'
            util.message?.error(errorMessage)
            reject(errorMessage)
          }
        }
        else {
          const errorMessage = `Invalid code or link: '${name}'.`
          util.message?.error(errorMessage)
          reject(new Error(errorMessage))
        }
      })
      .catch(e => {
        util.message?.error('Unkown error, try again or contact us.')
        reject(e)
      })
  })
}
