<template>
  <div id="app">
    <div class="main-wrapper">
      <component :is="headerComponent"></component>
      <router-view/>
      <component :is="footerComponent"></component>
    </div>
  </div>
</template>

<script>
import HeaderIndex from './components/HeaderIndex.vue'
import HeaderDashboard from './components/HeaderDashboard.vue'
import FooterIndex from './components/FooterIndex.vue'
import FooterDashboard from './components/FooterDashboard.vue'


export default {
	name: "App",
  components: {
    HeaderIndex,
    HeaderDashboard,
    FooterIndex,
    FooterDashboard
  },
  computed: {
    headerComponent() {
      return this.$route.path != "/" ? HeaderDashboard : HeaderIndex
    },
    footerComponent() {
      return this.$route.path != "/" ? FooterDashboard : FooterIndex
    }
  }
};
</script>
