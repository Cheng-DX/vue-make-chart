import { ref } from 'vue'
import defu from 'defu'

export const config = ref({})

export function setConfig(newConfig: object) {
  config.value = newConfig
}

export function addConfig(extroConfig: object) {
  config.value = defu(extroConfig, config.value)
}
