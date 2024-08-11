<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 font-easta-heavy pa-10"
  >
    <VCalendar expanded :attributes="attrs" class="vc-container" :step="0" hideArrows>
      <a slot="header-left-button" slot-scope="{ page }" @click="page.movePrevMonth()"> Prev </a>
      <a slot="header-right-button" slot-scope="{ page }" @click="page.moveNextMonth()"> Next </a>
    </VCalendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const attrs = ref([
  {
    key: 'wedding-day',
    highlight: {
      color: 'orange',
      fillMode: 'light',
      contentClass: 'italic'
    },
    dates: new Date(2024, 2, 9)
  }
])
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.vc-container :deep(.vc-weekday-1) {
  color: #638bf1;
}
.vc-container :deep(.vc-weekday-7) {
  color: #f16363;
}
</style>
