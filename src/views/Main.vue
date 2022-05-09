<script setup lang="ts">
import VueEcharts from 'vue-echarts'
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { fetchExampleCode } from '../core/example/fetchCode'
import HelpIcon from '../icon/HelpIcon.vue'

const message = useMessage()

const exampleName = ref('')
const option = ref({})

const updateOptions = {
  silent: false,
  notMerge: true,
}

const loading = ref(false)
const chartRef = ref(null)
const { setTimeout, clearTimeout } = window
let timer: undefined | number
function onInputName() {
  let name = exampleName.value
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
    fetchExampleCode(name, message, chartRef.value).then(opt => {
      // chartRef.value.chart.clear()
      option.value = opt
      loading.value = false
      clearTimeout(timer)
    }).catch(() => {
      loading.value = false
      clearTimeout(timer)
    })
  }, 1000)
}
function beforeInput(e: Event) {
  if (e instanceof InputEvent && e.data.length > 1)
    exampleName.value = ''
}
</script>

<template>
  <div class="root">
    <div class="config-panel">
      <div class="title">
        <span>Code or link</span>
        <help-icon style="margin-left: 0.3rem" />
      </div>
      <input
        v-model="exampleName"
        placeholder="Type code or link..."
        class="name"
        @input="onInputName"
        @beforeinput="beforeInput"
      >
    </div>
    <div class="chart-panel">
      <div class="title">
        Preview
      </div>
      <div class="chart">
        <vue-echarts
          ref="chartRef"
          :option="option"
          autoresize
          :update-options="updateOptions"
          :loading="loading"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.root{
  min-height: 100vh;
  background-color: #fff;
  display: flex;
}
.config-panel{
  width: 100%;
}
.chart-panel{
  width: 100%;
}
.title{
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.chart{
  height: calc(100vh - 140px);
  width: calc(100% - 70px);
  padding: 20px;
  margin: 10px 10px ;
  border: 1px solid #6b72801c;
}
.name{
  height: 50px;
  width: calc(100% - 40px);
  margin: 10px;
  padding-inline: 5px;

  border: 1px solid #6b72801c;
  border-radius: 3px;
  outline: none;

  text-align: center;
  font-size: 1rem;
  font-family: 'consolas';

  background-color: transparent;
  color: #000;

}

@media screen and (max-width: 768px) {
  .root{
    flex-direction: column;
  }
  .title{
    margin-top: 0;
  }
  .chart{
    height: calc(100vh - 220px);
  }
}
</style>
