<template>
  <div class="m-add-form">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="100px" class="demo-addForm">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="addForm.name" />
      </el-form-item>
      <el-form-item label="商品售价" prop="oldPrice">
        <el-input v-model="addForm.oldPrice" />
      </el-form-item>
      <el-form-item label="团购价格" prop="price">
        <el-input v-model="addForm.price" />
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="addForm.desc" />
      </el-form-item>
      <el-form-item label="商品图片" prop="url">
        <el-input v-model="addForm.url" />
      </el-form-item>
      <el-form-item label="售卖地区" prop="area">
        <el-input v-model="addForm.area" />
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <el-input v-model="addForm.type" />
      </el-form-item>
      <el-form-item label="商品库存" prop="inventory">
        <el-input v-model="addForm.inventory" />
      </el-form-item>
      <el-form-item label="关键字" prop="keywords">
        <el-input v-model="addForm.keywords" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">立即创建</el-button>
        <el-button @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      addForm: {
        name: '测试',
        oldPrice: 200,
        price: 200,
        desc: '测试测试测试',
        url: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3741733804,1966033566&fm=26&gp=0.jpg',
        area: '广州',
        type: '电子商品',
        position: '广州',
        keywords: '测试',
        storeId: this.storeId,
        inventory: 1200
      },
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
  methods: {
    ...mapActions('product', [
      'createProduct'
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const {
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
          } = this.addForm
          console.log(this.storeId)
          this.createProduct({
            name,
            oldPrice,
            price,
            desc,
            url,
            area,
            type,
            position,
            keywords,
            storeId: this.storeId,
            inventory
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
    }
  }
}
</script>

<style>

</style>
