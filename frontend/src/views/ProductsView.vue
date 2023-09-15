<template>
  <div class="products">
    <div class="my-5 container">
      <!-- <h1 style="color: rgb(228, 220, 220)">Find Movies<span></span></h1>
            <br />
            <br /> -->
      <h1 style="margin-top: 2rem">NEW ARRIVALS</h1>
      <br />
      <div class="row" style="margin-top: 3rem" v-if="products">

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <button @click="filterByProductIds([4, 8, 3])">Oil Paintings</button>
              <button @click="filterByProductIds([2, 6])">Renaissance Paintings</button>
            </div>
          </div>
        </div>
      </nav>
      <button style="width:5rem" @click="sortByName">Sort Name</button>
      <button  style="width:5rem" @click="sortByPrice">Sort price</button>
      <input type="text" v-model="searchQuery" placeholder="Search...">
      <button @click="searchProducts">Search</button>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          style=" background-color: rgb(37, 37, 139)"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false" >
          Filter Products
        </button>
        <div class="dropdown-menu" style="background-color: rgb(243, 237, 237)">
          <div class="pricesortbtn">
            <button class="btn" style="width: 100%" id="pricesortbtn">
              Sort by Price
            </button>
          </div>
          <div class="namesortbtn">
            <button
              class="btn"
              style="width: 100%; margin-top: 1rem"
              id="namesortbtn"
            >
              Oil Paintings
            </button>
          </div>
          <div class="namesortbtn">
            <button
              class="btn"
              style="width: 100%; margin-top: 1rem"
              id="namesortbtn"
            >
              Renaissance Paintings
            </button>
          </div>
        </div>
      </div>
     
      
        <div
          class="car col-12 col-sm-6 col-md-4 p-2"
          v-for="product in sortedProducts"
          :key="product.prodID"
          style="width: 17rem; margin-inline: 4rem; margin-bottom: 2rem"
        >
          <img :src="product.prodUrl" class="paint" alt="" />
          <div class="card-body" style="margin-right 13rem;">
            <br />
            <h5 class="card-title">
              {{ product.prodName }}
              <br />
              <br />
            </h5>
            <h5 class="card-title">{{ product.Category }}</h5>
            <br />
            <p class="card-text">R {{ product.amount }}</p>
            <p class="card-text">Qty: {{ product.quantity }}</p>
            <router-link
              :to="{ name: 'product', params: { prodID: product.prodID } }"
              ><button
                class="btn btn-outline-light"
                style="background-color: black"
              >
                View More
              </button></router-link
            >
            <button @click="addToCart(product)" class="btn bg-black">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="else" v-else>
              <Spinner/>
            </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    sortedProducts() {
    let filteredProducts = this.products;
    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(query)
      );
    }
    // Filter by selected category
    if (this.$store.state.selectedCategory) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category === this.$store.state.selectedCategory
      );
    }
    // Sort by selected type
    if (this.sortType === 'price') {
      return [...filteredProducts].sort((a, b) => a.amount - b.amount);
    } else if (this.sortType === 'name') {
      return [...filteredProducts].sort((a, b) =>
        a.prodName.localeCompare(b.prodName)
      );
    }
    return filteredProducts;
  },

  
},
  data() {
    return {
      sortType: '',
      searchQuery: ''
    };
  },
  methods: {
    sortByName() {
      this.sortType = 'name';
    },
    sortByPrice() {
      this.sortType = 'price';
    },
    searchProducts() {
      this.$store.commit('setSearchQuery', this.searchQuery);
    },
    addToCart(product) {
      const data = JSON.parse(localStorage.getItem('cart')) || []
      const newData = { key: product }
      data.push(newData)
      localStorage.setItem('cart', JSON.stringify(data))
    },
    addToCart(product) {
        const data = JSON.parse(localStorage.getItem('cart')) || []
        const newData = {key: product}
        data.push(newData)
        localStorage.setItem('cart', JSON.stringify(data))
    },
    filterByCategory(category) {
    this.$store.commit('setSelectedCategory', category);
  },
  filterByProductIds(ids) {
      // Filter products by the provided IDs
      this.$store.commit('setSelectedCategory', null); // Clear the selected category filter
      const filteredProducts = this.products.filter(product => ids.includes(product.id));
      this.$store.commit('setProducts', filteredProducts); // Update the products in the store
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap");

h1 {
  margin: 0;
  margin-left: 20px;
  font-family: "Phudu", cursive;
  color: black;
}

#wordimg {
  font-family: "Phudu", cursive;
  font-size: 60px;
  color: rgb(63, 40, 213);
}
.paint {
  width: 21rem;
  height: 20rem;
}

.products {
  color: black;
}
.card-body {
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>