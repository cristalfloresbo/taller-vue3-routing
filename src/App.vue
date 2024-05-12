<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <RouterView></RouterView>
  <RouterLink :to="{name: 'home'}">Go to Home</RouterLink>
  <RouterLink :to="{name: 'about'}">Go to About</RouterLink>
  <RouterLink :to="{name: 'user', params: { id: 2 }}">Go to User</RouterLink>
  <button @click="redirecTo">Click</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    redirecTo() {
      this.$router.push({ name: 'user', params: { id: 1 } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
