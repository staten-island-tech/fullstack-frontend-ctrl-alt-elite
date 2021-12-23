<template>
  <section id="app">
    <h1 class="m-10">{{count}}</h1>
    <button class="w-40 h-40 bg-black" @click="test"></button>
    <WelcomingNavBar/>
  </section>
</template>

<script>
export default {
  element: "#app",
  data(){
    return{
      count: 0,
      incrementBy: 1
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
       this.$store.dispatch("updateCount", this.incrementBy)
    },
    reset(){
       this.$store.commit("RESET")
    }
  }
}
</script>
