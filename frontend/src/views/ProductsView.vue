<template>
  <div class="products">
    <div class="my-5 container">
      <!-- <h1 style="color: rgb(228, 220, 220)">Find Movies<span></span></h1>
            <br />
            <br /> -->
      <h1 style="padding-top: 110px;" >NEW ARRIVALS</h1>
      <br />
      <div class="row" style="margin-top: 3rem" v-if="products">

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <button @click="filterByProductIds([5, 6, 10, 11, 12, 16 , 18, 19, 24 , 27, 29])" class="btn btn-secondary">Oil Paintings</button>
              <button @click="filterByProductIds([4, 7, 13 ,14, 15, 20, 21, 22, 23 ,25,, 30])" class="btn btn-secondary">Renaissance Paintings</button>
            </div>
          </div>
        </div>
      </nav>
      <button style="width:5rem" @click="sortByName" class="btn btn-secondary">Sort Name</button>
      <button  style="width:5rem " @click="sortByPrice" class="btn btn-secondary">Sort price</button>
      <br>
      <br>
      <h5>SEARCH</h5>
      <input type="text" v-model="searchQuery" placeholder="Search..." style="margin-bottom: 5rem;">
      <br>
      <!-- <button @click="searchProducts" class="btn btn-secondary">Search</button> -->

      <!-- <div class="dropdown">
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
      -->
      
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
            <button @click="addToCart(product)" class="btn bg-black text-white">Buy Now</button>
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
  const filteredProducts = this.products.filter(product => ids.includes(product.prodID));
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
.btn{
  background-color: rgb(10, 10, 11);
  margin: 1rem;
}
@media (max-width: 600px) {
  /* Adjust styles for screens with a width less than or equal to 600px */
  .paint {
    width: 25rem !important;
    height: 30rem !important;
  }
}

@media (max-width: 450px) {
  /* Adjust styles for screens with a width less than or equal to 450px */
  .paint {
    width: 20rem !important;
    height: 25rem !important;
  }
}

@media (max-width: 350px) {
  /* Adjust styles for screens with a width less than or equal to 350px */
  .paint {
    width: 15rem !important;
    height: 20rem !important;
  }
}
@media (max-width: 300px) and (max-height: 700px) {
  /* Adjust styles for screens with a width less than or equal to 300px and height less than or equal to 700px */
  .paint {
    width: 15rem !important;
    height: 20rem !important;
  }
  
  .search-input {
    width: 80%; /* Adjust the width of the search input */
    margin: 0 auto; /* Center the search input */
  }
  
  .row {
    margin-top: 1rem; /* Adjust the top margin of the row */
  }
}
@media (max-width: 300px) and (max-height: 700px) {
  /* Apply specific styles for screens with a resolution of 300x700 */
  
  /* Center the buttons */
  .btn {
    margin: 0 auto;
    width: 50%; /* Adjust the button width as needed */
  }
  
  /* Adjust the search input */
  .search-input {
    width: 70%; /* Adjust the width of the search input */
    margin: 0 auto; /* Center the search input */
  }
  
  /* Optionally, you can adjust other styles as needed for this screen size */
}
</style>