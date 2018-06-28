import AsyncValidator from 'async-validator';

import popMsg from '@/utils/notice/notice';
let table_validates = {
  validateByRow(row, index, rules, vm)
  {
    const validator = new AsyncValidator(rules);
    vm.validateState = 'validating';
    let count = 1;
    validator.validate(row, (errors, invalidFields) => {
      vm.validateState = !errors ? 'success' : 'error';
      let notice = "";
      if (errors) {
        let notice = '';
        for (let key in invalidFields) {
          invalidFields[key].forEach((item, index, array) => {
            //1.构造错误提示信息
            notice += `<p>${count++}. ${item.message}; </p> `;
            //2.修改当前单元格样式
            // dom.className += ' is-' + value;
            console.log('field:', item);
          })
        }
        console.log(notice);
//            //弹出错误信息
        popMsg.popErrorHtmlMsg(vm, notice);

      }
      else {
        row.edit = false;
      }
    })
  }
}

export default table_validates;

