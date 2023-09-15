<template>
    <div>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editmodel" data-bs-whatever="@mdo">Edit</button>
<div class="modal fade" id="editmodel" tabindex="-1" aria-labelledby="editmodel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editmodel">{{ editUser.userID }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
            <input
            type="text"
            v-model="editUser.userID"
            placeholder="ID"
            name=""
            id=""
            required
          />
          <input
            type="text"
            v-model="editUser.firstName"
            placeholder="quantity"
            name=""
            id=""
            required
          />
          <input
            type="text"
            v-model="editUser.lastName"
            placeholder="amount"
            name=""
            id=""
            required
          />
        <input
        type="text"
        v-model="editUser.emailAdd"
        placeholder="image"
        name=""
        id=""
      />
      <input
      type="text"
      v-model="editUser.profileLUrl"
      placeholder="image"
      name=""
      id=""
    />
          <button type="submit" class="btn">Save</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
        editUser: {
        //  userID: this.id,
          firstName:"",
          lastName:"",
          emailAdd: "",
          profileLUrl: "",
        },
      }
        },
        computed:{
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers')
        }
 
    }
</script>
<style scoped>
.btn{
   
    border-radius: 1px;
    color: white;
}
</style>