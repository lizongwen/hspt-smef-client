<template>
	<div class="addBtn" @click="addhandler"> + 添加</div>
</template>
<script type='text/ecmascript-6'>
export default {
  props: {
    tableData: {
      type: Array
    },
    tableData_columns:{
        type:Object
    }
  },
  methods: {
    addhandler() {
        if(this.tableData!==null){
		  this.tableData.push(JSON.parse(JSON.stringify(this.tableData_columns)));
        }
       // this.$emit("addRow");
//      this.$emit("addRow", this.tableIndex);
    }
  }
};
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
@import "@/style/commonStyle.scss";

.addBtn {
  margin-top: 18px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
  color: $font-color-normal;
  background: $btn-color-light;
  border: 1px dashed $border-color-normal;
  cursor: pointer;
  &:hover {
    background: $btn-hover-light;
  }
}
</style>
