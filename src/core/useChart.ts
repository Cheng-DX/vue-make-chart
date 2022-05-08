import { ref } from 'vue'
import { defu } from 'defu'
import type { Item, Serie } from './types'
import { config } from './config/chartConfig'

export default function useChart(
  xdata: Item[],
  series: Serie[],
  name: string,
  options?: any,
) {
  const chart = {
    title: {
      text: name,
    },
    xAxis: {
      data: xdata,
    },
    series,
  }
  return ref(defu(options, defu(chart, config.value)))
}

