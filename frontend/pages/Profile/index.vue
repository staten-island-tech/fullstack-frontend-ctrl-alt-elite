<template>
  <div class="flex items-center justify-center flex-col">
     <FollowList :list="this.$parent.followingList" />
  </div>
</template>


<script>


 
 
export default {
   mounted()  {
    this.$parent.Link1=true
    this.$parent.Link2=false
    this.$parent.Link3=false
  }  
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>