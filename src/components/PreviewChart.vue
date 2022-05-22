<script setup lang="ts">
import { ref, watch } from 'vue'
import VueEcharts from 'vue-echarts'
import defu from 'defu'
import { fetchExampleCode } from '@/core/example/fetchCode'
import { useDarkMode } from '@/core/state/darkMode'
import { config } from '@/core/config/chartConfig'
import { useOption } from '@/core/state/option'

const props = defineProps<{
  name: string
}>()

const { setOption } = useOption()
const loading = ref(false)
const chartRef = ref(null)
const option = ref<any>({})
const updateOptions = {
  silent: false,
  notMerge: true,
}

const { darkMode, color, backgroundColor } = useDarkMode()

let timer: undefined | number

watch(() => props.name, newVal => onInputName(newVal))

function onInputName(name: string) {
  if (name.startsWith('http')) {
    const targetPlace = '?c='
    name = name.substring(name.indexOf(targetPlace) + targetPlace.length, name.length)
  }
  if (name === '')
    return
  clearTimeout(timer)
  loading.value = false
  timer = setTimeout(() => {
    loading.value = true
    fetchExampleCode(name, chartRef.value).then(opt => {
      opt = defu(opt, config.value)
      option.value = opt
      setOption(opt)
      loading.value = false
      clearTimeout(timer)
    }).catch(() => {
      loading.value = false
      clearTimeout(timer)
    })
  }, 1000)
}
</script>

<template>
  <div
    class="border-1px border-solid border-#6b72801c"
    style="height: calc(100vh - 1rem)"
  >
    <vue-echarts
      ref="chartRef"
      :option="option"
      autoresize
      :update-options="updateOptions"
      :loading="loading"
      :loading-options="{
        text: 'Fetching...',
        color,
        textColor: color,
        maskColor: backgroundColor,
        fontSize: '1rem',
        lineWidth: 2,
      }"
      :theme="darkMode ? 'dark' : 'light'"
      style="height: 100%"
    />
  </div>
</template>
