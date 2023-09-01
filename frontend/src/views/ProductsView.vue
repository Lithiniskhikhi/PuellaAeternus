<template>
    <div>
        <div class="my-5 container">
            <h1 style="color: rgb(228, 220, 220)">Find Movies<span></span></h1>
            <br />
            <br />
      
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                style="width: 10rem"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter Products
              </button>
              <div class="dropdown-menu" style="background-color: black">
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
                    Sort by Name
                  </button>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 3rem" v-if="products">
              
              <div  class="car col-12 col-sm-6 col-md-4 p-2"
                v-for="product in products"
                :key="product.prodID"
                style="width: 17rem; margin-inline: 4rem; margin-bottom: 1rem"
              >
                <img :src="product.prodUrl" class="w-100 test" alt="" />
                <div class="card-body" style="margin-right 13rem;">
                  <br />
                  <h5 class="card-title" style="color: white">
                    {{ product.prodName }}
                  </h5>
                  <h5 class="card-title">{{ product.Category }}</h5>
                  <br />
                  <p class="card-text">R {{ product.amount }}</p>
                  <p class="card-text">Qty: {{ product.quantity }}</p>
                  <router-link
                    :to="{
                      name: 'singleProduct',
                      params: { id: product.prodID },
                      query: {
                        prodName: product.prodName,
                        Category: product.Category,
                        img: product.prodUrl,
                        amount: product.amount,
                        quantity: product.quantity,
                      },
                    }"
                    ><button class="btn btn-outline-light">
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
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>