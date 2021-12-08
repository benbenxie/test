<template>
  <div class="nodata">
    <img src="@/assets/images/nodata.svg" alt="" />
    <div class="text">没有找到相关内容~</div>
  </div>
</template>
<style lang="scss" scoped>
.nodata {
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 420px;
  }
  .text {
    font-size: 30px;
    color: #606266;
  }
}
</style>
