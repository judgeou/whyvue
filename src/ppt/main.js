import Vue from 'vue'
import Main from './ppt.vue'

window.vm = new Vue({
  el: '#ppt',
  render: h => h(Main)
})
