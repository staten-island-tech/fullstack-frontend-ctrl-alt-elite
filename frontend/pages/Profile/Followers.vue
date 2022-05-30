<template>
  <div class="flex items-center justify-center flex-col">
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
    this.$parent.Link1=false
    this.$parent.Link2=true
    this.$parent.Link3=false
     

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