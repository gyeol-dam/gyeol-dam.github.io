<template>
  <div v-if="isPopupOpened">
    <transition name="modal" appear>
      <section class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__wrapper d-flex flex-column">
          <div class="d-flex flex-row-reverse">
            <v-btn
              icon
              density="compact"
              @click="handleAccountInfoPopupOpened(false)"
              class="close-button"
            >
              <v-icon icon="mdi-close" size="small"></v-icon>
            </v-btn>
          </div>
          <div class="modal__window justify-center align-center align-self-center">
            <v-list lines="two">
              <v-list-item v-for="accountInfo in ACCOUNT_INFO" :key="accountInfo">
                <v-list-item-content class="d-flex flex-row justify-space-between align-center">
                  <div class="d-flex flex-column">
                    <v-list-item-title class="flex-grow-1" :title="accountInfo.OWNER">
                      {{ accountInfo.OWNER + '(' + accountInfo.ROLE + ')' }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER }}
                    </v-list-item-subtitle>
                  </div>
                  <v-btn
                    variant="plain"
                    v-clipboard="accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER"
                  >
                    <v-icon small>mdi-content-copy</v-icon>
                  </v-btn>
                </v-list-item-content>
                <v-divider class="mt-2" />
              </v-list-item>
            </v-list>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAccountInfoPopupStore } from '@/stores/accountInfoPopup'
import { ACCOUNT_INFO } from '@/constants/wedding'

const { isPopupOpened } = storeToRefs(useAccountInfoPopupStore())
const { handleAccountInfoPopupOpened } = useAccountInfoPopupStore()
</script>
<style lang="scss" scoped>
@import '/src/styles/common.scss';

img {
  object-fit: cover;
}

.modal {
  position: fixed; /* 수정된 부분 */
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &__wrapper {
    width: 90%;
    border-radius: 0.4rem;
    height: 50%;
    justify-content: center;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
  }

  &__window {
    width: 100%;
    max-height: 90%;
    object-fit: cover;

    border-radius: 0.4rem;
    overflow: hidden;
    padding: 1rem;
    z-index: 999;

    background-color: white;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &-enter-to,
  &-leave {
    transition: opacity 0.4s ease;
  }
}

.close-button {
  position: relative;
  bottom: -10px;
  right: -10px;
  z-index: 1000; /* Ensure it's above other elements */
}
</style>
