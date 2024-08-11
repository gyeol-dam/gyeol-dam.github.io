import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'
import { createPinia } from 'pinia'
import Clipboard from 'v-clipboard'
const pinia = createPinia()
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VCalendar, {})
  .use(pinia)
  .use(Clipboard)
  .mixin({
    created() {
      AOS.init()
    }
  })
  .mount('#app')
