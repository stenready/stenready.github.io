/**scripts */
import './js/libs.js' 
import './js/start.js'
/**styles */
import './scss/helpers/libs.scss'
import './scss/style.scss'

/**vue */
window.Vue = require('vue')

Vue.component('app-component', require('./components/App.vue').default)

const app = new Vue({
  el: '#app',
  data(){
    return {
      
    }
  }
})
/**vue */

