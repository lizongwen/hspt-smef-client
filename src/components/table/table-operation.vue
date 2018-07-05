<template>
  <div>
    <template v-if="scope.row.edit">
      <el-button type="success" @click="confirmEdit(scope.row,scope.$index)" size="small"
                 icon="el-icon-circle-check-outline">确定
      </el-button>
      <el-button type="success" @click="cacelEdit(scope.row)" size="small" icon="el-icon-circle-close-outline">取消
      </el-button>
    </template>
    <template v-else>
      <el-button type="primary" @click='edit(scope.row)' size="small" icon="el-icon-edit">编辑</el-button>
      <el-button type="primary" @click='deleteRow(scope.row,scope.$index)' size="small" icon="el-icon-delete">删除
      </el-button>
    </template>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    props: {
      scope: {
        type: Object
      },
      tableData: {
        type: Array
      }
    },
    data() {
      return {
        testData: {a: 1}
      };
    },
    mounted() {
      // this.init();
    },
    methods: {
      //编辑
      edit(rowObj) {
        rowObj.edit = true;
        this.oldRow = JSON.parse(JSON.stringify(rowObj));
        console.log('scope:', this.scope);
      },
      //取消编辑
      cacelEdit(rowObj) {
        this.oldRow.edit = false;
        let rowAttrList = Object.keys(rowObj);
        rowAttrList.forEach(item => {
          // row[item] = this.oldRow[item];
          rowObj[item] = JSON.parse(JSON.stringify(this.oldRow[item]));
        });
      },
      //确认编辑
      confirmEdit(rowObj, rowIndex) {
        this.$emit("verify", rowObj, rowIndex);
      },
      //删除行
      deleteRow(rowObj, index) {
        this.$confirm("确认删除?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }).then(
          () => {
			let rowData=this.tableData.splice(index, 1);
			if(rowData[0].id!=null){
				this.$emit('acceptDelRow',rowData[0])
			}
          },
          () => {}
        );
      }
    }
  };
</script>
<style lang='scss' rel="stylesheet/scss">
</style>
