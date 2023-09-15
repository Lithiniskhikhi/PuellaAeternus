import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
const {cookies}= useCookies()
const artUrl= "https://capstone-26ks.onrender.com/"
import AuthenticateUser  from '@/services/AuthenticateUser'


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    addProduct:null,
    addUser:null,
    editProduct:null,
    editUsers:null,
    filterName:null,
filterCategory:null,
cart:[],

  },
  getters: {
    filteredProducts(state) {
      if (state.selectedCategory) {
        return state.products.filter(product => product.category === state.selectedCategory);
      }
      return state.products;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    },
    filterName(state,filterName){
      state.filterName = filterName
    },
    filterCategory(state,filterCategory){
      state.filterCategory = filterCategory
    },
    setToken(state, token) {
      state.token = token
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    setDeleteProducts(state, data) {
      state.products = data
    },
    setDeleteUsers(state, data) {
      state.users = data
    },
    setAddProduct(state,data){
      state.addProduct = data
    },
    setAddUser(state,data){
      state.addUser = data
    },
    editProduct(state, data){
      state.editProduct= data
    },
    editUsers(state, data){
      state.editUsers= data
    },
    setCart(state, product){
      state.cart = product
    },
    addToCart(state, product){
      state.cart.push(product)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },


  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${artUrl}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${artUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async fetchProduct(context, prodID) {
      try{
        const {data} = await axios.get(`${artUrl}product/${prodID}`)
        context.commit("setProduct", data.results[0])
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async DeleteProducts(context, prodID ) {
      try{
        const response = await axios.delete(`${artUrl}products/${prodID}`)
        context.commit("setDeleteProducts", response)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async DeleteUsers(context, userID ) {
      try{
        const response = await axios.delete(`${artUrl}user/${userID}`)
        context.commit("setDeleteUsers", response)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },

    async EditProduct(context, editprod) {
      try {
        const res = await axios.patch(`${artUrl}products/${editprod.prodID}`, editprod);
        context.commit('setEditUsers', res.data); 
        // location.reload();
        console.log("worked");
      } catch (error) {
        console.log(error);
      }
    },

    
    async EditUsers(context, editUser) {
      try {
        const res = await axios.put(`${artUrl}user/${editUser.userID}`, editUser);
        context.commit('setDeleteUsers', res.data);
        // location.reload();
        console.log("worked");
      } catch (error) {
        console.log(error);
      }
    },

    async filterProductsByCategory(context, category) {
      context.commit('setSelectedCategory', category);
    },
  



    // async addProduct({ commit }, productData) {
    //   try {
    //     const res = await axios.post(`${artUrl}product`, productData)
    //     // commit("setAdd", res.data)
    //     commit('setAddProduct', response.data)
    //     console.log("test complete");
    //   } catch(e) {
    //     console.log(error);
    //   }
    // },
    async addProduct({ commit }, productData) {
      try {
        const response = await axios.post(`${artUrl}products`, productData);
        // Handle success, e.g., commit the mutation or take any other actions
        commit('setAddProduct', response.data);
        // Reload your data or take other necessary actions
        location.reload();
      } catch (error) {
        // Handle the error here, e.g., display an error message
        console.error('An error occurred:', error);
      }
    },
    // async fetchOil(context) {
    //   try{
    //     const {data} = await axios.get(`${artUrl}Oil painting`)
    //     context.commit("setOil", data.results)
    //   }catch(e){
    //     console.log(e)
    //   }
    // },
    // async fetchRenaissance(context) {
    //   try{
    //     const {data} = await axios.get(`${artUrl}Renaissance painting`)
    //     context.commit("setRenaissance", data.results)
    //   }catch(e){
    //     console.log(e)
    //   }
    // },
    // async filterCategory(context) {
    //   try{
    //     const {data} = await axios.get(`${artUrl}filterCategory`)
    //     context.commit("filterCategory", data.results)
    //     console.log(data.results);
    //   }catch(e){
    //     console.log(e)
    //   }
    // },





    // async addProduct({ commit }, productData) {
    //   const response = await axios.post(`${artUrl}products`, productData)
    //   location.reload()
    //   commit('setAddProduct', response.data)
    // },
    async addUser({ commit }, userData) {
      try {
        const response = await axios.post(`${artUrl}users`, userData)
        commit('setAddUser', response.data)
        location.reload()
        console.log('testing');
      } catch (error) {
        console.log(error);
      }
    },
    //register
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${artUrl}users`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    //login
    async login(context, payload) {
      try {
        const { msg, token, results } = (
          await axios.post(`${artUrl}login`, payload)
        ).data;
        if (results) {
          context.commit("setUser", { results, msg });
          localStorage.setItem("user", JSON.stringify(results))
          cookies.set("MannUser", { msg, token, results });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${results?.firstName} ${results?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    LogOut(context){
      context.commit('setUser')
      cookies.remove("MannUser");
      localStorage.removeItem("user")
    }
  },

  //filter
  // async FilterName(context) {
  //   try {
  //     const { data } = await axios.get(`${artUrl}products`);
  //     context.commit("SortName", data.results);
  //   } catch (e) {
  //     context.commit("setMsg", "An Error has occurred ");
  //   }
  // },
  
  // async FilterPrice(context) {
  //   try {
  //     const { data } = await axios.get(`${artUrl}products`);
  //     context.commit("SortPrice", data.results);
  //   } catch (e) {
  //     context.commit("setMsg", "An Error has occurred ");
  //   }
  // },
  
  async addToCart() {
    try {
      cart.push(); // You need to specify what you want to push into the cart array
      localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (error) { // Use 'error' instead of 'e'
      alert(error);
    }
  },


  

  // window.addEventListener("scroll", function() {
  //   // Select your navigation bar
  //   var nav = document.getElementsByTagName("nav")[0];
  //   // Change 20 to anything you want like nav.offsetHeight
  //   if (window.scrollY > 20) {
  //     nav.style.borderBottom = "5px solid dodgerblue";
  //   } else {
  //     nav.style.borderBottom = "0"; // Change to borderBottom for consistency
  //   }
  // }
 } )
