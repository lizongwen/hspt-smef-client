<template>
  <div>
    <v-getAndSaveData title="公司历史沿革"></v-getAndSaveData>
    <div class="contentWrap">
      <v-table
        is-horizontal-resize
        style="width:100%"
        :columns="columns"
        :table-data="tableData"
        :show-vertical-border="false"
        row-hover-color="#eee"
        row-click-color="#edf7ff"
        @on-custom-comp="customCompFunc"
        :cell-edit-done="cellEditDone"
      ></v-table>
      <v-tabelAddBtn @addEvent="addData"></v-tabelAddBtn>
    </div>
  </div>
</template>

<script>
  import getAndSaveData from '@/components/dataEnter/getAndSaveData.vue';
  import tabelAddBtn from '@/components/table/table-add-btn.vue';
  //  import tableOperation from '@/components/table/table-operation.vue';
  export default {
    components: {
      'v-getAndSaveData': getAndSaveData,
      'v-tabelAddBtn': tabelAddBtn
    },
    data: function () {
      return {
        tableData: [
          {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
          {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
          {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
          {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
          {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"}
        ],
        columns: [
          {
            field: 'custome', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center',
            formatter: function (rowData, rowIndex, pagingIndex, field) {
              return (rowIndex + 1)
            }, isFrozen: true
          },
          {field: 'modifiedDate', title: '变更日期', width: 100, isEdit: true, titleAlign: 'center', columnAlign: 'center'},
          {field: 'modifiedEvent', title: '变更事项', width: 100, isEdit: true, titleAlign: 'center', columnAlign: 'center'},
          {field: 'beforeModify', title: '变更前', width: 240, isEdit: true, titleAlign: 'center', columnAlign: 'center'},
          {
            field: 'afterModify',
            title: '变更后',
            width: 200,
            isEdit: true,
            titleAlign: 'center',
            columnAlign: 'center',
            isResize: true
          },
          {
            field: 'custome-adv',
            title: '操作',
            width: 200,
            titleAlign: 'center',
            columnAlign: 'center',
            componentName: 'v-table-operation',
            isResize: true
          }
        ]
      }
    },
    methods: {
      customCompFunc(params){

        console.log(params);

        if (params.type === 'delete') { // do delete operation

          this.$delete(this.tableData, params.index);

        } else if (params.type === 'edit') { // do edit operation

          alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
        }
      },
      cellEditDone(newValue, oldValue, rowIndex, rowData, field){
        this.tableData[rowIndex][field] = newValue;
        // 接下来处理你的业务逻辑，数据持久化等...
      },
      addData(){
        this.tableData.push({"name": "", "tel": "", "hobby": "", "address": ""});
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
