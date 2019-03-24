import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
