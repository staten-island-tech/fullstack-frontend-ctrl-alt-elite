<template>
  <div >
    <DefaultNavBar />
    
      <ul>
        <li>
            <NuxtLink  class="font-bold text-xl transform h-64 w-1/5 hover:bg-blue-400 transition duration-500 hover:scale-125"  to="/profile/">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink  class="font-bold text-xl transform h-64  w-1/5 hover:bg-blue-400 transition duration-500 hover:scale-125" to="/profile/Following">Following</NuxtLink>

        </li>
        <li>
          <NuxtLink  class="font-bold text-xl transform h-64  w-1/5 hover:bg-blue-400 transition duration-500 hover:scale-125" to="/profile/Followers">Followers</NuxtLink>

        </li>
      </ul>
    <div  class="container">
    <NuxtChild />
    </div>
      
           
  </div>
</template>

<script>

 
export default {
  
   data(){
       return{  
         }
      },

   
   mounted ()
   {  } ,   
    
    

  methods: { 

     }
    
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
 
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}

.container {
   margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>