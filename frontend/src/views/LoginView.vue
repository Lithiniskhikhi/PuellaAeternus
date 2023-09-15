<template>
    <div>
      <h3 class="h3" style="padding-top: 120px;">ACCOUNT LOGIN</h3>
      <div style="display: flex; justify-content:center">
        <div class="row">
         <form action="action_page.php" method="post" @submit.prevent="login">
          <div class="container">
          <label for="uname"><b>Email Address</b></label>
         <input type="text" placeholder="Enter Username" v-model="payload.emailAdd" name="uname" required>
         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" v-model="payload.userPass" name="psw" required>
         <button type="submit">Login</button>
         </div>
           </form>
        </div>
         </div>
    </div>
  </template>
  <script>
    export default {
      data() {
      return {
        payload: {
          emailAdd: "",
          userPass: "",
        },
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    methods: {
      login() {
        this.$store.dispatch("login", this.payload);
      },
    },
    beforeCreate() {
      this.$store.dispatch("fetchUsers");
    }
    }
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap');

  h3{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
  color: #000;
  };
  .row{
    border: 1px solid #F1F1F1;
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .h3{
    color: #000000;
    text-align: center;
    margin-top: 2rem;
  }
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  /* Set a style for all buttons */
  button {
    background-color: #5d43c6;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  .container {
    padding: 16px;
    width: 100%;
  }
  </style>