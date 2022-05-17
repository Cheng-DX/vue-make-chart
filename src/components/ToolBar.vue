<script setup lang="ts">
import { useDialog } from 'naive-ui'
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
</script>

<template>
  <div flex w-5em justify-evenly>
    <div
      icon-btn
      :class="darkMode ? 'i-carbon-moon' : 'i-carbon-sun'"
      @click="toggleDarkMode"
    />
    <a
      icon-btn
      i-carbon-logo-github
      href="https://github.com/Cheng-DX/vue-make-chart"
      :style="{ color }"
    />
    <div
      icon-btn
      i-carbon-help
      @click="help"
    />
  </div>
</template>

<style scoped>

</style>
