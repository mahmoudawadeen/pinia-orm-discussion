import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {createORM} from 'pinia-orm'


const pinia = createPinia()
    .use(createORM());

createApp(App).use(pinia).mount('#app')
