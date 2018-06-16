<template>
  <div class="containter">
    <div class="row justify-content-center">
      <div class="col-10">
        <b-img src="https://media.gq.com/photos/5a00f2bf98002d2e253671cd/master/pass/collections-suits.png" fluid-grow alt="Fluid-Grow image" />
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
             <tr v-for="post in posts" :key="post.id">
              <td>{{post.title}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default{
    name: 'PostExample',
    data(){

      return {
        posts: []
      }
    },
    created(){

      axios.get('http://blog.local/articles', {
        responseType: 'json',
        headers: {
          'Accept': 'application/json'
        }
      }).then(resp =>{
        this.posts = resp.data.articles
      });
    }
  }

</script>


<style>

</style
