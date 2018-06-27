import AsyncValidator from 'async-validator';

import popMsg from '@/utils/notice/notice';
let table_validates = {
  validateByRow(row, index, rules,vm)
  {
    const validator = new AsyncValidator(rules);
    let count = 1;
    validator.validate(row, (errors, invalidFields) => {
      let notice = "";
      if (errors) {
        let notice = '';
        for (let key in invalidFields) {
          invalidFields[key].forEach((item, index, array) => {
            notice += `<p>${count++}. ${item.message}; </p> `;
          })
        }
        console.log(notice);
//            //弹出错误信息
        popMsg.popErrorHtmlMsg(vm, notice);
        //高亮该单元格，且让该单元格聚焦
      }
      else {
        row.edit = false;
      }
    })
  }
}

export default table_validates;

