<template>
  <div>
    <div class="body">
      <h1 class="text-center  heading-text" style="padding-top: 120px;">My Account</h1>
      <div class="card mx-auto my-3 p-5 w-75 user-card">
        <div class="m-3 text-center">
          <img
            :src="$store.state.user?.profileLUrl"
            :alt="$store.state.user?.firstName"
            class="img-fluid mb-5"
            style="max-width: 50%; border-radius: 50%"
          />
          <h2 class="">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite style="color:black">{{ $store.state.user?.userRole }}</cite>
        </div>
        <div>
          <div class="card mb-5 p-3 info-card">
            <span
              ><strong>User ID: </strong>{{ $store.state.user?.userID }}</span
            >
            <br />
            <br />
            <span
              ><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span
            >
            <br />
            <br />
            <!-- <span><strong>Password: </strong>{{ $store.state.user?.userPass }}</span> -->
          </div>
          <div class="d-flex justify-content-between">
            
            
            <button @click="Logout" type="submit" class="btn btn-secondary">log out</button>
         
             <div>
      <button class="btn btn-secondary" style="margin-right: 1rem;"><EditProf/></button>
      <button @click.prevent="deleteUser" class="btn btn-secondary">Delete User</button>
    </div>
    
          </div>
        </div>
      </div>
     
    </div>
  
  </div>

 
   
     
</template>



<script>
import EditProf from "@/components/EditProf.vue"
export default {
  components: {
    EditProf
  },
 
  // computed: {
  //     users(){
  //         return this.$store.state.users;
  //     }
  //   },
  methods:{
    async Logout(){
      try{
        this.$store.dispatch("LogOut");
        this.$store.push({name:"login"})
      }
      catch(err){
        console.log(err);
      }
    },
    deleteUser(userID) {
        this.$store.dispatch('DeleteUsers', userID)
    },
  },
  // mounted() {
  //     this.$store.dispatch("fetchUsers");
  //   },
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData);
    }
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap');

  h1{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
  color: #000;
  };
body {
  background-size: 1400px 700px;
  background-position: 30%;
  background-attachment: fixed;
}

.text {
  font-family: raleway;
  font-size: 40px;
  position: absolute center;
  text-align: center;
  padding-left: 0%;
  color: #000;
  margin-top: 43px;
}

.text1 {
  font-family: raleway;
  font-size: 21px;
  text-align: center;
  margin-top: -20px;
  color: #000;
}

.image {
  text-align: center;
  width: 200px;
  /* Container's dimensions */

  height: 200px;
  -webkit-border-radius: 75%;
  -moz-border-radius: 75%;
  box-shadow: 0 0 0 1px #eee;
  background: url("https://images.unsplash.com/reserve/ysPfhVSzSP2m629CW0mw_selfPortrait.jpg?fit=crop&fm=jpg&h=700&q=80&w=1225")
    center center no-repeat;
  background-size: cover;
  margin: auto;
  margin-top: 20px;
  margin-bottom: -30px;
  align-content: center;
}

.trick {
  display: inline-block;
  vertical-align: middle;
  height: 150px;
}

.image:hover {
  box-shadow: 0px 5px 20px 0.9px #3f3f3f;
}

.image:hover {
  -webkit-transform: scale(1.12);
  transform: scale(1.12);
  -webkit-transition: 1.6s ease-in-out;
  transition: 1.6s ease-in-out;
}

.trick:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

#overlay {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  padding: 0 0 0 0;
  opacity: 1;
  -webkit-transition: opacity 2.25s ease;
  -moz-transition: opacity 10.25s ease;
}

#box:hover #overlay {
  opacity: 1;
}

.panel-group {
  width: 350px;
  margin: auto;
  /*margin:50px 400px 50px 400px;*/
  max-width: 100%;
}

.panel-heading {
  background-color: transparent !important;
}

.title {
  text-align: center;
  background-color: transparent;
  color: #000;
  font-family: lato;
  font-weight: 300;
  font-size: 15px;
  max-width: 100%;
}

#accordion {
  background-color: transparent;
  max-width: 100%;
  margin-bottom: 200px;
}

.btn-outline {
  color: white;
  background-color: rgb(33, 33, 192);
  transition: all 1.4s;
  background-color: transparent;
}
.body{
  font-family: 'Phudu', cursive;

}
</style>