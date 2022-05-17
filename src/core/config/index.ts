import { setConfig } from './chartConfig'
import { useDarkMode } from '@/core/state/darkMode'

const { darkMode } = useDarkMode()

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
  darkMode,
})
