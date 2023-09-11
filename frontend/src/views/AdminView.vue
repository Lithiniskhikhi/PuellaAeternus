<template>
    <div class="about">
      <br>
  <h1>ADMIN</h1>
  <AddProduct/>
  <!-- <button>add products</button> -->
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
              <td><router-link :to="{ name: 'editProd', params: { id: product.prodID}}"><i class="bi bi-pen"></i></router-link></td>
              <td><button class="btn" type="button" @click="deleteProduct(product.prodID)"><i class="bi bi-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>  
  <br>
  <br>
      
  
  
  <h1>USERS</h1>
  <button class="addbtn"><AddUser/> </button>
      
  
      <div class="table-responsive" style="margin-top: 1rem" v-if="users">
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
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <th scope="row">{{ user.userID }}</th>
                <!-- <th>{{ user.userID }}</th> -->
                <th>{{ user.firstName }}</th>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>
                  <img
                    :src="user.profileLUrl"
                    :alt="user.prodName"
                    style="width: 5rem"
                  />
                </td>
                <td><router-link :to="{ name: 'editUser', params: { userID: user.userID}}"><i class="bi bi-pen"></i></router-link></td>
                <td><button class="btn" type="button" @click="deleteUser(user.userID)"><i class="bi bi-trash cl-black"></i></button></td>
              </tr>
            </tbody>
          </table>
          
        </div>  
        <!-- <div class="else" v-else>
          <Spinner/>
        </div> -->
        <!-- Button trigger modal -->

  
  <!-- Modal -->
 
    
      </div>
  </template>
    <script>
    import AddUser from '@/components/AddUser.vue'
    // import EditProducts from '@/components/EditProducts.vue'
    import EditUsers from '@/components/EditUsers.vue'

   import AddProduct from '@/components/AddProduct.vue'
  
  
  
  
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
        AddUser,
        AddProduct,
        // EditProducts,
        EditUsers
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
  };
  
  button{
    text-decoration: none;
    color: #000;
  };
  </style>
  
  