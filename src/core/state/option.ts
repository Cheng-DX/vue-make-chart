import { ref } from 'vue'

const option: any = ref({})

function setOption(newOption: any) {
  option.value = newOption
}

export function useOption() {
  return {
    option,
    setOption,
  }
}
