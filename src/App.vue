<script setup lang="ts">
import { NDialogProvider, NMessageProvider } from 'naive-ui'
import { useDarkMode } from './core/state/darkMode'
import Main from '@/views/Main.vue'

const { color, backgroundColor } = useDarkMode()
</script>

<template>
  <n-message-provider placement="bottom-left">
    <n-dialog-provider>
      <Main
        :style="{
          backgroundColor,
          color,
        }"
      />
    </n-dialog-provider>
  </n-message-provider>
</template>
