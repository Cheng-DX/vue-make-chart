<script setup lang="ts">
import { useDarkMode } from '@/core/state/darkMode'

const { darkMode, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div flex w-4em justify-evenly>
    <div
      icon-btn
      :class="darkMode ? 'i-carbon-moon' : 'i-carbon-sun'"
      @click="toggleDarkMode"
    />
    <div
      icon-btn
      i-carbon-logo-github
    />
  </div>
</template>

<style scoped>

</style>
