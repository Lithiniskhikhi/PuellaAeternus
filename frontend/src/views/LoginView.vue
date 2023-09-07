<template>
  <div>
    <h1>login</h1>
    <form action="action_page.php" method="post" @submit.prevent="login">

        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="payload.emailAdd" name="uname" required

        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="payload.userPass" name="psw" required

        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit8" class="btn btn-primary">Submit</button>
    </form>
    <br />
    <form action="action_page.php" style="border: 1px solid #ccc">
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="email"><b>Name</b></label>
        <input type="text" placeholder="Enter Email" name="name" required aria-describedby="emailHelp" v-model="payload.firstName" />

        <label for="email"><b>LastName</b></label>
        <input type="text" placeholder="Enter Email" name="lastName" required  v-model="payload.lastName" />

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="payload.userPass"
        />

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
          v-model="payload.userPass"
        />

        <label>
                <label for="exampleInputuserAge1" class="form-label text-white">userAge</label>
                <input
                  type="userAge"
                  class="form-control"
                  id="exampleInputuserAge1"
                  aria-describedby="emailHelp"
                  v-model="payload.userAge"
                  required
                />
                <label for="exampleInputgender1" class="form-label text-white">gender</label>
                <input
                  type="gender"
                  class="form-control"
                  id="exampleInputgender1"
                  aria-describedby="emailHelp"
                  v-model="payload.gender"
                  required
                />
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom: 15px"
          />
          Remember me
        </label>

        <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
        </p>

        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
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
  },
  data() {
        return {
            payload: {
                firstName: "",
                lastName: "",
                userAge: "",
                gender: "",
                emailAdd: "",
                userPass: "",
                userProfile: "https://i.postimg.cc/HntQPB1k/Feels-Okay-Man.webp"
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
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>