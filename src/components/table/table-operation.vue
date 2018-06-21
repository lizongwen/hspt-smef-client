<template>
  <div>
    <span v-if="!editingFlag">
      <a href="" @click.prevent="update(rowData,index)">编辑</a>
      <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
    </span>
    <span v-if="editingFlag">
    <a href="" @click.stop.prevent="save(rowData,index)">保存</a>
    <a href="" @click.stop.prevent="cancel(rowData,index)">取消</a>
    </span>
  </div>

</template>
<script type='text/ecmascript-6'>
  export default{
    props: {
      rowData: {
        type: Object
      },
      field: {
        type: String
      },
      index: {
        type: Number
      }
    },
    computed: {
      editingFlag(){
        return this.$store.state.company.editingState;
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
      },
      save(){
        let params = {type: 'save', index: this.index, rowData: this.rowData};
        this.$emit('on-custom-comp', params);
      },
      cancel(){
        let params = {type: 'cancel', index: this.index, rowData: this.rowData};
        this.$emit('on-custom-comp', params);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
