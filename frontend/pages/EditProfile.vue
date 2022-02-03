<template>
  <div>
      <section>
          <img :src="this.$auth.user.picture">
          <h1 class="text-white">hello {{ this.$auth.user }}</h1>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>