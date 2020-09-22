import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./assets/sass/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
