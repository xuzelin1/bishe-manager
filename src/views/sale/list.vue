<template>
  <div class="m-product-list">
    <div class="u-filter-pane">
      <!-- 日期筛选 -->
      <el-date-picker
        v-model="createTime"
        type="date"
        placeholder="选择日期"
      />
    </div>
    <div class="u-table-pane">
      <el-table
        :data="saleList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          width="50"
        />
        <el-table-column
          prop="createTime"
          label="名称"
        />
        <el-table-column
          prop="productNum"
          label="商品数量"
        />
        <el-table-column
          prop="total"
          label="订单总价"
        />
        <el-table-column
          prop="statusZh"
          label="订单状态"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleViewClick(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>

    <el-dialog
      title="订单信息"
      :visible.sync="infoModalVisiable"
      width="900px"
    >
      <SaleView
        :cur-detail="curDetail"
      />
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import SaleView from './components/saleview.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    SaleView
  },
  data() {
    return {
      saleList: [],
      curDetail: {},
      infoModalVisiable: false,
      total: 0,
      page: 1,
      createTime: ''
    }
  },
  computed: {
    ...mapState('store', [
      '_id'
    ])
  },
  watch: {
    createTime(value) {
      this.page = 1
      this.getList()
    },
    _id(value) {
      this.getList()
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions('sale', [
      'getSalerList'
    ]),
    getList() {
      const t = moment(this.createTime).format('YYYY-MM-DD')
      const createTime = t === 'Invalid date' ? '' : t
      this.getSalerList({
        storeId: this._id,
        page: this.page,
        createTime
      }).then(res => {
        this.saleList = res.salelist
        this.total = res.total
      })
    },
    handleViewClick(row) {
      this.curDetail = row
      this.infoModalVisiable = true
    },
    handleCurrentChange(value) {
      this.page = value
      this.getList()
    }
  }
}
</script>

<style>
  .m-product-list {
    margin: 50px;
  }

  .u-filter-pane {
    padding-bottom: 30px;
  }
</style>
