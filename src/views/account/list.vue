<template>
  <div class="m-account-list">
    <el-button
      type="primary"
      @click="addModalVisiable = true"
    >
      增加账号
    </el-button>
    <div class="u-table-pane">
      <el-table
        :data="accountList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label=""
        />
        <el-table-column
          prop="_id"
          label="ID"
        />
        <el-table-column
          prop="username"
          label="用户名"
        />
        <el-table-column
          prop="email"
          label="邮箱"
        />
        <el-table-column>
          <template slot-scope="scope">
            <el-avatar :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <!-- <el-button type="text" size="small" @click="handleViewClick(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="handleEditClick(scope.row)">修改</el-button> -->
            <el-button v-if="!scope.row.forbid" type="text" size="small" @click="handlePrevent(scope.row)">禁用</el-button>
            <el-button v-else type="text" size="small" @click="handlePrevent(scope.row)">启用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="添加账号"
      :visible.sync="addModalVisiable"
      width="500px"
    >
      <AddForm @submit="fetchList" />
    </el-dialog>
  </div>
</template>

<script>
import AddForm from './components/addform.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    AddForm
  },
  data() {
    return {
      accountList: [],
      addModalVisiable: false
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('account', [
      'getList',
      'forbidAccount'
    ]),
    fetchList() {
      this.addModalVisiable = false
      this.getList().then(res => {
        this.accountList = res.list
      })
    },
    handlePrevent(row) {
      this.forbidAccount({
        _id: row._id,
        curForbid: row.forbid
      })
        .then(res => {
          this.fetchList()
        })
    },
    handleAdd() {

    }
  }
}
</script>

<style>
  .m-account-list {
    margin: 50px;
  }

  .u-table-pane {
    padding-top: 30px;
  }
</style>
