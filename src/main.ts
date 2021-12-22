import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import globalProperties from './plugins/globalProperties'
import directivesRouter from './directives/router'
import filters from './plugins/filters'

import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
installElementPlus(app)
globalProperties(app)
directivesRouter(app)
filters(app)
app.use(store).use(router).mount('#app')
