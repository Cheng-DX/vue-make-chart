<script setup lang="ts">
import { ref } from 'vue'
import { useDialog, useMessage } from 'naive-ui'
import PreviewChart from '../components/PreviewChart.vue'
import ConfigChart from '../components/ConfigChart.vue'
import ToolBar from '@/components/ToolBar.vue'
import { useDarkMode } from '@/core/state/darkMode'
import { util } from '@/core/shared'
import { useOption } from '@/core/state/option'

util.message = useMessage()
util.dialog = useDialog()

const { color } = useDarkMode()
const exampleName = ref('')

const { option } = useOption()

function beforeInput(e: Event) {
  if (e instanceof InputEvent && e?.data!.length > 1)
    exampleName.value = ''
}
</script>

<template>
  <div class="root">
    <div class="config-panel">
      <div class="title">
        <span>Code or link</span>
      </div>
      <input v-model="exampleName" placeholder="Type code or link..." :style="{ color }" class="name"
        @beforeinput="beforeInput">
      <div class="title">
        <span>Config</span>
      </div>
      <div class="config">
        <config-chart :root="option" />
      </div>
    </div>
    <div class="chart-panel" wp-100>
      <div justify-between class="title">
        <span>Preview</span>
        <tool-bar />
      </div>
      <preview-chart :name="exampleName" />
    </div>
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
  background-color: #fff;
  display: flex;
}

.config-panel {
  width: 100%;
  height: 100vh;
}

.config {
  width: calc(100% - 40px);
  height: calc(100% - 190px);
  margin: 10px;
  padding-inline: 5px;
  overflow-y: auto;
  border: 1px solid #90949a1c;
}

.chart-panel {
  width: 100%;
}

.title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.name {
  height: 50px;
  width: calc(100% - 40px);
  margin: 10px;
  padding-inline: 5px;

  border: 1px solid #90949a1c;
  border-radius: 3px;
  outline: none;

  text-align: center;
  font-size: 1rem;
  font-family: 'consolas';

  background-color: transparent;

}

@media screen and (max-width: 768px) {
  .root {
    flex-direction: column;
  }

  .title {
    margin-top: 0;
  }

  .chart {
    height: calc(100vh - 220px);
  }
}
</style>
