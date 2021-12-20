<template>
  <section id="app">
    <h1 class="m-10">{{count}}</h1>
    <button class="w-40 h-40 bg-black" @click="test"></button>
  </section>
</template>

<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  methods: {
    test: function test(){
      this.count++
    }
  }
}
</script>
