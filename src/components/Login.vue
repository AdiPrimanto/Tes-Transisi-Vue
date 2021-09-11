<template>
    <div>
        <div class="auth-wrapper mt-5">
            <div class="auth-inner">
                <Error v-if="error" :error="error" />

                <h2 class="text-center mb-4">Login</h2>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">
                        Submit
                        <div class="spinner-border spinner-border-sm" role="status" v-if="spinners == true">
                            <!-- <span class="visually-hidden">Loading...</span> -->
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Error from './Error'

export default {
    name: "Login",
    components: {
        Error
    },
    data() {
        return {
            email: 'eve.holt@reqres.in',
            password: 'pistol',
            error: '',
            spinners: false
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.spinners = true
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });
                setTimeout(function(){
                    this.spinners = false
                }, 1000);
                localStorage.setItem('token', response.data.token)

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 3000
                })
    
                this.$router.push('/home');
            } catch (e) {
                this.spinners = true
                await setTimeout(function(){
                    this.spinners = false
                }, 500);
                this.spinners = false
                this.error = 'Missing Password'
            }
        }
    },
}
</script>

<style scoped>
.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner {
  width: 450px;
  margin: auto;
  background: #eee;
  padding: 40px 55px;
  border-radius: 15px;
}
.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}
</style>