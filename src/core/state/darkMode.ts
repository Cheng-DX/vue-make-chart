import { computed, ref } from 'vue'

function init() {
  if (localStorage.getItem('darkMode')) { return ref(localStorage.getItem('darkMode') === 'true') }
  else {
    localStorage.setItem('darkMode', 'false')
    return ref(false)
  }
}
const darkMode = init()

function toggleDarkMode() {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value.toString())
}

const color = computed(() => darkMode.value ? '#E5E7EB' : '#000')
const backgroundColor = computed(() => darkMode ? '#222' : '#fff')

export function useDarkMode() {
  return {
    darkMode,
    toggleDarkMode,
    color,
    backgroundColor,
  }
}
