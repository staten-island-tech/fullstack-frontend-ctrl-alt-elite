<template>
  <div >
    <DefaultNavBar />
    
      <ul>
        <li>
            <NuxtLink  class="link link-underline link-underline-black text-gray-500 font-bold text-xl"  to="/profile/">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink  class="link link-underline link-underline-black text-gray-500  font-bold text-xl" to="/profile/Following"  >Following  {{$store.state.followInfo.following}} </NuxtLink>

        </li>
        <li>
          <NuxtLink   class="link link-underline link-underline-black text-gray-500 font-bold text-xl" to="/profile/Followers">Followers  {{$store.state.followInfo.followers}}   </NuxtLink>

        </li>
        <li>
          <NuxtLink  class="link link-underline link-underline-black text-gray-500  font-bold text-xl" to="/profile/Projects" >Projects  {{$store.state.followInfo.projects}}</NuxtLink>

        </li>
      </ul>
    <div  class="container">
    <NuxtChild  :userid="$auth.user.email" />
    </div>
      
           
  </div>
</template>

<script>
 
import DBFunctions from "~/DBFunctions";
 
export default {
  
   data(){
       return{  
         info: {
            followers:0,
            following:0,
            projects:0,
            }
       } 
    
    },
   
   async mounted ()
   { 
     await DBFunctions.getInfo(this.$auth.user.email,this.info);
 

     this.$store.commit('updateFollowInfo', this.info)
    } ,   
    
    

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
   margin-top: 20px;
  width: 50%;
  background-color: #1c1c1c;
  /* border: 3px solid rgb(27, 25, 25);
  border: 3px (linear-gradient(to right, red, purple)); */
   border-style: solid;
  border-width: 3px;
  border-image: conic-gradient( magenta, blue, magenta) 1;

  padding: 10px;
  border-radius: 12px;

}
a.nuxt-link-exact-active {
  color:white;
  text-decoration: underline #3500D3 3px;
}

.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#3500D3, #3500D3)
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}

</style>