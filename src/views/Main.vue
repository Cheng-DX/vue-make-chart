<script setup lang="ts">
import VueEcharts from 'vue-echarts'
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { fetchExampleCode } from '../core/example/fetchCode'

const message = useMessage()

const exampleName = ref('')
const option = ref({})

const updateOptions = {
  silent: false,
  notMerge: true,
}

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
  timer = setTimeout(() => {
    fetchExampleCode(name, message).then(opt => {
      option.value = opt
      clearTimeout(timer)
    })
  }, 600)
}
function beforInput() {
  exampleName.value = ''
}
</script>

<template>
  <div class="root">
    <input v-model="exampleName" class="name" @input="onInputName" @beforeinput="beforInput">
    <div class="chart">
      <vue-echarts
        :option="option" autoresize :update-options="updateOptions"
      />
    </div>
  </div>
</template>

<style scoped>
.root{
  min-height: 100vh;
  width: 100%;
  background-color: aqua;
  display: flex;
  flex-direction: column;
}
.chart{
  width: 100%;
  height: 500px;
}
.name{
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  outline: none;

}
</style>
