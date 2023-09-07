<template>
    <div class="about">
      <Navbar/>
      <br>
      <br>
  <h1>ADMIN</h1>
  <br>
      <div class="table-responsive" style="margin-top: 1rem">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr>
              <th scope="row">{{ product.prodID }}</th>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <img
                  :src="product.prodUrl"
                  :alt="product.prodName"
                  style="width: 5rem"
                />
              </td>
              <td><button>Edit</button></td>
              <td><button class="btn" type="button" @click="deleteProduct(product.prodID)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>  
  <br>
  <br>
      <h1>USERS</h1>
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add</button> -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add User
      </button>
  
      <div class="table-responsive" style="margin-top: 1rem" v-if="products">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Profile</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.userID">
              <tr>
                <th scope="row">{{ user.userID }}</th>
                <th>{{ user.firstName }}</th>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.Gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>
                  <img
                    :src="user.userProfile"
                    :alt="user.prodName"
                    style="width: 5rem"
                  />
                </td>
                <td><button>Edit</button></td>
                <td><button class="btn" type="button" @click="deleteUser(user.userID)">Delete</button></td>
              </tr>
            </tbody>
          </table>
          
        </div>  
        <div class="else" v-else>
          <Spinner/>
        </div>
        <!-- Button trigger modal -->

  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="addFormUser" class="d-flex flex-column gap-5">
                <!-- <input type="text" v-model="userData.userID" placeholder="id" name="" id="">
                <input type="text" v-model="userData.firstName" placeholder="name" name="" id="">
                <input type="text" v-model="userData.lastName" placeholder="surname" name="" id="">
                <input type="text" v-model="userData.userAge" placeholder="age" name="" id="">
                <input type="text" v-model="userData.userRole" placeholder="role" name="" id="">
                <input type="text" v-model="userData.emailAdd" placeholder="email" name="" id="">
                <input type="text" v-model="userData.userPass" placeholder="password" name="" id="">
                <input type="text" v-model="userData.userProfile" placeholder="image" name="" id=""> -->

                <button type="submit" class="btn">Add</button>
               </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
    
      </div>
  </template>
    <script>
  
   //import AddUser from '@/components/AddUser.vue'
  
  
  
  
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
      users(){
          return this.$store.state.users;
      }
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
      this.$store.dispatch("fetchUsers");
    },
    components:{
      
      //  HeaderComp
     },
     methods: {
      deleteProduct(prodID) {
          this.$store.dispatch('DeleteProducts', prodID)
      },
      deleteUser(userID) {
          this.$store.dispatch('DeleteUsers', userID)
      }
     }
  };
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap');

  h1{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
  color: #000;
  }
  
  </style>
  
  