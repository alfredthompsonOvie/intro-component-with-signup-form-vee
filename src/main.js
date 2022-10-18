import { createApp } from 'vue'
import App from './App.vue'
import veeValidatePlugin from "./includes/validation";

import './assets/main.css'

createApp(App).use(veeValidatePlugin).mount('#app')
