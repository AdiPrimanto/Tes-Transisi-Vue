<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add User</h4>
          <button type="button" class="btn btn-sm" v-on:click="closeModalAdd">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleAddSubmit">
            <div class="mb-3">
              <label for="name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" v-model="name" id="name" autocomplete="off">
            </div>
            <div class="mb-3">
              <label for="job" class="col-form-label">Job:</label>
              <input type="text" class="form-control" v-model="job" id="job" autocomplete="off">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="closeModalAdd">Close</button>
          <button type="submit" class="btn btn-primary" @click="handleAddSubmit">
            Add
            <div class="spinner-border spinner-border-sm" role="status" v-if="spinners == true">
                <!-- <span class="visually-hidden">Loading...</span> -->
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
    name: 'modalHome',
    data(){
      return {
        name: '',
        job: '',
        spinners: false
      }
    },
    methods: {
      handleAddSubmit() {
        this.spinners = true
        const data = {
            name: this.name,
            job: this.job,
        }
        console.log('object', data);

        axios.post('users', data)
        .then(
            res => {
                console.log(res);
                this.name = '';
                this.job = '';
                this.spinners = false
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User has been added',
                  showConfirmButton: false,
                  timer: 3000
                })
                this.$emit('close-modal');
            }
        ).catch (
            err => {
                console.log(err);
            }
        )
      },

      closeModalAdd() {
        this.$emit('close-modal');
      },
    },
  };
</script>
<style scoped>
  .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  }
</style>
