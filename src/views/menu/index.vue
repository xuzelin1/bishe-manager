<template>
  <div class="m-menu-list">
    <el-button
      type="primary"
      @click="handleAdd"
    >
      增加菜单
    </el-button>
    <div class="u-table-pane">
      <el-table
        :data="menuList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label="排行"
        />
        <el-table-column
          prop="key"
          label="key值"
        />
        <el-table-column
          prop="title"
          label="名称"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleViewClick(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="handleEditClick(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="菜单信息"
      :visible.sync="infoModalVisiable"
      width="900px"
    >
      <MenuView
        :cur-detail="curDetail"
      />
    </el-dialog>

    <el-dialog
      title="添加菜单"
      :visible.sync="addModalVisiable"
      width="500px"
    >
      <AddForm
        @submit="addSubmit"
      />
    </el-dialog>

    <el-dialog
      title="修改菜单"
      :visible.sync="editModalVisiable"
      width="500px"
    >
      <EditForm
        :edit-detail="curMenu"
        @submit="addSubmit"
      />
    </el-dialog>
  </div>
</template>

<script>
import AddForm from './components/addform.vue'
import EditForm from './components/editform.vue'
import MenuView from './components/menuview.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    MenuView,
    AddForm,
    EditForm
  },
  data() {
    return {
      menuList: [],
      curDetail: {},
      infoModalVisiable: false,
      addModalVisiable: false,
      editModalVisiable: false,
      curMenu: {}
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('menu', [
      'getList',
      'createMenu'
    ]),
    fetchList() {
      this.getList().then(res => {
        this.menuList = res.data
      })
    },
    handleViewClick(row) {
      this.curDetail = row
      this.infoModalVisiable = true
    },
    handleCurrentChange(value) {
      this.page = value
      this.getList()
    },
    handleAdd() {
      this.addModalVisiable = true
    },
    addSubmit() {
      this.editModalVisiable = false
      this.addModalVisiable = false
      this.fetchList()
    },
    handleEditClick(row) {
      this.editModalVisiable = true
      this.curMenu = row
    }
  }
}
</script>

<style>
  .m-menu-list {
    margin: 50px;
  }

  .u-table-pane {
    padding-top: 30px;
  }
</style>
