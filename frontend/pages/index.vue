<template>
  <section id="app">
    <div>
      <header>Not Vuex Data</header>
      <h1 class="m-1 w-10">{{count}}</h1>
      <button class="w-40 h-40 bg-black" @click="add"><div class="text-white">Click to add not vuex stuff</div></button>
    </div>
    <div>
      <header>From Vuex store</header>
      <h2 class="m-1 w-10">{{addStore}}</h2>
      <button class="w-40 h-40 bg-black" @click="add"><div class="text-white">Click to add not vuex stuff</div></button>
    </div>
    <h1></h1>
    
  </section>
</template>

<script>
// import {state} from "../store/index.js"
// import {mutations} from "../store/index.js"
export default {
  element: "#app",
  data(){
    return{
      count: 0
    }
  },
  computed: {
    addStore(){
      return this.$store.state.counter
    }
  },
  methods: {
    add(){
      return this.count++
    }
  }
}
</script>
