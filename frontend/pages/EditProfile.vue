<template>
  <div>
      <section>
          <img :src="this.$auth.user.picture">
            <div>
                <h2 class="text-white">{{ this.$auth.user.nickname }}</h2>
                <p>This is the user description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, dolor? Numquam eaque omnis blanditiis.</p>
                <div class="text-white">
                    <div>### Followers</div>
                    <div>### Following</div>
                </div>
            </div>
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