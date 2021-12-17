<template>
  <section id="app">
    <h1>{{count}}</h1>
    <button @click="add"></button>
  </section>
</template>

<script>
export default {
  el: "#app",
  name: 'IndexPage',
  data(){
    return{
      count: 0
    }
  },
  methods: {
    add: function(){
      return this.data.count++
    }
  }
}
</script>

<style>
button{
  width: 10rem;
}
</style>
