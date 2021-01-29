<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
          <form @submit.prevent="registerForm">
              <h1 class="h3 mb-3 fw-normal">Sign Up Form</h1>
              <input v-model="form.name"  type="text" class="form-control" placeholder="Name">
              <input v-model="form.email" type="email" class="form-control my-3" placeholder="Email">
              <input v-model="form.password" type="password" class="form-control mb-3" placeholder="Password">
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      form:{
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async registerForm(){
      await axios.post('register', this.form)

      this.form.name = ''      
      this.form.email = ''      
      this.form.password = ''      

      this.$router.push('/login')
    },
  }

}
</script>
