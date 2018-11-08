<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from './components/common/svg'
export default {
  name: 'App',
  components:{
    svgIcon
  }
}
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active ,.router-fade-leave-active{
    transition: opacity .3s;
  }
  .router-fade-enter,.router-fade-leave-avtive{
    opacity: 0;
  }
</style>
