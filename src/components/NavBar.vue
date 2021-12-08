<template>
  <van-nav-bar class="navbar" :title="getTitle" :border="false" :left-arrow="showLeft" @click-left="onClickLeft">
    <template #right>
      <slot></slot>
    </template>
  </van-nav-bar>
</template>

<script>
import { backHome } from '@/utils'
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    showLeft: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getTitle() {
      if (this.title != null && this.title !== '') {
        return this.title
      } else {
        return this.$route.meta.title || ''
      }
    }
  },
  methods: {
    onClickLeft() {
      if (this.url && this.url !== '') {
        if (this.url === 'backHome') {
          backHome()
        } else {
          this.$router.push({ path: this.url })
        }
      } else {
        this.$router.back(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #49a3f8;
  color: #fff;

  overflow: hidden;
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
  /deep/.van-icon {
    color: #fff !important;
  }
  /deep/.promotion-list {
    a {
      color: #fff;
    }
  }
}
</style>
