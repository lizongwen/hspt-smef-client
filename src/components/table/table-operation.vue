<template>
  <span>
    <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>
    <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
  </span>
</template>
<script type='text/ecmascript-6'>
  export default{
    props: {
      rowData: {
        type: Object
      },
      field: {
        type: Number
      },
      index: {
        type: Number
      }
    },
    methods: {
      update(){
        let params = {type: 'edit', index: this.index, rowData: this.rowData};
        this.$emit('on-custom-comp', params);
      },
      deleteRow(){
        let params = {type: 'delete', index: this.index};
        this.$emit('on-custom-comp', params);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
