<template>
    <div class="container">
      <div class="row">
        <div class="col-4 offset-4">
            <form @submit.prevent="loginForm">
                <h1 class="h3 mb-3 fw-normal">Sign in Form</h1>
                <input v-model="form.email" type="email" class="form-control" placeholder="Email address">
                <input v-model="form.password" type="password" class="form-control my-3" placeholder="Password">
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form:{
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginForm(){
       let response = await axios.post('login', this.form)

        localStorage.setItem('token', response.data.success.token);
        this.form.name = ''
        this.form.email = ''
        this.$store.dispatch('user', response.data.user)
        this.$router.push('/')
      
    },
  }

}
</script>
