<template>
  <div class="d-flex flex-column w-100 font-easta-heavy align-center ga-10">
    <div class="d-flex flex-row justify-center w-80 pb-10">
      <v-btn
        block
        variant="outlined"
        rounded="xl"
        size="medium"
        min-width="300"
        class="pb-3 pt-3"
        @click="handleAccountInfoPopupOpened(true)"
      >
        마음 전하실 곳
      </v-btn>
    </div>

    <!--    <v-banner-->
    <!--      class="banner"-->
    <!--      lines="one"-->
    <!--      text="간편하게 예식일에 맞춰 축하 화환을 전해보세요. "-->
    <!--      stacked-->
    <!--      sticky-->
    <!--    >-->
    <!--      <template v-slot:actions>-->
    <!--        <v-btn-->
    <!--          variant="outlined"-->
    <!--          color="deep-blue-accent-4"-->
    <!--          href="http://agent.maruw.co.kr/mobile/product?shop=bojagicard&idx=71a17b723e677a2371527fa088e726dd"-->
    <!--          target="_blank"-->
    <!--          >바로 주문-->
    <!--        </v-btn>-->
    <!--      </template>-->
    <!--    </v-banner>-->
  </div>
</template>

<script setup>
import { useAccountInfoPopupStore } from '@/stores/accountInfoPopup'

const { handleAccountInfoPopupOpened } = useAccountInfoPopupStore()
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.banner {
  background: #0f172a;
  color: white;
}
</style>
