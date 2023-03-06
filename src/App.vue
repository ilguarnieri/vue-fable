<template>
  <body id="app">

    <!-- header -->
    <FableHeader />

    <!-- burger menu -->
    <BurgerMenu />    

    <div v-show="!store.burgerActive">
      <!-- main -->
      <FableMain />
    </div>

  </body>
</template>

<script>
import FableHeader from './components/macro/FableHeader.vue'
import BurgerMenu from './components/commons/BurgerMenu.vue'
import FableMain from './components/macro/FableMain.vue'
import store from './store.js'

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components: {
    FableHeader,
    BurgerMenu,
    FableMain
  }
}
</script>

<style lang="scss">
@import './assets/scss/_common.scss';
@import './assets/scss/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: $gray;
}
</style>
