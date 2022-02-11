<template>
  <button>
      <font-awesome-icon v-if="notFollowing" class="text-white" :icon="['fas', 'user-plus']"/>
  </button>
</template>

<script>
export default {
data(){
    return {
        notFollowing: true, 
    }
  }
}
</script>

<style>

</style>