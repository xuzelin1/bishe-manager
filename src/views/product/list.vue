<template>
  <div class="m-product-list">
    <div class="u-filter-pane">
      <!-- 类型筛选 -->
      <el-select v-model="curType" placeholder="请选择类型">
        <el-option
          v-for="item in typeoOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" @click="addModalVisiable = true">添加商品</el-button>
    </div>
    <div class="u-table-pane">
      <el-table
        :data="productList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          width="50"
        />
        <el-table-column
          prop="name"
          label="名称"
        />
        <el-table-column
          prop="oldPrice"
          label="价格"
        />
        <el-table-column
          prop="price"
          label="团购价"
        />
        <el-table-column
          prop="desc"
          label="描述"
        />
        <el-table-column
          prop="type"
          label="类型"
        />
        <el-table-column
          prop="keywords"
          label="关键字"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleViewClick(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="handleEditClick(scope.row)">编辑</el-button>
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
      title="添加商品"
      :visible.sync="addModalVisiable"
      width="500px"
    >
      <AddForm />
    </el-dialog>

    <el-dialog
      title="修改商品"
      :visible.sync="editModalVisiable"
      width="500px"
    >
      <EditForm
        :edit-detail="curProduct"
      />
    </el-dialog>

  </div>
</template>

<script>
import AddForm from './components/addform.vue'
import EditForm from './components/editForm.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    AddForm,
    EditForm
  },
  data() {
    return {
      productList: [],
      curType: '',
      typeoOptions: [{
        value: '电子商品',
        label: '电子商品'
      }, {
        value: '学习用品',
        label: '学习用品'
      }],
      addModalVisiable: false,
      editModalVisiable: false,
      curProduct: {},
      total: 0,
      page: 1
    }
  },
  computed: {
    ...mapState('user', [
      '_id'
    ])
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions('product', [
      'getProductList'
    ]),
    getList() {
      this.getProductList({
        page: this.page,
        salerId: this._id
      }).then(res => {
        this.productList = res
      })
    },
    handleViewClick(row) {
      console.log(row)
    },
    handleEditClick(row) {
      console.log(row)
      this.curProduct = row
      this.editModalVisiable = true
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
