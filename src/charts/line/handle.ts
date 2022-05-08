import type { Serie } from '@/core/types'

export default function handle(data: string, title: string) {
  const series: Serie[] = []
  title.split(',').forEach((item, index) => {
    if (index !== 0) {
      series.push({
        name: item,
        type: 'line',
        data: [],
      })
    }
  })
  const dates: string[] = []
  data.split('\n').forEach(line => {
    const contents = line.split(',')
    const [date, china1, usa1, china2, usa2] = contents
    dates.push(date)
    series[0].data.push(china1)
    series[1].data.push(usa1)
    series[2].data.push(china2)
    series[3].data.push(usa2)
  })

  return { series, dates }
}
