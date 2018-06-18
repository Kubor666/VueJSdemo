<template>
<h1>JH</h1>
</template

<script>
Vue.component('loading_screen', {
 template: '<span :title="isLoading"></span>',
 props: ['isLoading'],
 data () {
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
</script>

<style>
</style>
