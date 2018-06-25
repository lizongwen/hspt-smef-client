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
    mounted() {
      // this.init();
    },
    methods: {
      objClone(origin){
          let originProto = Object.getPrototypeOf(origin);
          return Object.assign(Object.create(originProto),origin);
      },
      //编辑
      edit(row) {
        row.edit = true;
        this.oldRow = JSON.parse(JSON.stringify(row));
      },
      //取消编辑
      cacelEdit(row) {
        this.oldRow.edit = false;
        let rowAttrList = Object.keys(row);
        rowAttrList.forEach((item)=>{
            row[item] = this.oldRow[item];
        })
      },
      //确认编辑
      confirmEdit(row, index) {
        this.$emit("verify", row, index);
      },
      //删除行
      deleteRow(row, index) {
        this.$confirm("确认删除?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }).then(
          () => {
            this.tableData.splice(index, 1);
          },
          () => {
          }
        );
      }
    }
  };
</script>
<style lang='scss' rel="stylesheet/scss">
</style>
