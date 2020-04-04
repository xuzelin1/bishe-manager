<template>
  <div class="m-account-list">
    <!-- <el-button
      type="primary"
      @click="handleAdd"
    >
      增加菜单
    </el-button> -->
    <div class="u-table-pane">
      <el-table
        :data="accountList"
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
          <!-- <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleViewClick(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="handleEditClick(scope.row)">修改</el-button>
          </template> -->
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      accountList: []
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('account', [
      'getList',
      'createAccount'
    ]),
    fetchList() {
      this.getList().then(res => {
        this.accountList = res.data
      })
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
