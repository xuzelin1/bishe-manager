<template>
  <div class="m-sale-view">
    <h3>订单信息</h3>
    <el-row>
      <el-col v-for="sale in saleColumns" :key="sale.key" :span="12">
        <div class="u-item-title">{{ sale.title }}</div>
        <div class="u-item-info">{{ curDetail[sale.key] }}</div>
      </el-col>
    </el-row>
    <h3>商品信息</h3>
    <el-row>
      <el-col v-for="pro in productColumns" :key="pro.key" :span="12">
        <div class="u-item-title">{{ pro.title }}</div>
        <div class="u-item-info">{{ curDetail.proId[pro.key] }}</div>
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
        return {}
      }
    }
  },
  data() {
    return {
      saleColumns: [
        {
          title: '订单时间',
          key: 'createTime'
        },
        {
          title: '订单状态',
          key: 'statusZh'
        },
        {
          title: '订单数量',
          key: 'productNum'
        },
        {
          title: '订单总价',
          key: 'total'
        }
      ],
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
  },
  mounted () {
    console.log(curDetail)
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
