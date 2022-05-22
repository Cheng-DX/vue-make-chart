import { computed, ref } from 'vue'

const LOCAL_STORAGE_DARKMODE_KEY = 'darkMode'

function init() {
  if (localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY)) {
    return ref(localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY) === 'true')
  }
  else {
    localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, 'false')
    return ref(false)
  }
}
const darkMode = init()

function toggleDarkMode() {
  darkMode.value = !darkMode.value
  localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, darkMode.value.toString())
}

const color = computed(() => darkMode.value ? '#E5E7EB' : '#000')
const backgroundColor = computed(() => darkMode.value ? '#222' : '#fff')

export function useDarkMode() {
  return {
    darkMode,
    toggleDarkMode,
    color,
    backgroundColor,
  }
}
