import { App } from 'vue'
import store from '@/store'

export default (app: App<Element>): void => {
  app.directive('router', {
    mounted: function (el, binding) {
      const actionName = binding.value
      const roles = store.state
      console.log(actionName)
      if (
        JSON.stringify(roles.data).indexOf(JSON.stringify(actionName)) === -1
      ) {
        el.parentNode && el.parentNode.removeChild(el)
        el.style.display = 'none'
      }
    },
  })
}
