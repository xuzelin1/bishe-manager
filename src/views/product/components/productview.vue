<template>
  <div class="m-sale-view">
    <el-row>
      <el-col v-for="pro in productColumns" :key="pro.key" :span="12">
        <div class="u-item-title">{{ pro.title }}</div>
        <div class="u-item-info">{{ curDetail[pro.key] }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="u-item-title">商品图片</div>
        <el-image :src="curDetail['url']" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    curDetail: {
      type: Object,
      default() {
        return {
          name: '',
          price: '',
          oldPrice: '',
          desc: '',
          url: '',
          area: '',
          salenum: 0,
          type: '',
          salerId: '',
          commentNum: 0,
          star: 0,
          position: '',
          percapita: 0,
          inventory: 0,
          keywords: '',
          storeId: {}
        }
      }
    }
  },
  data() {
    return {
      productColumns: [
        {
          title: '商品名称',
          key: 'name'
        },
        {
          title: '商品价格',
          key: 'price'
        },
        {
          title: '商品类型',
          key: 'type'
        },
        {
          title: '关键字',
          key: 'keywords'
        },
        {
          title: '商品描述',
          key: 'desc'
        }
      ]
    }
  }
}
</script>

<style>
  h3 {
    border-bottom: 3px solid #000;
    padding-bottom: 20px;
  }
  .u-item-title {
    width: 120px;
    font-size: 16px;
    font-weight: 600;
    line-height: 35px;
    float: left;
  }
  .u-item-info {
    line-height: 35px;
  }
</style>
