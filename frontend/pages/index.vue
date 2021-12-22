<template>
  <section id="app">
    <div>
      <header>Not Vuex Data</header>
      <h1 class="m-1 w-10">{{count}}</h1>
      <button class="w-40 h-40 bg-black" @click="add"><div class="text-white">Click to add normal vue data</div></button>
      <button class="w-40 h-40 bg-black" @click="res"><div class="text-white">Click to reset normal vue data</div></button>
    </div>
    <div>
      <header>From Vuex store</header>
      <h2 class="m-1 w-10">{{addStore}}</h2>
      <input v-model.number="reqinc" type="number" class="m-1 w-20" placeholder="Hello">
      <h3>Your are increasing by {{reqinc}}</h3>
      <button class="w-40 h-40 bg-black" @click="increment"><div class="text-white">Click to add vuex state</div></button>
      <button class="w-40 h-40 bg-black" @click="reset"><div class="text-white">Click to reset vuex syaye</div></button>
    </div>
    <h1></h1>
    
  </section>
</template>

<script>
export default {
  element: "#app",
  data(){
    return{
      count: 0,
      reqinc: 1
    }
  },
  computed: {
    addStore(){
      return this.$store.state.counter
    }
  },
  methods: {
    add(){
      this.count++
    },
    res(){
      this.count = 0
    },
    increment(){
       this.$store.commit("INCREMENT", this.reqinc)
    },
    reset(){
       this.$store.commit("RESET")
    }
  }
}
</script>
