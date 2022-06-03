<template>
  <div>
      <button>
          <font-awesome-icon v-if="!this.$store.state.darkMode" class="icon text-black dark:text-gray-100" :icon="['fas', 'toggle-off']" @click="darkMode"/>
          <font-awesome-icon v-if="this.$store.state.darkMode" class="icon text-black dark:text-gray-100" :icon="['fas', 'toggle-on']" @click="lightMode"/>
      </button>
  </div>
</template>

<script>
export default {
    methods: {
        darkMode() {
            this.$store.commit('toggleMode');
        },
        lightMode() {
            this.$store.commit('toggleMode')
        },
        
    }
}
</script>

<style scoped>
.icon {
  height: 25px
}
</style>
