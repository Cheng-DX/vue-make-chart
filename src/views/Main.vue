<script setup lang="ts">
import { ref } from 'vue'
import { NInput, useDialog, useMessage } from 'naive-ui'
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
  <div class="flex min-h-100vh root">
    <div flex flex-col max-h-100vh wp-50 class="panel">
      <div class="title">
        <span>Code or link</span>
      </div>
      <n-input
        v-model:value="exampleName"
        placeholder="Type code or link..."
        :style="{ color }"
        style="width: calc(100% - 2.3rem)"
        class="p-0.3rem m-1rem text-1rem"
        @beforeinput="beforeInput"
      />
      <div class="title">
        <span>Configs</span>
      </div>
      <div class="flex-1 overflow-y-auto p-0.3rem m-1rem border-1px border-solid border-#6b72801c">
        <config-chart :root="option" />
      </div>
    </div>
    <div flex flex-col max-h-100vh wp-50 class="panel">
      <div justify-between class="title">
        <span>Preview</span>
        <tool-bar />
      </div>
      <preview-chart :name="exampleName" class="p-0.3rem m-1rem" />
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

@media screen and (max-width: 768px) {
  .root {
    flex-direction: column;
  }
  .title {
    margin-top: 0;
  }
  .panel{
    width: 100%;
  }
}
</style>
