<template>
    <div class="container mt-4">
        <!-- <b-button v-b-modal="'my-modal'" class="mb-4">Tambah data</b-button> -->
        <button type="submit" class="btn btn-primary mb-4" @click="openModalAdd">Add User</button>

        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped table-bordered border-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <th scope="row">{{user.id - 6}}</th>
                            <td>{{user.first_name}}</td>
                            <td>{{user.last_name}}</td>
                            <td>{{user.email}}</td>
                            <td><img :src="user.avatar" alt="" class="img-thumbnail" width="80"></td>
                            <td>
                                <div class="bd-button">
                                    <b-button @click="openModalDetail(user.id)" class="btn btn-sm btn-success">Details</b-button>
                                    <b-button @click="openModalEdit(user.id)" class="btn btn-sm btn-info">Edit</b-button>
                                    <b-button @click="deleteUser(user.id)" class="btn btn-sm btn-danger">Delete</b-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- The modal -->
        <modalHome v-show="isModalAdd" @close-modal="closeModalAdd" />
        <modalEdit v-show="isModalEdit" :userIdEdit="userIdEdit" :load="load" @close-modal="closeModalEdit" />
        <modalDetail v-show="isModalDetail" :detailUser="detailUser" @close-modal="closeModalDetail" />

    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import modalHome from './componentsHome/modalHome' 
import modalDetail from './componentsHome/modalDetail' 
import modalEdit from './componentsHome/modalEdit' 

export default {
    name: 'Home',
    components: {
        modalHome, 
        modalDetail,
        modalEdit
    },
    data() {
        return {
            isModalAdd: false,
            isModalEdit: false,
            isModalDetail: false,
            perPage: 0,
            currentPage: 1,
            users: [],
            detailUser: {},
            userIdEdit: 0,
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load(){
            axios.get('users?page=2').then(res => {
                this.users = res.data.data
                // console.log('load', this.users);
            }).catch ((err) => {
                console.log(err);
            })
        },
        deleteUser(idUser) { 
            axios.get('users/' + idUser).then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: res.data.data.first_name + ' has been deleted',
                    showConfirmButton: false,
                    timer: 3000
                })
                this.load();
            }).catch ((err) => {
                console.log(err);
            })
        }, 

        openModalAdd() { 
            this.isModalAdd = true;
        }, 
        closeModalAdd() {
            this.isModalAdd = false;
        },

        openModalEdit(idUser) {
            this.userIdEdit = idUser
            this.isModalEdit = true;
        }, 
        closeModalEdit() {
            this.isModalEdit = false;
        },


        openModalDetail(idUser) {
            this.isModalDetail = true;
            axios.get('users/' + idUser).then(res => {
                this.detailUser = res.data.data
                console.log('object', this.detailUser);
            }).catch ((err) => {
                console.log(err);
            })
        }, 
        closeModalDetail() {
            this.isModalDetail = false;
        }, 
        
    },
}
</script>

<style scoped>
.bd-button button {
    margin: .25rem .125rem;
}
</style>