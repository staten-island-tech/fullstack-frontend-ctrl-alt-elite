<template>
  <div >
     <FollowList :list="$parent.followingList" />

     
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
  },

   methods: { 
     
    },
   
     
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>