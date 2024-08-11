<script setup lang="ts">
import WeddingMainView from '@/views/WeddingMainView.vue'
import ImagePopup from '@/components/util/ImagePopup.vue'
import AccountInfoPopup from '@/components/util/AccountInfoPopup.vue'
</script>

<template>
  <v-app id="app">
    <header></header>
    <body>
      <div class="main">
        <ImagePopup />
        <AccountInfoPopup />
        <WeddingMainView />
      </div>
    </body>
  </v-app>
</template>
