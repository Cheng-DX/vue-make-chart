<script setup lang="ts">
import { NConfigProvider, NDialogProvider, NMessageProvider, darkTheme } from 'naive-ui'
import { useDarkMode } from './core/state/darkMode'
import Main from '@/views/Main.vue'

const { darkMode, color, backgroundColor } = useDarkMode()
</script>

<template>
  <n-config-provider
    :theme="darkMode ? darkTheme : null"
    button=""
  >
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
  </n-config-provider>
</template>

