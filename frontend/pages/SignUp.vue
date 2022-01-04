<template>
  <section>
      <h1>Sign Up</h1>
      <form>
          <div>
              <h2>Email:</h2>
              <input type="text">
          </div>
          <div>
              <h2>Username:</h2>
              <input type="text">
          </div>
          <div>
              <h2>Password:</h2>
              <input type="text">
          </div>
          <div>
              <h2>Comfirm Password:</h2>
              <input type="text">
          </div>
        <input type="submit" value="Sign Up">
      </form>
      <NuxtLink to="/Login">Already have an account? Log in.</NuxtLink>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>