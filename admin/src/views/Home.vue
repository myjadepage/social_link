<template>
  <div class="home">
    <HeaderBar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HeaderBar
  }
}
</script>
