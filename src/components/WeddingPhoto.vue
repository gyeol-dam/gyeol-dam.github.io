<template>
  <div
    data-aos="fade-up"
    data-aos-duration="2000"
    class="d-flex flex-column w-100 font-easta-heavy pa-10"
  >
    <div class="sub-title">우리의 기록</div>
    <v-row>
      <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
        <v-col :cols="image.cols">
          <div data-aos="fade-up" data-aos-duration="2000">
            <v-img
              :src="`https://bw-yj.github.io/images/photo${imgIdx}.png`"
              cover
              alt="test"
              height="100%"
              @click="handleImageClick(imgIdx)"
            ></v-img>
          </div>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script setup>
import { useimagePopupStore } from '@/stores/imagePopup'
const { handleImagePopupOpened, setImageNo } = useimagePopupStore()

const imageLayout = [
  { cols: 12 },
  { cols: 6 },
  { cols: 6 },
  { cols: 12 },
  { cols: 6 },
  { cols: 6 },
  { cols: 6 },
  { cols: 6 }
]

const handleImageClick = (img) => {
  setImageNo(img)
  handleImagePopupOpened(true)
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
