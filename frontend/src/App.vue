<template>
  <div>
    <Home />
    <Search />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Home,
    Search
  }
}
</script>

<style>

</style>
