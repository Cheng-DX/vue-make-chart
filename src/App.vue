<script setup lang="ts">
import VueEcharts from 'vue-echarts'
import { ref, watch } from 'vue'
import { fetchExampleCode } from './core/example/fetchCode'

const exampleName = ref('')
const option = ref({})

watch(exampleName, () => {
  fetchExampleCode(exampleName.value).then(opt => {
    option.value = opt
  })
})

const updateOptions = {
  notMerge: true,
}

</script>

<template>
  <div class="root">
    <input v-model="exampleName">
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
}
.chart{
  width: 100%;
  height: 500px;
}
</style>
