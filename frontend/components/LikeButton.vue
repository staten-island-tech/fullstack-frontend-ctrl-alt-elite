<template>
  <button>
      <font-awesome-icon v-if="liked" class="text-white" :icon="['far', 'heart']"/>
      <font-awesome-icon v-if="unliked" class="text-white" :icon="['fas', 'heart']"/>
  </button>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style>

</style>