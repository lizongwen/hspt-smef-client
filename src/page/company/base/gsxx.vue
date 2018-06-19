<template>
  <div>
    <v-getAndSaveData title="工商基本信息"></v-getAndSaveData>
    <el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="formInline">
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="注册日期:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="注册机关:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="社会信用代码:">
            <el-input :disabled="true" v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="组织机构代码:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="注册号:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="注册资本:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="企业类型:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="成立年份:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="营业期限:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="注册地址:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="法人代表:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="电话:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="传真:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="网站:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="公司人数:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-form-item label="销售收入:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :offset="1" :span="10">
          <el-form-item label="净资产:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="1" :span="21">
          <el-form-item label="经营范围:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>
  import getAndSaveData from '@/components/getAndSaveData.vue';
  export default {
    components: {
      'v-getAndSaveData': getAndSaveData
    },
    data() {
      return {
        labelPosition: 'right',
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/style/commonStyle.scss";

  .form {
    margin-top: 4px;
    padding: 43px 20px;
    background: $background-color-inside;
  }

</style>









