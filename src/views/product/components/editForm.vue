<template>
  <div class="m-add-form">
    <el-form ref="editForm" :model="editForm" :rules="rules" label-width="100px" class="demo-editForm">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item label="商品售价" prop="oldPrice">
        <el-input v-model="editForm.oldPrice" />
      </el-form-item>
      <el-form-item label="团购价格" prop="price">
        <el-input v-model="editForm.price" />
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="editForm.desc" />
      </el-form-item>
      <el-form-item label="商品图片" prop="url">
        <el-input v-model="editForm.url" />
      </el-form-item>
      <el-form-item label="售卖地区" prop="area">
        <el-input v-model="editForm.area" />
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <el-input v-model="editForm.type" />
      </el-form-item>
      <el-form-item label="商品库存" prop="inventory">
        <el-input v-model="editForm.inventory" />
      </el-form-item>
      <el-form-item label="关键字" prop="keywords">
        <el-input v-model="editForm.keywords" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('editForm')">立即修改</el-button>
        <el-button @click="resetForm('editForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    editDetail: {
      type: Object,
      default() {
        return {
          _id: '',
          name: '',
          oldPrice: 0,
          price: 0,
          desc: '',
          url: '',
          area: '',
          type: '',
          position: '',
          keywords: '',
          inventory: 0
        }
      }
    }
  },
  data() {
    return {
      editForm: JSON.parse(JSON.stringify(this.editDetail)),
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        oldPrice: [
          { required: true, message: '请输入商品售价', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入团购价格', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入商品描述', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入商品图片', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入商品地区', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入商品类型', trigger: 'blur' }
        ],
        keywords: [
          { required: true, message: '请输入关键字', trigger: 'blur' }
        ],
        inventory: [
          { required: true, message: '请输入商品库存', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'storeId'
    ])
  },
  watch: {
    editDetail(value) {
      this.editForm = JSON.parse(JSON.stringify(value))
    }
  },
  methods: {
    ...mapActions('product', [
      'editProduct'
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const {
            _id,
            name,
            oldPrice,
            price,
            desc,
            url,
            area,
            type,
            position,
            keywords,
            inventory
          } = this.editForm
          console.log(this.storeId)
          this.editProduct({
            _id,
            name,
            oldPrice,
            price,
            desc,
            url,
            area,
            type,
            position,
            keywords,
            inventory
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
