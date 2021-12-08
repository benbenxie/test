<template>
  <div class="app-container">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {}
  },
  methods: {
    getUserInfo(params) {
      this.$store.state.empNumber = JSON.parse(params).data
    }
  }
}
</script>

<style lang="scss">
@import 'index';
</style>
