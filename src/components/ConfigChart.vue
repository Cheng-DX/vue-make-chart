<script setup lang="ts">
/* eslint-disable vue/valid-v-model */
/* eslint-disable vue/no-mutating-props */
import { NButton, NInput, NInputGroup, NSpace } from 'naive-ui'
import { ref } from 'vue'

const props = defineProps<{
  root: any
}>()

function isObject(obj: any) {
  return obj !== null && typeof obj === 'object'
}
const length = Object.keys(props.root).length
const show = ref(Array(length).fill(false))

function icon(show: boolean) {
  return show ? '' : 'icon-rotate'
}
</script>

<template>
  <div v-for="(key, index) in Object.keys(root)" :key="key" p-1rem>
    <n-button
      v-if="Object.is(Number(key), NaN)"
      secondary
      strong
      size="small"
      type="success"
      @click="show[index] = !show[index]"
    >
      {{ key }}
      <span :class="icon(show[index])" class="i-carbon-caret-down ml-0.3rem transition-transform duration-250ms" />
    </n-button>
    <div v-show="show[index]" mt-10px border-x border-gray>
      <template v-if="Array.isArray(root[key])">
        <n-input-group v-if="!isObject(root[key][0])">
          <n-input v-for="(_, index) in root[key]" :key="`${key}-${index}`" v-model:value="root[key][index]" />
        </n-input-group>
        <config-chart v-for="(value, index) in root[key]" v-else :key="index" :root="root[key][index]" />
      </template>
      <template v-else-if="typeof root[key] === 'object'">
        <config-chart :root="root[key]" />
      </template>
      <template v-else>
        <n-input v-model:value="root[key]" wp-50 />
      </template>
    </div>
  </div>
</template>

<style scoped>
.icon-rotate{
  transform: rotate(-90deg);
}
</style>
