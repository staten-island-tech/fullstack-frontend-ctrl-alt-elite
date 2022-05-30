<template>
  <div class="flex items-center justify-center flex-col">
     <FollowList :list="this.$parent.followingList" />
  </div>
</template>


<script>


 
 
export default {
    
   data(){
       return{ 
      
         }
      },
   mounted()  {
    this.$parent.defaultLink=true;
  }  
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>