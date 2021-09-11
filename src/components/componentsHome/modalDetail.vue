<template>
  <div class="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Detail User</h4>
          <button type="button" class="btn btn-sm" v-on:click="closeModalDetail">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <table class="table table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="detailUser">
                  <tr>
                      <td>{{detailUser.id - 6}}</td>
                      <td>{{detailUser.first_name}}</td>
                      <td>{{detailUser.last_name}}</td>
                      <td>{{detailUser.email}}</td>
                      <td><img :src="detailUser.avatar" alt="" class="img-thumbnail" width="100"></td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="5">Tidak ada data yang tersedia</td>
                  </tr>
                </template>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="closeModalDetail">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modalDetail',
  props: {
    detailUser: {
      type: Object
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    closeModalDetail() {
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
