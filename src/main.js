// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

Vue.use(VueRouter);

const routes = [

  {
    path: '/', component: Posts
  },

  {
    path: '/contact',component: Contact
  }

];

const router= new VueRouter({routes: routes})

Vue.config.productionTip = false

Vue.component('loading-screen', {
 template: '<span :title="isLoading"></span>',
 props: ['isLoading'],
 data () {
   message: ''
   return {
     pleaseWaitInstance: null
   }
 },
 mounted () {
   this.updatePleaseWait()
 },
 beforeUpdate () {
   this.updatePleaseWait()
 },
 methods: {
   updatePleaseWait () {
     if (this.isLoading && this.pleaseWaitInstance == null) {
       this.pleaseWaitInstance = pleaseWait({
         logo: 'https://pathgather.github.io/please-wait/assets/images/pathgather.png',
         backgroundColor: '#f46d3b',
         loadingHtml: '<p class="loading-message">A good day to you fine user!</p>'
       })
     }
     if (!this.isLoading && this.pleaseWaitInstance != null) {
       this.pleaseWaitInstance.finish()
     }
   }
 }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    isLoading: true
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  },
  router: router,
  components: { App },
  template: '<App/>'
})
