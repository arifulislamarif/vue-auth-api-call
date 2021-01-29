<template>
  <div>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav';
import axios from 'axios';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      // user: ''
    }
  },
  async created() {
    let response = await axios.get('details')
    // this.user = response.data.success;
    this.$store.dispatch('user', response.data.success)

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
