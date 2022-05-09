// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as echarts from 'echarts'

export function fetchExampleCode(name: string, message: any) {
  const fullPath = `https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/examples/js/${name}.js`

  return new Promise((resolve, reject) => {
    fetch(fullPath)
      .then(async res => {
        if (res.ok) {
          const text = await res.text()
          // eslint-disable-next-line prefer-const
          let option: any = null
          try {
          // eslint-disable-next-line no-eval
            eval(text)
            resolve(option)
          }
          catch (e: any) {
            let errorMessage = '暂不支持该图表'
            if (e.message.includes('$ is not defined'))
              errorMessage = '该图表含有未知数据'

            message.error(errorMessage)
            reject(errorMessage)
          }
        }
        else {
          message.error(`No such code: ${name}`)
          reject(new Error(`No such code: ${name}`))
        }
      })
      .catch(e => {
        message.error('Network error')
        reject(e)
      })
  })
}
