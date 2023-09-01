<template>
    <div class="products">
        <div class="my-5 container">
            <!-- <h1 style="color: rgb(228, 220, 220)">Find Movies<span></span></h1>
            <br />
            <br /> -->
            <h1 style="margin-top:2rem">NEW ARRIVALS</h1>
            <br>

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                style="width: 10rem ; background-color:rgb(37, 37, 139)"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
            <div class="row" style="margin-top: 3rem" v-if="products">
              
              <div  class="car col-12 col-sm-6 col-md-4 p-2" v-for="product in products" :key="product.prodID"
                style="width: 17rem; margin-inline: 4rem; margin-bottom: 2rem"
              >
                <img :src="product.prodUrl" class="paint" alt=""  />
                <div class="card-body" style="margin-right 13rem;">
                  <br />
                  <h5 class="card-title" >
                    {{ product.prodName }}
                  </h5>
                  <h5 class="card-title">{{ product.Category }}</h5>
                  <br />
                  <p class="card-text">R {{ product.amount }}</p>
                  <p class="card-text">Qty: {{ product.quantity }}</p>
                  <router-link
                    :to="
                      '/product/' + product.prodID"
                    ><button class="btn btn-outline-light" style="background-color:black">
                      View More
                    </button></router-link
                  >
                </div>
              </div>
            </div>
            <!-- <div class="else" v-else>
              <Spinner/>
            </div> -->
          </div>
</div> 
</template>

<script>
export default {
        components: {
     },
        computed: {
            products(){
                return this.$store.state.products
            },
            product(){
              return this.$store.state.product
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
            // this.$store.dispatch('fetchProduct', this.prodID)
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap');

h1{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
    color: black;
  
  }

  #wordimg {
    font-family: 'Phudu', cursive;
    font-size: 60px;
    color: rgb(63, 40, 213);
  }
  .paint{
    width: 21rem;
    height: 20rem;
  }

  .products{
    color: black;
  }
.card-body{
    text-align: center;
    justify-content: center;
    align-items: center;
}
  
  
</style>