<template>
  <div>
     <div class="container">
      <div class="row">
        <h1 v-if="user">Hello, {{ user.name }}. Your email is {{ user.email }}</h1>
        <h1 v-if="!user">You're not logged in.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user'])
  },
}
</script>
