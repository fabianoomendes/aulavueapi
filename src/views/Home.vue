<template>
  <div class="home p-5">
    <table class="my-5 table table-striped">
      <thead>
        <th>Id</th>
        <th>Title</th>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{produto.id}}</td>
          <td>{{produto.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    produtos(){
      return this.$store.state.produtos;
    }
  }
}
</script>

<style>
  body{
    padding: 25px;
  }
</style>
