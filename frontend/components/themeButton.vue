<template>
  <div>
      <button>
          <font-awesome-icon v-if="!$store.state.darkMode" class="text-black dark:text-gray-100" :icon="['fas', 'toggle-off']" @click="darkMode"/>
          <font-awesome-icon v-if="$store.state.darkMode" class="text-black dark:text-gray-100" :icon="['fas', 'toggle-on']" @click="lightMode"/>
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

<style>
@import '@fortawesome/fontawesome-svg-core/styles.css';
</style>