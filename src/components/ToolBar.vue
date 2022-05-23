<script setup lang="ts">
import { NButton, useDialog } from 'naive-ui'
import { ref } from 'vue'
import { useDarkMode } from '@/core/state/darkMode'
import helpContent from '@/components/helpContent/index'

const { darkMode, toggleDarkMode, color } = useDarkMode()

const dialog = useDialog()
function help() {
  dialog.info({
    title: 'How to use?',
    content: () => helpContent,
    style: {
      width: '60%',
      height: '60%',
    },
  })
}

const version = ref({
  name: 'padding...',
  href: '',
})
async function fetchVersion() {
  const data = await fetch('https://api.github.com/repos/Cheng-DX/vue-make-chart/releases/latest')
  const json = await data.json()
  version.value.name = json.name
  version.value.href = json.html_url
}
fetchVersion()
</script>

<template>
  <div flex-center>
    <div flex w-5em justify-evenly>
      <div
        icon-btn
        :class="darkMode ? 'i-carbon-moon' : 'i-carbon-sun'"
        @click="toggleDarkMode"
      />
      <div
        icon-btn
        i-carbon-help
        @click="help"
      />
      <a
        icon-btn
        i-carbon-logo-github
        href="https://github.com/Cheng-DX/vue-make-chart"
        :style="{ color }"
      />
    </div>
    <n-button
      secondary
      strong
      type="success"
      size="small"
      class="text-0.9rem mr-0.5rem ml-0.5rem"
    >
      <a
        :href="version.href"
        link-decoration-none
        :style="{ color }"
      >{{ version.name }}</a>
    </n-button>
  </div>
</template>

