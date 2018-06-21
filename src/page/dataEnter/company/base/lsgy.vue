<template>
  <div>
    <!--公司历史沿革-->
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

  let mockData = [{"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
    {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
    {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
    {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"},
    {"modifiedDate": "2018/06/08", "modifiedEvent": "经营范围变更", "beforeModify": "-", "afterModify": "-"}
  ];


  export default {
    components: {
      'v-getAndSaveData': getAndSaveData,
      'v-tabelAddBtn': tabelAddBtn
    },
    data: function () {
      return {
        newFlag: false,
        tableData: [],
        columns: [
          {
            field: 'custome', title: '序号', width: 50, isEdit: false, titleAlign: 'center', columnAlign: 'center',
            formatter: function (rowData, rowIndex, pagingIndex, field) {
              return (rowIndex + 1)
            }, isFrozen: true
          },
          {field: 'modifiedDate', title: '变更日期', width: 100, isEdit: true, titleAlign: 'center', columnAlign: 'center'},
          {
            field: 'modifiedEvent',
            title: '变更事项',
            width: 100, isEdit: true,
            titleAlign: 'center',
            columnAlign: 'center'
          },
          {field: 'beforeModify', title: '变更前', width: 240, isEdit: true, titleAlign: 'center', columnAlign: 'center'},
          {
            field: 'afterModify',
            title: '变更后',
            width: 200, isEdit: true,
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
    created(){
      console.log('in created');
      this.tableData = mockData;
    },
    mounted(){
      console.log('in mounted');
      this.$store.commit('setHistoryNewFlag', {newFlag: false});
    },
    methods: {
      customCompFunc(params){
//        console.log(params);
        switch (params.type) {
          case 'delete':
            this.$delete(this.tableData, params.index);
            break;
          case 'edit':
            //改变该行背景色，且让该行可编辑文本框呈现可编辑状态
            this.clickIndex = params.index;
//            this.setColumnsEditable(true);
            break;
          case 'cancel':
            this.tableData.splice(params.index, 1);
            break;
          case 'save':
            this.$store.commit('setHistoryNewFlag', {newFlag: false});
            console.log(this.$store.state.company.historyNewFlag);
        }
      },
      cellEditDone(newValue, oldValue, rowIndex, rowData, field){
        this.tableData[rowIndex][field] = newValue;
      },
      addData(){
        console.log('点击addData');
        this.$store.commit('setHistoryNewFlag', {newFlag: true});
        this.tableData.push({"modifiedDate": "", "modifiedEvent": "", "beforeModify": "", "afterModify": ""});
      }
//      ,
//      setColumnsEditable(editflag){
//        this.columns.forEach(function (item, index, array) {
//          if (index != 0 && index != array.length) {
//            item.isEdit = true;
//          }
//        })
//        console.log(this.columns);
//      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
