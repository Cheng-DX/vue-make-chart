<script setup lang="ts">
import { NInput, NInputGroup, NTag } from 'naive-ui'

defineProps<{
  root: any
}>()
</script>

<template>
  <div v-for="key in Object.keys(root)" :key="key" p-1rem>
    <n-tag v-if="Object.is(Number(key), NaN)">
      {{ key }}
    </n-tag>
    <div mt-10px border-x border-gray>
      <template v-if="Array.isArray(root[key])">
        <n-input-group v-if="typeof root[key][0] !== 'object' ">
          <n-input v-for="value in root[key]" :key="`${key}-${value}`" :value="value" />
        </n-input-group>
        <config-chart v-for="(value, index) in root[key]" v-else :key="index" :root="root[key]" />
      </template>
      <template v-else-if="typeof root[key] === 'object'">
        <config-chart :root="root[key]" />
      </template>
      <template v-else>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <n-input v-model:value="root[key]" wp-50 />
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
