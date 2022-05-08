<script setup lang="ts">
import VChart from 'vue-echarts'
import { data, title } from './data'
import handle from './handle'
import useChart from '@/core/useChart'

const { series, dates } = handle(data, title)
const option1 = useChart(dates, [series[0], series[1]], '中美两国政府干预强度对比图', {
  legend: {
    top: '10%',
  },
})
const option2 = useChart(dates, [series[2], series[3]], '中美两国新冠新增人数')
</script>

<template>
  <div class="root">
    <div class="chart">
      <v-chart :option="option1" autoresize />
    </div>
    <div class="chart">
      <v-chart :option="option2" autoresize />
    </div>
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
  width: 100%;
}

.chart {
  padding: 20px;
  height: 100vh;
}
</style>
