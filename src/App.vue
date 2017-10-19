<template>
  <div id="app" class="container">
    <app-header></app-header>
      <transition name="slide" type="animation">
          <router-view class="view"></router-view>
      </transition>
     <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';


export default {
  name: 'app',
  components: {
      'app-header': Header,
      'app-footer': Footer
  }
}
</script>

<style lang="scss">

    .view {
        height: 50vh;
    }

    .slide-enter-active {
        -webkit-animation: slide-in 350ms ease-out forwards;
        -o-animation: slide-in 350ms ease-out forwards;
        animation: slide-in 350ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards
    }



@keyframes slide-in {
    from {
        -webkit-transform: translateY(-30px);
        -moz-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        -o-transform: translateY(-30px);
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
    @keyframes slide-out {
        from {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
        to{
            -webkit-transform: translateY(-30px);
            -moz-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            -o-transform: translateY(-30px);
            transform: translateY(-30px);
            opacity: 1;
        }
    }

</style>
