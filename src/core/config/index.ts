import { setConfig } from './chartConfig'

setConfig({
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
  backgroundColor: 'transparent',
})
