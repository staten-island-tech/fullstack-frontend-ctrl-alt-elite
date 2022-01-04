<template>
  <section>
      <h1 >Log In</h1>
      <form>
          <div>
              <h2>Username:</h2>
              <input type="text" class="text-base border-2 h-8 px-6 rounded-md border-inherit w-64">
          </div>
          <div>
              <h2 >Password:</h2>
              <input type="text" class="text-base border-2 h-8 px-6 rounded-md border-inherit w-64">
          </div>
        <input type="submit" value="Log In" class="text-base border-2 h-8 px-6 rounded-md border-inherit w-64">
      </form>
      <NuxtLink to="/SignUp">Don't have an account yet? Sign up.</NuxtLink>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>