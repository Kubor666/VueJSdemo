<template>
  <div id="app">
    <loading-screen v-if="isLoading" />

    <template v-else>
    <nav class="site-header sticky-top py-1 color-black">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2 d-none d-md-inline-block" href="/">Home</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Articles</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Categories</a>
        <a class="py-2 d-none d-md-inline-block" href="#">About me</a>
        <a class="py-2 d-none d-md-inline-block" href="/contact">Contact</a>
      </div>
    </nav>

  <router-view></router-view>
</template>
  </div>
</template>

<script>
import PostsExample from './components/Posts'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
export default {
  name: 'App',
  data() {return{isLoading: true }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  },
  components: {
    PostsExample,
    Contact,
    LoadingScreen
  }
}
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../static/layout.css";

</style>
