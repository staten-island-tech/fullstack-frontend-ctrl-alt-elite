<template>
  <div >
      <FollowList :list="$parent.followersList"  />
  </div>
</template>

<script>
 
 
 
export default {
  
    
   data(){
       return{ 
         }
      }, 
    
  mounted()  {
    this.$parent.defaultLink=false;
  },

  methods: {


     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>