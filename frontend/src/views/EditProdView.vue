<template>
  <div>
    <router-link to="/admin"></router-link>
    <div class="input-body">
      <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
        <input
          type="text"
          v-model="editprod.prodName"
          placeholder="name"
          name=""
          id=""
          required
        />
        <input
          type="number"
          v-model="editprod.quantity"
          placeholder="quantity"
          name=""
          id=""
          required
        />
        <input
          type="number"
          v-model="editprod.amount"
          placeholder="amount"
          name=""
          id=""
          required
        />
        <input
          type="text"
          v-model="editprod.Category"
          placeholder="category"
          name=""
          id=""
          required
        />
        <input
          type="text"
          v-model="editprod.prodUrl"
          placeholder="image"
          name=""
          id=""
        />
        <button type="submit" class="btn">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editprod: {
        prodID: this.id,
        prodName: "",
        quantity: "",
        amount: "",
        Category: "",
        prodUrl: "",
      },
    };
  },
  props: ["id"],
  methods: {
    addForm() {
      this.$store.dispatch("EditProduct", this.editprod);
    },
  },
};
</script>

<style scoped>
</style>