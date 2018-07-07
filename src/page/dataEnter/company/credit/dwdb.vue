<template>
  <div>
    <!--对外担保信息-->
    <el-card class="box-card" shadow='nevner'>
      <div slot="header" class="clearfix">
        <div class="card-right-wrap">
          <el-button class="save" type="primary" size="medium">保存</el-button>
        </div>
        <div class="card-title">对外担保信息</div>
      </div>
      <v-table
        is-horizontal-resize
        style="width:100%"
        :height="500"
        :title-rows="titleRows"
        :columns="columns"
        :table-data="tableData"
        row-hover-color="#eee"
        row-click-color="#edf7ff"
        :cell-edit-done="cellEditDone"
        :cell-merge="cellMerge"
      ></v-table>
    </el-card>
  </div>
</template>

<style>
</style>

<script>
  import AsyncValidator from 'async-validator';
  import popMsg from '@/utils/notice/notice';
  export default{
    data(){
      return {
        total: 0,
        tableData: [{
          firstItem: '保证汇总',
          num: 1,
          guaranteeAmount: 0,
          regular: 0,
          attention: 0,
          badness: 0,
          amount: 0
        }, {
          firstItem: '抵押汇总',
          num: 2,
          guaranteeAmount: 0,
          regular: 0,
          attention: 0,
          badness: 0,
          amount: 0
        }, {
          firstItem: '质押汇总',
          num: 3,
          guaranteeAmount: 0,
          regular: 0,
          attention: 0,
          badness: 0,
          amount: 0
        }],
        columns: [
          {field: 'firstItem', width: 100, columnAlign: 'center', isFrozen: true},
          {field: 'num', width: 110, columnAlign: 'center', isEdit: true},
          {field: 'guaranteeAmount', width: 110, columnAlign: 'center', isEdit: true},
          {field: 'regular', width: 110, columnAlign: 'center', isEdit: true},
          {field: 'attention', width: 110, columnAlign: 'center', isEdit: true},
          {field: 'badness', width: 110, columnAlign: 'center', isEdit: true},
          {field: 'amount', width: 110, columnAlign: 'center', isResize: true}
        ],
        titleRows: [
          [
            {fields: ['firstItem'], title: '', titleAlign: 'center'},
            {fields: ['num'], title: '笔数', titleAlign: 'center'},
            {fields: ['guaranteeAmount'], title: '担保金额', titleAlign: 'center'},
            {fields: ['regular', 'attention', 'badness'], title: '被担保业务余额', titleAlign: 'center'},
            {fields: ['amount'], title: '合计', titleAlign: 'center'}
          ]
        ],
        rules: {
          num: [
            {required: true, message: '此项必填'},
            {type: 'number', message: '此项必须为数字值'},
            {len: '5', message: '请填写5位数'}
          ],
          guaranteeAmount: [
            {required: true, message: '此项必填'},
            {type: 'number', message: '此项必须为数字值'}

          ],
          regular: [
            {required: true, message: '此项必填'},
            {type: 'number', message: '此项必须为数字值'}
          ],
          attention: [
            {required: true, message: '此项必填'},
            {type: 'number', message: '此项必须为数字值'}
          ],
          badness: [
            {required: true, message: '此项必填'},
            {type: 'number', message: '此项必须为数字值'}
          ]
        }
      }
    },
    computed: {
      totalNum()
      {
        let all = 0;
        this.tableData.forEach((items, index, array) => {
//          console.log('items:', items);
          for (let item in items) {
            if (item === 'firstItem') continue;
            all += parseInt(items[item]);
          }
        })
        return all;
      }
    },
    methods: {
      validateData(field, rowIndex, newValue, rowData){
        let rules, obj, rule;
        rules = this.rules;
        obj = {};
        rule = {};
        //取到当前规则
        rule[field] = rules[field];

        //粗犷的处理
        //需要转化input中的value为数字类型
        try {
          obj[field] = Number(newValue.trim());
          //tableData[rowIndex][field] = Number(newValue.trim());
          //console.log('rowData[rowIndex][field] typeof:', typeof Number(tableData[rowIndex][field]))
        } catch (ex) {
          console.log('in catch!!!');
          obj[field] = newValue.trim();
        }

        const validator = new AsyncValidator(rule);
        validator.validate(obj, (errors, invalidFields) => {
          console.log('typeof obj[field]:', typeof obj[field]);
          if (errors) {
            let notice = '';
            //构造错误信息
            invalidFields[field].forEach((item, index) => {
              notice += `${(index + 1)}. ${item.message}`;
            });
            //弹出错误信息
            popMsg.popErrorMsg(this, notice);
            //高亮该单元格，且让该单元格聚焦
          }
        });
      },
      cellEditDone(newValue, oldValue, rowIndex, rowData, field){
        this.tableData[rowIndex][field] = newValue;
        //数据验证
        this.validateData(field, rowIndex, newValue, rowData);
      },
      cellMerge(rowIndex, rowData, field){
        if (field === 'amount') {
          return {
            colSpan: 1,
            rowSpan: 3,
            content: this.totalNum
          }
        }
      }
    }
  }
</script>
