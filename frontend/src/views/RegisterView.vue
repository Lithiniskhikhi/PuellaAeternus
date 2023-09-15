<template>
    <div>
        <h2 style="padding-top: 120px;">REGISTER</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputfirstName1" class="form-label text-black">ID</label>
              <input
                type="firstName"
                class="form-control"
                id="exampleInputfirstName1"
                aria-describedby="emailHelp"
                v-model="payload.userID"
                required
              />
              <label for="exampleInputfirstName1" class="form-label text-black">firstName</label>
              <input
                type="firstName"
                class="form-control"
                id="exampleInputfirstName1"
                aria-describedby="emailHelp"
                v-model="payload.firstName"
                required
              />
          </div>
          <div class="mb-3">
            <label for="exampleInputlastName1" class="form-label text-black">lastName</label>
            <input
              type="lastName"
              class="form-control"
              id="exampleInputlastName1"
              aria-describedby="emailHelp"
              v-model="payload.lastName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputuserAge1" class="form-label text-black">userAge</label>
            <input
              type="userAge"
              class="form-control"
              id="exampleInputuserAge1"
              aria-describedby="emailHelp"
              v-model="payload.userAge"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputgender1" class="form-label text-black">gender</label>
            <input
              type="gender"
              class="form-control"
              id="exampleInputgender1"
              aria-describedby="emailHelp"
              v-model="payload.gender"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-black">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="payload.emailAdd"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-black">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="payload.userPass"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputuserProfile1" class="form-label text-black">profileLUrl</label>
            <input
              type="userProfile"
              class="form-control"
              id="exampleInputuserProfile1"
              v-model="payload.profileLUrl"
              required
            />
          </div>
          <button type="submit" class="btn">Register</button>
        </form>
      </div>
</template>
<script>
export default {
    data() {
        return {
            payload: {
                userID: "",
                firstName: "",
                lastName: "",
                userAge: "",
                gender: "",
                emailAdd: "",
                userPass: "",
                profileLUrl: "https://i.postimg.cc/MpHd6cNj/Screenshot-2023-08-22-083534.png"
            }
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', this.payload)
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap');

  h1{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
  color: #000;
  };
.mb-3{
  width: 40%;
  margin-left: 29rem;
  margin-top: 1rem;
}
.btn{
 color: black;
 margin-left: 29rem;
}
.mb-3 {
  width: 80%; 
  margin: 1rem auto; 
}

.btn {
  color: black;
  margin: 0 auto; 
  display: block; 
  width: 50%; 
}

@media (max-width: 300px) and (max-height: 700px) {
  .mb-3 {
    width: 90%; 
  }

  .btn {
    width: 70%; 
  }
}
h2{
  color: black;
  font-family: 'Phudu', cursive;

}
</style>







