<template>
  <div>
    <v-getAndSaveData title="工商基本信息"></v-getAndSaveData>
    <div class="contentWrap">
      <el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="form">
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="注册日期:">
              <el-date-picker
                size="small"
                v-model="form.regDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="注册机关:">
              <el-input v-model="form.user"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="社会信用代码:">
              <el-input :disabled="true" v-model="form.creditCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="组织机构代码:">
              <el-input v-model="form.orgCode"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="注册号:">
              <el-input v-model="form.regNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="注册资本:">
              <el-input v-model="form.regAsset"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="企业类型:">
              <el-input v-model="form.companyType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="成立年份:">
              <el-date-picker
                size="small"
                v-model="form.regDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="营业期限:">
              <el-input v-model="form.operationTerm"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="注册地址:">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="法人代表:">
              <el-input v-model="form.legalRepresentative"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="电话:">
              <el-input v-model="form.phoneNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="传真:">
              <el-input v-model="form.faxNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="网站:">
              <el-input v-model="form.website"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="公司人数:">
              <el-input v-model="form.staffNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="10">
            <el-form-item label="销售收入:">
              <el-input v-model="form.saleRevenue"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="10">
            <el-form-item label="净资产:">
              <el-input v-model="form.netAsset"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="21">
            <el-form-item label="经营范围:">
              <!--<el-input v-model="form.user"></el-input>-->
              <el-input type="textarea" v-model="form.businessScope"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import getAndSaveData from '@/components/dataEnter/getAndSaveData.vue';
  export default {
    components: {
      'v-getAndSaveData': getAndSaveData
    },
    data() {
      return {
        labelPosition: 'right',
        form: {
          regDate: '',
          creditCode: '',
          orgCode: '',
          regNum: '',
          regAsset: '',
          companyType: '',
          foundedYear: '',
          operationTerm: '',
          address: '',
          legalRepresentative: '',
          phoneNum: '',
          faxNum: '',
          website: '',
          staffNum: '',
          saleRevenue: '',
          netAsset: '',
          businessScope: ''
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

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }

</style>









