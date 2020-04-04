<template>
  <div class="m-sale-view">
    <div class="u-item">
      <span class="u-title">菜单key</span>
      <span>{{ curDetail.key }}</span>
    </div>
    <div class="u-item">
      <span class="u-title">菜单标题</span>
      <span>{{ curDetail.title }}</span>
    </div>
    <div class="u-item">
      <span class="u-title">菜单热度</span>
      <span>{{ curDetail.hot }}</span>
    </div>
    <div class="u-item">
      <span class="u-title">子菜单</span>
      <el-tag v-for="item in curDetail.childs" :key="item">
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curDetail: {
      type: Object,
      default() {
        return {
          title: '',
          key: '',
          childs: [],
          hot: 0
        }
      }
    }
  },
  mounted() {
    console.log(this.curDetail)
  }
}
</script>

<style>
  h3 {
    border-bottom: 3px solid #000;
    padding-bottom: 20px;
  }
  .u-item {
    line-height: 40px;
  }
  .u-title {
    font-size: 16px;
    width: 100px;
    display: inline-block;
  }
</style>
