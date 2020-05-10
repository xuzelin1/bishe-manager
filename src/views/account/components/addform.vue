<template>
  <div class="m-add-form">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="100px" class="demo-addForm">
      <el-form-item label="账号昵称" prop="username">
        <el-input v-model="addForm.username" />
      </el-form-item>
      <el-form-item label="账号密码" prop="password">
        <el-input v-model="password" />
        <span v-if="password">密码强度{{ pwdStrengthZH }}</span>
      </el-form-item>
      <el-form-item label="账号邮箱" prop="email">
        <el-input v-model="addForm.email" />
      </el-form-item>
      <el-form-item label="账号头像" prop="avatar">
        <el-input v-model="addForm.avatar" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">立即创建</el-button>
        <el-button @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      addForm: {
        username: '',
        password: '',
        email: 'xuzelin995@163.com',
        avatar: '',
        pwdStrength: 0
      },
      pwdStrengthZH: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请输入账号昵称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入账号密码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入账号邮箱', trigger: 'blur' }
        ],
        avatar: [
          { required: true, message: '请输入账号头像', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    password(value) {
      this.addForm.password = value
      var strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g') // 强
      var mediumRegex = new RegExp('^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$', 'g') // 中
      var enoughRegex = new RegExp('(?=.{6,}).*', 'g') // 弱
      if (strongRegex.test(value)) {
        this.pwdStrengthZH = '强'
        this.addForm.pwdStrength = 3
      } else if (mediumRegex.test(value)) {
        this.pwdStrengthZH = '中'
        this.addForm.pwdStrength = 2
      } else if (enoughRegex.test(value)) {
        this.pwdStrengthZH = '弱'
        this.addForm.pwdStrength = 1
      }
    }
  },
  methods: {
    ...mapActions('account', [
      'createAccount'
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const {
            username,
            password,
            email,
            avatar,
            pwdStrength
          } = this.addForm
          this.createAccount({
            username,
            password,
            email,
            avatar,
            pwdStrength
          }).then(res => {
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
    }
  }
}
</script>

<style>

</style>
