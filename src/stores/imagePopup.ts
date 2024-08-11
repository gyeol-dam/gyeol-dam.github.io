import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useimagePopupStore = defineStore('imagePopup', () => {
  const selectedImage = ref<string>('00')
  const isPopupOpened = ref<boolean>(false)

  const setImageNo = (number: string) => {
    selectedImage.value = number
  }

  const handleImagePopupOpened = (open: boolean) => {
    isPopupOpened.value = open
  }
  watch(selectedImage, () => {
    console.log('test', selectedImage.value)
  })

  watch(isPopupOpened, () => {
    console.log('test22', isPopupOpened.value)
  })

  return { isPopupOpened, selectedImage, handleImagePopupOpened, setImageNo }
})
