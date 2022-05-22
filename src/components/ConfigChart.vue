<script setup lang="ts">
/* eslint-disable vue/valid-v-model */
/* eslint-disable vue/no-mutating-props */
import { NButton, NColorPicker, NInput, NInputGroup, NSwitch } from 'naive-ui'
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
    <n-button v-if="Object.is(Number(key), NaN)" secondary strong size="small" type="success"
      @click="show[index] = !show[index]">
      {{ key }}
      <span :class="icon(show[index])" class="i-carbon-caret-down ml-0.3rem transition-transform duration-250ms" />
    </n-button>
    <div v-show="show[index]" mt-10px style="border-left: 1px dotted gray">
      <template v-if="Array.isArray(root[key])">
        <n-input-group v-if="!isObject(root[key][0])">
          <n-input v-for="(_, index) in root[key]" :key="`${key}-${index}`" v-model:value="root[key][index]" />
        </n-input-group>
        <template v-for="(value, index) in root[key]" :key="index" v-else>
          <span style="margin-left: 50%;">{{ `${key}[${index}]` }}</span>
          <config-chart :root="root[key][index]" />
        </template>
      </template>
      <template v-else-if="typeof root[key] === 'object'">
        <config-chart :root="root[key]" />
      </template>
      <template v-else>
        <n-color-picker v-if="key.toLowerCase().includes('color')" v-model:value="root[key]" w-15rem />
        <n-switch v-else-if="typeof root[key] === 'boolean'" v-model:value="root[key]" />
        <n-input v-else-if="typeof root[key] === 'string'" v-model:value="root[key]" />
        <n-input v-else v-model:value="root[key]" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.icon-rotate {
  transform: rotate(-90deg);
}
</style>
