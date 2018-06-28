import AsyncValidator from 'async-validator';

import popMsg from '@/utils/notice/notice';
let table_validates = {
  validateByRow(row, index, rules, vm)
  {
    let validateState = '';
    const validator = new AsyncValidator(rules);
    validateState = 'validating';
    let count = 1;
    validator.validate(row, (errors, invalidFields) => {
      validateState = !errors ? 'success' : 'error';
      let notice = "";
      if (errors) {
        let notice = '';
        console.log('invalidFields:', invalidFields);
        for (let key in invalidFields) {
          invalidFields[key].forEach((item, index, array) => {
            //1.构造错误提示信息
            notice += `<p>${count++}. ${item.message}; </p> `;
            //2.修改当前单元格样式
            // document.className += ' is-' + value;
          })
          console.log('key:', key);
        }
        let nodeList = document.querySelectorAll('.cellItem');
        console.log(nodeList);

        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].className += ' is-' + validateState;
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

