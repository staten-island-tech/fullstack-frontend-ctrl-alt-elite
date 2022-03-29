<template>
  <section class="h-screen" :class="{ dark : $store.state.darkMode }">
    <div class="bg-white dark:bg-dark-gray min-h-full h-auto">
    <DefaultNavBar  />
      <!-- <div id="body">

      </div> -->
     
      <ul>
         
      
        <li>
            <NuxtLink  class="link link-underline link-underline-black text-gray-500 font-bold text-xl"  to="/profile"   >Profile </NuxtLink>
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
    <div   class="bg-white dark:bg-dark-gray min-h-full h-auto container">
      <p> {{$store.state.followInfo.name}} </p>
    <NuxtChild  :userid="$store.state.otherIDInfo.email" />
    </div>
      
     </div>      
  </section>
</template>

<script>
 
// import WAVES from 'vanta/dist/vanta.waves.min'
// import * as THREE from 'three'
// import DBFunctions from "~/DBFunctions";

export default {
  
  data(){
       return { } 
    
    },
    
  async mounted ()
   { 
  //    this.vantaEffect = WAVES({
  //     el: "#body",
  //     THREE,
  //     color: 0x000000,
  // waveHeight: 20,
  // shininess: 50,
  // waveSpeed: 1.5,
  // zoom: 0.75
  //   });
    //  await DBFunctions.getInfo(this.$auth.user.email,this.info);
 

       
    } ,   
 
  
  // beforeDestroy() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // },
   
   

    

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
  /* background-color: #1c1c1c; */
  /* border: 3px solid rgb(27, 25, 25);
  border: 3px (linear-gradient(to right, red, purple)); */
   border-style: solid;
  border-width: 3px;
  border-image: conic-gradient( magenta, blue, magenta) 1;

  padding: 10px;
  border-radius: 12px;

}
a.nuxt-link-exact-active {
  color:blue; 
  text-decoration: underline #3500D3 3px;
  font-weight : bold;
  
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

  #body {
    height: 5rem;
    width: 5rem;
  }

</style>