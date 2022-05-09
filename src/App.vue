<script setup lang="ts">
import { NDialogProvider, NMessageProvider } from 'naive-ui'
import Main from '@/views/Main.vue'
</script>

<template>
  <n-message-provider placement="bottom-left">
    <n-dialog-provider>
      <Main />
    </n-dialog-provider>
  </n-message-provider>
</template>
