<template>
   <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Logo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item ">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link active" aria-current="page" to="/register">Register</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto" v-if="user">
                    <li class="nav-item ">
                        <a @click.prevent="Logout" class="nav-link active" aria-current="page" href="javascript:void(0)">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        Logout(){
            localStorage.removeItem('token');
            this.$store.dispatch('user', null)
            this.$router.push('/')
        }
    },
}
</script>