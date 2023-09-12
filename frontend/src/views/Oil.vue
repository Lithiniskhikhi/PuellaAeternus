<template>
    <div v-if="products">
        <div
        class="car col-12 col-sm-6 col-md-4 p-2"
        v-for="product in products"
        :key="product.prodID"
        style="width: 17rem; margin-inline: 4rem; margin-bottom: 2rem"
      >
        <img :src="product.prodLUrl" class="paint" alt="" />
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
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>