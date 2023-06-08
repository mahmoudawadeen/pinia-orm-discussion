import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {createORM} from 'pinia-orm'


import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
    .use(piniaPluginPersistedstate)
    .use(createORM());

createApp(App).use(pinia).mount('#app')
