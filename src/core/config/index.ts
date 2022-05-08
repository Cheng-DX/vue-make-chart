import { setConfig } from './chartConfig'

setConfig({
  yAxis: {
    type: 'value',
  },
  toolbox: {
    show: true,
    feature: {
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
        type: 'png',
        pixelRatio: 5,
      },
    },
  },
  legend: {
    show: true,
  },
})
