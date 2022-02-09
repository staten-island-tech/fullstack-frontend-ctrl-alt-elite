<template>
  <section id="app">
    <h1 class="m-10 text-lg text-black">{{store}}</h1>
    <input v-model.number="incrementBy" type="number" class="m-10 text-lg text-black">
    <button class="w-40 h-40 border-4" @click="addStore"></button>
    <WelcomingNavBar/>
  </section>
</template>

<script>
export default {
  element: "#app",
  data(){
    return{
      incrementBy: 1
    }
  },
  computed: {
    store(){
      return this.$store.state.counter
    }
  },
  methods: {
    addStore(){
      this.$store.commit("INCREMENT_COUNT", this.incrementBy)
    }
  }
}
</script>
