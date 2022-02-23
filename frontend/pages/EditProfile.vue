<template>
  <div>
     <DefaultNavBar />
      <section class=" grid grid-cols-2 gap-4 m-5  ">
        <!-- <button @click="getProfile()">TEST</button>
        <textarea id="" :value="abc"  name=""  cols="30" rows="10"></textarea> -->
          <img class="basis-5 rounded-full h-60 justify-self-center self-center p-0" :src="userProfile.data.profile_pic">

          <div class="grid grid-rows-3  ">
                <h1 class="h-10"> Name: <input v-model="userProfile.data.name" type="text" class="text-black"  ></h1> 
                <p>Description: <input v-model="userProfile.data.description" type="text" class="text-black"></p>
              <div class="grid grid-rows-1 grid-cols-2 gap-4">
                <div class="border-2 border-gray-50 self-end align-middle text-center" >Followers: 10</div>
                <div class="border-2  border-gray-50 self-end align-middle text-center">Following: {{ following }} </div>
              </div>
             
            <button @click="updateProfile"> Save</button>
            <button @click="getProfile"> Reset </button>

          </div>
      </section>
     <div class="grid grid-cols-1 divide-y-[3px] divide-yellow-500 text-center">
  <div></div>
  <div></div>
  <div></div>
</div>
      <section>

      </section>
  </div>
</template>

<script>

 
export default {
  
   data(){
       return{ 
         userProfile: { data : 'abc'},
        following: 0
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

        this.userProfile.data = data// JSON.stringify(data)
        // this.$store.commit('updateUserProfile',JSON.stringify(data));
        if (this.userProfile.data.following === "undefined")
        {
        
          this.following = 0; 
        } else {
          this.following = this.userProfile.data.following.length;
        }
        // return data;
      } catch (error) {
        // console.log("I dont care");
      }
    },
  async updateProfile() {
      try {
        const response = await fetch(`http://localhost:5000/profile`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(this.userProfile.data), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json()

        this.userProfile.data = data// JSON.stringify(data)
        // this.$store.commit('updateUserProfile',JSON.stringify(data));
        // return data;
      } catch (error) {
        // console.log("I dont care");
      }
    }

     }
    
}
</script>

<style>

</style>