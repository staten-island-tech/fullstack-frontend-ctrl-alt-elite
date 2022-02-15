<template>
  <div>
     <DefaultNavBar />
      <section>
        <!-- <button @click="getProfile()">TEST</button>
        <textarea id="" :value="abc"  name=""  cols="30" rows="10"></textarea> -->
      
          <div class="border-white border-2 h-15 w-80 left-2 ">
             <h1 class="text-left">Name: 
               <input type="text">{{ userProfile.data.name }} 
              </h1>
              <p class="text-left">Description:
                <input type="text"> {{userProfile.data.description}}
              </p>
          </div>
          <div class="flex h-36 justify-evenly ">
            <img class="rounded-full" :src="userProfile.data.profile_pic">
            <div class="border-2 h-20 w-60 border-gray-50 self-end align-middle text-center" >Followers: 10</div>
            <div class="border-2 h-20 w-60 border-gray-50 self-end align-middle text-center">Following: 15</div>
          </div>
          <!-- <h1 class="text-white">hello {{ $auth.user }}</h1> -->
      </section>
  </div>
</template>

<script>

 
export default {
  
   data(){
       return{ 
         userProfile: { data : 'abc'} 
         }
      },
  
   mounted ()
   { this.getProfile()} ,   
    

  methods: {
async getProfile() {
      try {
        const response = await fetch(`http://localhost:5000/getProfile`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(this.$auth.user), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json()

        this.userProfile.data = data[0] // JSON.stringify(data)
        // this.$store.commit('updateUserProfile',JSON.stringify(data));

        // return data;
      } catch (error) {
        // console.log("I dont care");
      }
    }, 
     }
}
</script>

<style>

</style>