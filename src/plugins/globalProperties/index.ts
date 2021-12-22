import { App } from 'vue'

import { routes } from '@/router'
import request from '@/utils/request'

export default (app: App<Element>): void => {
  app.config.globalProperties.$axios = () => request
  app.config.globalProperties.$navigation = () => routes
}
