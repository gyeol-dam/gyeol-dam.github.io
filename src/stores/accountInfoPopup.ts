import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAccountInfoPopupStore = defineStore('accountInfoPopup', () => {
  const isPopupOpened = ref<boolean>(false)

  const handleAccountInfoPopupOpened = (open: boolean) => {
    isPopupOpened.value = open
  }

  return { isPopupOpened, handleAccountInfoPopupOpened }
})
