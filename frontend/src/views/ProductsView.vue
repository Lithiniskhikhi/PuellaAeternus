<template>
    <div>
        <div>
            <div class="row" style="margin-top: 3rem display: flex; justify-content: center;">
              <div
                class="car col-12 col-sm-6 col-md-4 p-2" style=""
              >
                <img
                 
                  style="width: 9rem; height: 9rem"
                  loading="lazy"
                />
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <h5 class="card-title"></h5>
                  <p class="card-text">R </p>
                  <p class="card-text">Qty:\</p>
                </div>
            </div>
          </div>
    </div>
</div> 
</template>

<script>
   export default {
  props: ["prodID"],
  created() {
    this.$store.dispatch('fetchProduct', this.prodID)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style scoped>

</style>