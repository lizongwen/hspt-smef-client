<template>
  <div class="wrap clearfix">
    <span class="title">{{title}}</span>
    <el-button class="save" type="primary" size="medium">保存</el-button>
    <el-button class="getData" size="medium">获取数据</el-button>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {}
    },
    props: ['title']
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  @import "@/style/commonStyle.scss";
  .wrap {
    padding: 19px;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    //border-bottom: 1px solid $border-color-light;
    .title {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #000000;
      line-height: 36px;
    }
    .getData, .save {
      float: right;
    }
    .getData{
      margin-right:10px;
    }
  }
</style>
