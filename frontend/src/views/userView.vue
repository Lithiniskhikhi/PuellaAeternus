<template>
  <div>
    <div>
      <h1 class="text-center p-3 heading-text">My Account</h1>
      <div class="card mx-auto my-3 p-5 w-75 user-card">
        <div class="m-3 text-center">
          <img
            :src="$store.state.user?.profileLUrl"
            :alt="$store.state.user?.firstName"
            class="img-fluid mb-5"
            style="max-width: 60%; border-radius: 50%"
          />
          <h2 class="gold-text">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite>{{ $store.state.user?.userRole }}</cite>
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
            <update-user-comp class="btn edit-btn" />
            <button
              type="submit"
              class="btn del-btn"
              @click="deleteUser(user.userID)"
            >
              Delete Account
            </button>
            <button @click="Logout" type="submit">log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
        <div class="box">
            <div id="overlay">
              <div class="image">
                <div class="trick">
                    <img
                    :src="$store.state.user?.profileLUrl"      

                    :alt="$store.state.user?.firstName"
                    class="img-fluid mb-5"
                    style="max-width: 60%; border-radius: 50%;"
                  />
                </div>
              </div>
              <ul class="text">Walter Wright</ul>
              <div class="text1">HTML + CSS</div>
        
        
        
        
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading " role="tab" id="headingOne">
              <h4 class="panel-title ">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="" aria-controls="collapseOne">
                  <div class="title  btn btn-danger btn-outline btn-lg">ABOUT WALTER</div>
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="panel-body">
                Walter has been building websites for years. He enjoys making unique websites and web projects. His hobbies include photography, woodworking, leatherworking, fishing, and mid century modern furniture.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div class="title btn btn-danger btn-outline btn-lg">SOCIAL</div>
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div class="panel-body">
                Walter has been building websites for years. He enjoys making unique websites and web projects. His hobbies include photography, woodworking, leatherworking, fishing, and mid century modern furniture.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div class="title btn btn-danger btn-outline btn-lg">CONTACT</div>
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div class="panel-body">
        
                
                
                          <form id="form" class="topBefore">
        
                    <input id="name" type="text" placeholder="NAME">
                    <input id="email" type="text" placeholder="E-MAIL">
                    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                    <input id="submit" type="submit" value="Submit Now!">
        
                  </form>
                
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div> -->
</template>

<script>
export default {
  methods:{
    async Logout(){
      try{
        this.$store.dispatch("LogOut");
        this.$store.push({name:"login"})
      }
      catch(err){
        console.log(err);
      }
    }
  },
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
  color: inherit;
  transition: all 1.4s;
  background-color: transparent;
}
/* button CSS */

.btn-danger.btn-outline {
  margin-top: 9px;
  background-color: transparent;
  color: #000;
  border-color: #000;
  padding: auto;
  padding: 10px 0px 10px 0px;
  margin: 1px 5px 1px 0px;
  width: 100%;
  text-align: center;
  font-family: raleway;
  font-weight: 300;
  max-width: 100%;
}
</style>