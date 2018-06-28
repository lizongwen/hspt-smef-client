import AsyncValidator from 'async-validator';

import popMsg from '@/utils/notice/notice';
let table_validates = {
  validateByRow(row, index, rules, vm)
  {
    let validateState = '';
    const validator = new AsyncValidator(rules);
    validateState = 'validating';
    let count = 1;
    let cellList = document.querySelectorAll('.cellItem');
    let columnsList = Object.keys(vm.tableData_columns);


    // 清理 is_error和is_success状态
    for (let i = 0; i < cellList.length; i++) {
      let tempName = cellList[i].className.m_Replace('is-error', '').m_Replace('is-success', '');
      let newClassName = tempName.split(' ').filter((item, index) => {
        return item != '' && item != ' ';
      }).join(' ');
      cellList[i].className = newClassName;
    }

    // 验证
    validator.validate(row, (errors, invalidFields) => {
      validateState = !errors ? 'success' : 'error';
      let notice = "";
      if (errors) {
        let notice = '';
        // console.log('invalidFields:', invalidFields);
        for (let invalidKey in invalidFields) {
          // 对验证不通过的单元格高亮显示
          for (let i = 0; i < cellList.length; i++) {
            let haveFlag = cellList[i].className.includes(invalidKey);
            if (haveFlag) {
              let tempList = cellList[i].className.split(' ');
              tempList.push("is-" + validateState);
              cellList[i].className = tempList.join(' ');
            }
          }

          //构造错误提示信息
          invalidFields[invalidKey].forEach((item, index, array) => {
            notice += `<p>${count++}. ${item.message}; </p> `;
          })
        }
// 弹出错误信息
        popMsg.popErrorHtmlMsg(vm, notice);
      }
      else {
        row.edit = false;
      }
    })
  }
}

export default table_validates;

