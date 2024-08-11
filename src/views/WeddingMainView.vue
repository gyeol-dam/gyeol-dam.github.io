<script setup lang="ts">
import WeddingTitle from '@/components/WeddingTitle.vue'
import WeddingInformation from '@/components/WeddingDayInfo.vue'
import WeddingGreeting from '@/components/WeddingGreeting.vue'
import WeddingHallMap from '@/components/WeddingHallMap.vue'
import WeddingPersonaInfo from '@/components/WeddingPersonaInfo.vue'
import WeddingAdditional from '@/components/WeddingAdditional.vue'
import WeddingPhoto from '@/components/WeddingPhoto.vue'
</script>

<template>
  <div class="d-flex flex-column w-100 h-100 ga-10">
    <WeddingTitle />
    <WeddingGreeting />
    <WeddingPersonaInfo />
    <WeddingInformation />
    <WeddingPhoto />
    <WeddingHallMap />
    <WeddingAdditional />
  </div>
</template>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
