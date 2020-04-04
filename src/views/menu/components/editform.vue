<template>
  <div class="m-add-form">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="100px" class="demo-addForm">
      <el-form-item label="菜单key值" prop="key">
        <el-input v-model="addForm.key" />
      </el-form-item>
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="addForm.title" />
      </el-form-item>
      <el-form-item label="菜单子项">
        <el-tag
          v-for="tag in addForm.childs"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="saveTagInput"
          v-model="curChild"
          class="input-new-tag"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加</el-button>
      </el-form-item>
      <el-form-item label="热门度" prop="hot">
        <el-input v-model="addForm.hot" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">立即修改</el-button>
        <el-button @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    editDetail: {
      type: Object,
      default() {
        return {
          _id: '',
          key: '',
          title: '',
          childs: [],
          hot: 0
        }
      }
    }
  },
  data() {
    return {
      addForm: JSON.parse(JSON.stringify(this.editDetail)),
      curChild: '',
      rules: {
        key: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入商品售价', trigger: 'blur' }
        ],
        childs: [
          { required: true, message: '请输入团购价格', trigger: 'blur' }
        ],
        hot: [
          { required: true, message: '请输入商品描述', trigger: 'blur' }
        ]
      },
      inputVisible: false
    }
  },
  watch: {
    editDetail(value) {
      this.addForm = JSON.parse(JSON.stringify(value))
    }
  },
  methods: {
    ...mapActions('menu', [
      'editMenu'
    ]),
    handleClose(tag) {
      this.addForm.childs.splice(this.addForm.childs.indexOf(tag), 1)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const {
            _id,
            key,
            title,
            childs,
            hot
          } = this.addForm
          this.editMenu({
            _id,
            key,
            title,
            childs,
            hot
          }).then(res => {
            console.log(res)
            this.$emit('submit', 'success')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const curChild = this.curChild
      if (curChild) {
        this.addForm.childs.push(curChild)
      }
      this.inputVisible = false
      this.curChild = ''
    }
  }
}
</script>

<style>

</style>
