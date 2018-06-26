<template>
  <div>
    <!--对外担保信息-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="card-right-wrap">
          <el-button class="save" type="primary" size="medium">保存</el-button>
        </div>
        <div class="card-title">对外担保信息</div>
      </div>
      <el-table @cell-click="cellClickHanle" :data="tableData" style="width:100%" :span-method="amountSpanMethod">
        <el-table-column label="" prop="firstItem.value" width="100">
        </el-table-column>
        <el-table-column label="笔数" width="100">
          <template slot-scope="scope">
            <template v-if="scope.row.num.editing">
              <el-form :model="scope.row">
                <el-form-item prop="num.value" class="td-form-item">
                  <el-input class="edit-input" size="small" v-model="scope.row.num.value"></el-input>
                </el-form-item>
              </el-form>
            </template>
            <span v-else>{{scope.row.num.value}}</span>
          </template>
        </el-table-column>
        <el-table-column label="担保金额" prop="guaranteeAmount.value" width="100">
        </el-table-column>
        <el-table-column label="被担保业务余额">
          <el-table-column label="正常" prop="regular.value"></el-table-column>
          <el-table-column label="关注" prop="attention.value"></el-table-column>
          <el-table-column label="不良" prop="badness.value"></el-table-column>
        </el-table-column>
        <el-table-column label="合计" prop="amount.value">
        </el-table-column>
      </el-table>
      <button @click="makeCellEdit">makeCellEdit</button>
      <button @click="makeCellNoEdit">makeCellNoEdit</button>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          firstItem: {'value': '保证汇总', 'edit': false},
          num: {'value': '0', 'edit': true, editing: false},
          guaranteeAmount: {'value': '0', 'edit': true, editing: false},
          regular: {'value': '0', 'edit': true, editing: false},
          attention: {'value': '0', 'edit': true, editing: false},
          badness: {'value': '0', 'edit': true, editing: false},
          amount: {'value': '0', 'edit': true, editing: false}
        }, {
          firstItem: {'value': '抵押汇总', 'edit': false},
          num: {'value': '0', 'edit': true},
          guaranteeAmount: {'value': '0', 'edit': true},
          regular: {'value': '0', 'edit': true},
          attention: {'value': '0', 'edit': true},
          badness: {'value': '0', 'edit': true},
          amount: {'value': '0', 'edit': true}
        }, {
          firstItem: {'value': '质押汇总', 'edit': false},
          num: {'value': '0', 'edit': true},
          guaranteeAmount: {'value': '0', 'edit': true},
          regular: {'value': '0', 'edit': true},
          attention: {'value': '0', 'edit': true},
          badness: {'value': '0', 'edit': true},
          amount: {'value': '0', 'edit': true}
//          firstItem: '质押汇总',
//          num: '0',
//          guaranteeAmount: '0',
//          regular: '0',
//          attention: '0',
//          badness: 0,
//          amount: 0
        }]
      }
    },
    methods: {
      cellClickHanle(row, column, cell, event) {
        console.log('value:', event.path[0].innerText);
        console.log('columnIndex:', event.path[1].cellIndex);
        console.log('RowIndex:', event.path[2].rowIndex);
        let columnIndex = event.path[1].cellIndex;
        let rowIndex = event.path[2].rowIndex;
        let cellValue = event.path[0].innerText;
        if (columnIndex != 0 && columnIndex != 6) {
          console.log(event);
          console.log(cell);
          console.log('before:', event.target);
          event.target.innerHTML = "";
          console.log('after:', event.target);
          let cellInput = document.createElement("input");
          cellInput.value = cellValue;
          cellInput.setAttribute("type", "text");
          cellInput.style.width = "100%";
          cellInput.style.height = "100%";
          cellInput.focus();
          cellInput.select();

          event.target.appendChild(cellInput);

          cellInput.onblur = function () {
            console.log('onblur');
//            event.target.innerHTML = "";
            event.target.removeChild(cellInput);
            event.target.innerHTML = cellInput.value;
          };
        }
      },
      cellClickHanle1(row, column, cell, event){
        console.log(event.path[1].cellIndex);
        console.log(column);

      },
      makeCellEdit(){

      },
      makeCellNoEdit(){

      },
      amountSpanMethod({row, column, rowIndex, columnIndex}){
        if (columnIndex === 6) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  }
</script>

<style>

</style>
